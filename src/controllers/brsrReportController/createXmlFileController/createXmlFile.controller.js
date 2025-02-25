const httpStatus = require("http-status");
const createXmlFileService = require("../../../services/brsrReportService/createXmlFileService/createXmlFile.service");
const catchAsync = require("../../../utils/catchAsync");
const {
  successResponseGenerator,
  errorResponse,
} = require("../../../utils/ApiHelpers");
const logger = require("../../../config/logger");

const createXmlFile = catchAsync(async (req, res) => {
  try {
    logger.info("create xml file API called");
    const xmlFile = await createXmlFileService.createXmlFile(
      req.id,
      req.params.brsrReportId
    );
    logger.info("xml file created successfully");
    res
      .status(httpStatus.CREATED)
      .send(
        successResponseGenerator(
          httpStatus.CREATED,
          "xml file created successfully",
          xmlFile
        )
      );
  } catch (error) {
    logger.error(`xml file created has error ${error.message}`);
    res
      .status(error.statusCode)
      .send(errorResponse(error.statusCode, error.message));
  }
});

module.exports = {
  createXmlFile,
};
