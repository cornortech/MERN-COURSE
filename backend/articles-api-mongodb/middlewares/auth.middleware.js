const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");



async function AuthMiddleware(req, res, next) {
  try {
    console.log("debug: inside auth middleware");
    const token = req.headers["authorization"];

    console.log("debug: token in header", token);

    // check if reqest user has send access token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please provide access token.",
      });
    }

    const JWT_SECRET_KEY = "asjflajlfjalfjlaflsjflasfjs";

    // check if access token is valid
    // if token is fresh | token isn't malformed
    const jwtRes = jwt.verify(token, JWT_SECRET_KEY);

    console.log("debug: jwt verify response", jwtRes);

    const userId = jwtRes.userId;

    console.log("user id extracted from jwt respnose", userId);

    req.userId = userId;


    //  check if user with req.userId exist in db;

    const userExist = await userModel.findById(req.userId)

    console.log(userExist)


    // next route handler/middleware
    
    next()




  } catch (error) {
    console.log("debug:authMiddleware error", error);
    return res.status(401).json({
      message: error.message || "Forbidden.",
    });
  }
}
module.exports = AuthMiddleware;
