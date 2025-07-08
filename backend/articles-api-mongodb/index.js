const express = require("express");
const app = express();
const connectDB = require("./libs/db/mongodb");

app.use(express.json()); // parse json data from request and makes it availabe in req.body object

connectDB(app);

app.use("/auth", require("./routes/auth.router"));
app.use("/articles", require("./routes/articles.router"));