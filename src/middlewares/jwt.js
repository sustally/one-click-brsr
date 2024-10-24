const { jwtDecode } = require("./authorization");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const { id, userType, companyId, stakeholderKeywordsId } = jwtDecode(
      token.replace("Bearer ", "")
    );
    if (!id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.userType = userType;
    req.companyId = companyId;
    req.stakeholderKeywordsId = stakeholderKeywordsId;
    req.id = id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { verifyToken };
