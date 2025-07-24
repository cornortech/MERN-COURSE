const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [10, "title should be of at least 10 character"],
      required: [true, "Title field is required."],
    },
    description: {
      type: String,
      minLength: [20, "description should of at least 20 character"],
      required: [true, "Description field is required."],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User field is required."],
    },
    tags: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;
