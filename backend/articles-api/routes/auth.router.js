const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fs = require("fs")

router.post("/register", (req, res) => {
  // console.log(req.body.username)

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(403).json({
      message: "Please fill all the fields.",
    });
  }

  const dbUserJson = fs.readFileSync("./db/user.json", "utf-8");
  const prevDbUsers = JSON.parse(dbUserJson);

  const doesEmailExist = prevDbUsers.find((user) => user.email === email);

  if (doesEmailExist) {
    return res.status(403).json({
      success: false,
      message: "Please use another email . This email is already registered.",
    });
  }
  const newUser = {
    id: uuid(),
    username: username,
    email: email,
    password: password,
  };

  prevDbUsers.push(newUser);

  fs.writeFileSync("./db/user.json", JSON.stringify(prevDbUsers));

  return res.status(201).json({
    message: "registered successfully",
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(403).json({
      success: false,
      message: "Please fill all the fields.",
    });
  }

  const userJson = fs.readFileSync("./db/user.json", "utf-8");

  const dbUsers = JSON.parse(userJson);

  const emailExist = dbUsers.find((user) => user.email === email);

  if (!emailExist) {
    return res.status(404).json({
      success: false,
      message: "Invalid email address",
    });
  }

  console.log(emailExist);

  if (emailExist.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials.",
    });
  }
  res.status(200).json({
    success: true,
    message: "successfully logged in",
  });
});

module.exports = router;
