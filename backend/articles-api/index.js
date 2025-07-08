const express = require("express");
const app = express();
const connectDB = require("./db/db");
const userModel = require("./model/user.model");

app.use(express.json());

connectDB();

app.use("/auth", require("./routes/auth.router"));
app.use("/users", require("./routes/user.router"));
app.use("/articles", require("./routes/article.router"));

app.listen(8000, () => {
  console.log(`server is running on http://127.0.0.1:8000`);
});

// // // zWKpXKuIy1dKONF4
