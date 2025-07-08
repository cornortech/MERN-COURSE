const express = require("express");
const router = express.Router();
const fs = require("fs");

// ************** API ROUTE FOR USERS *************************

// /users - to get all the users in db
router.get("/users", (req, res) => {
  const userJsonData = fs.readFileSync("./db/user.json", "utf-8");
  const dbUsers = JSON.parse(userJsonData);
  res.status(200).json({
    success: true,
    data: dbUsers,
  });
});

// /users/:id - to get a single user by id

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userJsonData = fs.readFileSync("./db/user.json", "utf-8");
  const dbUsers = JSON.parse(userJsonData);

  const userExist = dbUsers.find((user) => user.id === userId);

  if (!userExist) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    data: userExist,
  });
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  const userJsonData = fs.readFileSync("./db/user.json", "utf-8");

  const dbUsers = JSON.parse(userJsonData);

  const userExist = dbUsers.find((user) => user.id === userId);

  if (!userExist) {
    return res.status(404).json({
      success: false,
      message: "User not found with this id.",
    });
  }

  const remainingUsers = dbUsers.filter((user) => user.id !== userId);

  fs.writeFileSync("./db/user.json", JSON.stringify(remainingUsers));

  res.status(200).json({
    message: "User deleted successfully",
    success: true,
  });
});

module.exports = router;
