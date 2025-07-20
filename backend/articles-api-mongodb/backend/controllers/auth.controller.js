const AuthService = require("../services/auth.service");
const EmailService = require("../services/email.service");
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

    if (userExist.isBlocked) {
      return res.status(401).json({
        success: false,
        message: "Your account is blocked . Please reset your password.",
      });
    }

    const isValidPassword = AuthService.verifyPassword(
      req.body.password,
      userExist.password
    );

    if (!isValidPassword) {
      userExist.loginAttemts = (userExist.loginAttemts || 0) + 1;
      if (userExist.loginAttemts >= 3) {
        userExist.isBlocked = true;
        EmailService.sendEmail(
          "Account blocked",
          "Your account is blocked due to multiple login attemts . Please reset your password.",
          userExist.email
        );
      }

      await userExist.save();

      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    if (isValidPassword) {
      userExist.loginAttemts = 0;
      await userExist.save();
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

const sentPasswordResetLink = async (req, res) => {
  try {
    const { email } = req.body;

    const userExist = await UserService.getSingleUser({
      email,
    });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // send reset password email

    const token = jwt.sign(
      {
        email: email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    EmailService.sendEmail(
      "Reset password",
      `
      <div>
       <p>Please click the button to reset your password</p>
       <a href="http://localhost:3000/reset-password/${token}">
       <button>Reset password</button>
       </a>
      </div>
      `,
      email
    );

    return res.status(200).json({
      message: "Password reset link has been sent to you email.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    const decodedTokenRes = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log("decodedTokenRes", decodedTokenRes);

    const userExist = await UserService.getSingleUser({
      email: decodedTokenRes.email,
    });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const hashedPassword = await AuthService.hashPassword(password);

    console.log("previous password ", userExist.password);

    console.log("new hashed password ", hashedPassword);
    userExist.password = hashedPassword;
    if (userExist.isBlocked) {
      userExist.isBlocked = false;
    }
    await userExist.save();
    return res.status(200).json({
      success: true,
      message: "Password reset successfull.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong...",
    });
  }
};
module.exports = {
  login,
  register,
  resetPassword,
  sentPasswordResetLink,
};
