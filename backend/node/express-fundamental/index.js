// console.log("hello world;")
// third party

const express = require("express");
const users = require("./db/user.db");
const validateTokenMiddleware = require("./middleware/validateToken");
const PORT = 8000;

const app = express();

// create random hash
const token = "12345678901";

app.get("/", (req, res) => {
  res.send("<h1>Hello is the home page</h1>");
});

// /users - return all users



app.get("/users", validateTokenMiddleware, (req, res) => {
  const nameStartWithQuery = req.query.namestartswith;
  let result = [];

  // if namestartwith query is there then filter out the users
  if (nameStartWithQuery) {
    result = users.filter((user) => {
      return user.name
        .toLowerCase()
        .startsWith(nameStartWithQuery.toLowerCase());
    });
  } else {
    result = users;
  }

  res.json({
    success: true,
    total: result.length,
    data: result,
  });
});

// /posts - return all posts of all the users

app.get("/posts", validateTokenMiddleware, (req, res) => {
  const posts = [
    {
      title: "title1",
      body: "body1",
    },
    {
      title: "title2",
      body: "body2",
    },
  ];

  res.json({
    success: true,
    total: posts.length,
    data: posts,
  });
});


// return post by id 
// /posts/1 

app.get("/posts/:id", (req, res)=>{
})



app.get("/posts/users/:id", validateTokenMiddleware, (req, res) => {
  const posts = [
    {
      title: "title1",
      body: "body1",
    },
    {
      title: "title2",
      body: "body2",
    },
  ];

  res.json({
    success: true,
    total: posts.length,
    data: posts,
  });
});

// ******** parameters ********
// /users/:id - returns a single user by id
app.get("/users/:id", validateTokenMiddleware, (req, res) => {
  const requestedUserId = req.params.id;

  const userExist = users.find((user) => {
    return user.id == requestedUserId;
  });

  if (userExist) {
    res.status(200).json({
      success: true,
      data: userExist,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `User not found with id ${requestedUserId}`,
    });
  }
});

//  starting server
app.listen(PORT, () => {
  console.log(`hello is running on http://127.0.0.1:${PORT}`);
});
