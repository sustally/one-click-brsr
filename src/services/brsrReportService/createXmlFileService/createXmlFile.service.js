const httpStatus = require("http-status");
const ApiError = require("../../../utils/ApiError");
const User = require("../../../models/userModel/user.model");
const BRSRReport = require("../../../models/brsrReportModel/brsrReport.model");
const Variable = require("../../../models/variableModel/variable.model");
const logger = require("../../../config/logger");
const fs = require("fs");
const js2xmlparser = require("js2xmlparser");
const path = require("path");
const uuid = require("uuid");

const addContextRefToTags = (data) => {
  if (typeof data === "object" && data !== null) {
    for (const key in data) {
      if (!key.startsWith("in-capmkt:") && key !== "@") {
        // Preserve the value and add the namespace and attributes
        const value = data[key];
        const newKey = `in-capmkt:${key}`;

        if (typeof value === "object") {
          // If the value is an object, recursively apply the function
          data[newKey] = addContextRefToTags(value);
        } else {
          // Add the contextRef attribute and preserve the value as a string
          data[newKey] = {
            "@": { contextRef: "DCYMain" }, // Attribute
            value: value, // Text value
          };
        }
        delete data[key]; // Remove the old key
      } else if (typeof data[key] === "object") {
        addContextRefToTags(data[key]); // Recursively process nested objects
      }
    }
  }
  return data;
};

const createXmlFile = async (userId, brsrReportId) => {
  try {
    logger.info("update BRSR report API called");

    if (!brsrReportId) {
      logger.error("Please select BRSR Report");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Please select BRSR Report");
    }
    const user = await User.findOne({ userId: userId });
    if (!user) {
      logger.error("You do not have permission to perform this action");
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to perform this action"
      );
    }

    const brsrReport = await BRSRReport.findOne({
      userId,
      brsrReportId,
    });
    if (!brsrReport) {
      logger.error("BRSR report not found");
      throw new ApiError(httpStatus.NOT_FOUND, "BRSR report not found");
    }

    const variableDoc = await Variable.findOne({ userId: userId });
    if (!variableDoc) {
      logger.error("Variables not found for the user");
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Variables not found for the user"
      );
    }

    // Map variables into key-value pairs for easy lookup
    const userVariables = variableDoc.variables.reduce((acc, variable) => {
      acc[variable.variableName] = variable.value;
      return acc;
    }, {});

    // Function to replace variables in a string
    const replaceVariablesInString = (data, variables) => {
      return data.replace(/\${(.*?)}/g, (_, varName) => {
        return variables[varName] || `\${${varName}}`; // Retain unresolved variables as-is
      });
    };

    // Function to replace variables in the report
    const replaceVariablesInObject = (data, variables) => {
      if (typeof data === "string") {
        return replaceVariablesInString(data, variables);
      }
      if (Array.isArray(data)) {
        return data.map((item) => replaceVariablesInObject(item, variables));
      }
      if (data && typeof data === "object") {
        for (const key in data) {
          data[key] = replaceVariablesInObject(data[key], variables);
        }
      }
      return data;
    };

    // Replace variables in the BRSR report
    const updatedBRSRReport = replaceVariablesInObject(
      brsrReport.toObject(),
      userVariables
    );

    // Prepare directory structure
    const publicDir = path.join(__dirname, "../../../public");
    const uploadsDir = path.join(publicDir, "uploads");
    const xmlReportsDir = path.join(uploadsDir, "xmlReports");

    [publicDir, uploadsDir, xmlReportsDir].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Prepare data for XML
    const sanitizedData = { ...updatedBRSRReport };
    delete sanitizedData._id; // Remove the problematic `_id` field
    delete sanitizedData.__v; // Remove any Mongoose version key
    delete sanitizedData.brsrReportId;
    delete sanitizedData.userId;
    delete sanitizedData.year;
    delete sanitizedData.createdAt;
    delete sanitizedData.updatedAt;

    addContextRefToTags(sanitizedData);

    const namespaces = {
      "@": {
        "xmlns:xbrli": "http://www.xbrl.org/2003/instance",
        "xmlns:Non-SI": "http://www.xbrl.org/2009/utr",
        "xmlns:dtr-types": "http://www.xbrl.org/dtr/type/CR/2023-12-20",
        "xmlns:in-capmkt": "https://www.sebi.gov.in/xbrl/2024-04-30/in-capmkt",
        "xmlns:in-capmkt-ent":
          "https://www.sebi.gov.in/xbrl/BRSR/2024-04-30/in-capmkt/in-capmkt-ent",
        "xmlns:in-capmkt-roles":
          "https://www.sebi.gov.in/xbrl/BRSR/2024-04-30/in-capmkt-roles",
        "xmlns:in-capmkt-types":
          "https://www.sebi.gov.in/xbrl/2024-04-30/in-capmkt-types",
        "xmlns:iso4217": "http://www.xbrl.org/2003/iso4217",
        "xmlns:link": "http://www.xbrl.org/2003/linkbase",
        "xmlns:negated": "http://www.xbrl.org/2009/role/negated",
        "xmlns:net": "http://www.xbrl.org/2009/role/net",
        "xmlns:nonnum": "http://www.xbrl.org/dtr/type/non-numeric",
        "xmlns:num": "http://www.xbrl.org/dtr/type/numeric",
        "xmlns:xbrldi": "http://xbrl.org/2006/xbrldi",
        "xmlns:xbrldt": "http://xbrl.org/2005/xbrldt",
        "xmlns:xl": "http://www.xbrl.org/2003/XLink",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      ...sanitizedData,
    };

    const xmlContent = js2xmlparser.parse("BRSRReport", namespaces, {
      declaration: { include: true },
      format: { pretty: true },
    });

    if (!xmlContent) {
      logger.error("Something went wrong when creating XML");
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Something went wrong when creating XML"
      );
    }

    // Save the XML content to a file
    const uniqueFilename = `brsrReport_${Date.now()}_${uuid.v4()}.xml`;
    const filePath = path.join(xmlReportsDir, uniqueFilename);

    fs.writeFileSync(filePath, xmlContent);

    logger.info(`XML file created successfully at ${filePath}`);
    return uniqueFilename;
  } catch (error) {
    logger.error(`Error in createXmlFile: ${error.message}`);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  createXmlFile,
};
