// inbuilt module created by nodejs to make http server

// ES Modules
// import http from "http"

// CommonJS
// custom module
const dbModule = require("./db");
const http = require("http");
const fileSystem = require("fs"); // file sytem

const users = [
  {
    name: "ashwin",
    age: 11,
  },
  {
    name: "sushant",
    age: 11,
  },
  {
    name: "gajendra",
    age: 11,
  },
  {
    name: "sagar",
    age: 11,
  },
  {
    name: "maikal",
    age: 11,
  },
  {
    name: "rajesh",
    age: 11,
  },
];

const post = [
  {
    id: 1,
    title: "this is the post 1 ",
    description: "this is the descirption of post 1 ",
  },
  {
    id: 2,
    title: "this is the post 2 ",
    description: "this is the descirption of post 2 ",
  },
];

const server = http.createServer((req, res) => {
  const path = req.url; //         /users

  if (path === "/posts") {
    const jsonData = JSON.stringify(post);
    res.write(jsonData);
    res.end();
  } else if (path === "/users") {
    const jsonData = JSON.stringify(users);
    res.write(jsonData);
    res.end();
  } else {
    res.write("No data available . Please visit /posts or /users path");
    res.end();
  }
});

server.listen(8000, () => {
  console.log(`Server started at : http://127.0.0.1:8000`);
});

// server

// 127.0.0.1:8000
// ip_address:port

// client --> server
