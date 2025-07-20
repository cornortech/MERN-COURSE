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
    loginAttemts: {
      type: Number,
      default: 0,
    },
    lastLoginAttemt: {
      type: Date,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
