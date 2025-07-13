const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: [5, "Character should be more than 4."],
    },
    email: {
      type: String,
      required: true,
      unique: [true, `Email already exist.`],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password should be atleast 8 characters."],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
