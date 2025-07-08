const express = require("express");

const app = express();
const userData = require("./db/users");
const postData = require("./db/posts");

app.get("/krishna", (req, res) => {
  res.send(
    `
    <h1>HARE KRISHNA</h1>
    <img width="500" src="https://images.pexels.com/photos/4723206/pexels-photo-4723206.jpeg"/>
    
    `
  );
});

app.get("/users", (req, res) => {
  res.json({
    success: true,
    data: userData,
    total: userData.length,
  });
});

app.get("/posts", (req, res) => {
  res.send(postData);
});


app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
