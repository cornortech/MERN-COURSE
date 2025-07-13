const AuthService = require("../services/auth.service");
const UserService = require("../services/user.services");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(403).json({
        success: false,
        message: "Please add all the fields.",
      });
    }

    const hashedPassword = AuthService.hashPassword(req.body.password);

    const newUser = {
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    };

    await UserService.createUser(newUser);

    return res.status(201).json({
      success: true,
      message: "User registeration successfull.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong...",
    });
  }
};

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(403).json({
        success: false,
        message: "Please add all the fields.",
      });
    }

    // const userExist = await userModel.findOne({
    //   email: req.body.email,
    // });

    const userExist = await UserService.getSingleUser({
      email: req.body.email,
    });

    // first check  email

    if (!userExist) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    // second check password

    // const isValidPassword = userExist.password === req.body.password;

    const isValidPassword = AuthService.verifyPassword(
      req.body.password,
      userExist.password
    );

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    const jwtToken = jwt.sign(
      {
        userId: userExist._id,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successfull",
      token: jwtToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
};

module.exports = {
  login,
  register,
};
