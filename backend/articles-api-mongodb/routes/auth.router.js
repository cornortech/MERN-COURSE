const router = require("express").Router();
const userModel = require("../model/user.model");
const UserService = require("../services/user.services");
const jwt = require("jsonwebtoken");

// /auth/register. - public  route
router.post("/register", async (req, res) => {
  // username email password

  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(403).json({
        success: false,
        message: "Please add all the fields.",
      });
    }

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    await UserService.createUser(newUser);

    res.status(201).json({
      success: true,
      message: "User registeration successfull.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
});

// /auth/login - public route

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(403).json({
        success: false,
        message: "Please add all the fields.",
      });
    }

    const userExist = await userModel.findOne({
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

    const isValidPassword = userExist.password === req.body.password;

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    const JWT_SECRET_KEY = "asjflajlfjalfjlaflsjflasfjs";

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
});

module.exports = router;
