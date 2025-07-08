const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://test:harekrishna@cluster0.ekvmtec.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connection successfull.");
  } catch (error) {
    console.log(`Mongodb connection error ${error.message}`);
  }
}

module.exports = connectDB;
