const dotenv = require("dotenv");
dotenv.config(); // load .env file
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const app = express();
const connectDB = require("./libs/db/mongodb");
const cors = require("cors")
const swaggerSpec = require("./libs/swagger/setup");
app.use(express.json()); // parse json data from request and makes it availabe in req.body object
app.use(
  cors({
    origin: "*", // or your frontend origin
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB(app);

app.use("/auth", require("./routes/auth.router"));
app.use("/articles", require("./routes/articles.router"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));