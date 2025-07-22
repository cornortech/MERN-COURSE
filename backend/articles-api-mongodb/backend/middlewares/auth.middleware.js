const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

async function AuthMiddleware(req, res, next) {
  try {

    let token = req.headers["authorization"]; // Bearer token

    // check if reqest user has send access token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please provide access token.",
      });
    }

    token = token.split(" ")[1];
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    // check if access token is valid
    // if token is fresh | token isn't malformed
    const jwtRes = jwt.verify(token, JWT_SECRET_KEY);

    const userId = jwtRes.userId;

    req.userId = userId;

    //  check if user with req.userId exist in db;

    const userExist = await userModel.findById(req.userId);

    console.log(userExist);

    // next route handler/middleware

    next();
  } catch (error) {
    console.log("debug:authMiddleware error", error);
    return res.status(401).json({
      message: error.message || "Forbidden.",
    });
  }
}
module.exports = AuthMiddleware;
