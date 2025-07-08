const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://test:harekrishna@cluster0.ekvmtec.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB(app) {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected...")
    app.listen(8000, () => {
      console.log(`server is running on http://127.0.0.1:8000`);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
