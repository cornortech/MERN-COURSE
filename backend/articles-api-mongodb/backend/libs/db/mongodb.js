const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;

async function connectDB(app) {
  try {
    // console.log("debug: MONGO_URL", MONGO_URL);

    if (!MONGO_URL) {
      throw new Error("MONGODB_URL is not defined");
    }
    await mongoose.connect(MONGO_URL);
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`server is running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
