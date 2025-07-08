// INBUILT MODULES
// Node.js provides several built-in modules that are compiled into the binary.

/**
 * Fs module - in built module
 * fs - File system operations
 */

const fileSystem = require("fs"); // inbuild module. created by nodes
const nodemon = require("nodemon") // third party module - created by other devs
const db = require("./db") // module - created by us

// READ a file

// const helloFileContent = fileSystem.readFileSync("./hello.txt", "utf-8");

// console.log(helloFileContent);

// WRITE in a file
// fileSystem.writeFileSync("./hello.txt", "I am a new content");

// APPEND in a file

// fileSystem.appendFileSync("./new.txt", "this is the added text");

// const newFileContent = fileSystem.readFileSync("./new.txt", "utf-8");

// console.log(newFileContent);

// DELETE a file

// fileSystem.unlinkSync("./new.txt");

// synchronous code  - line by line (blocking code )

// console.log("started to read file");

// async  -- will take time - it will be executed in bg  (non-blocking code)

// const fileContent = fileSystem.readFileSync("./package.json","utf-8"); // 10s

// console.log("  file reading completed ...",fileContent)

// console.log("hello how are you ashwin"); // important

// console.log("started reading file");

// // async  -- will take time - it will be executed in bg  (non-blocking code)
// fileSystem.readFile("./package.json", (err, data) => {
//   console.log("file reading completed");
//   console.log(data.toString());
// });

// console.log("hello how are you ashwin"); // important

const os = require("os")

// console.log(os.type())
// console.log(os.release())
// console.log(os.cpus().length)
// console.log(os.arch())
// console.log(os.hostname())

// Get filename from a path

const path = require("path"); 

// const filename = path.basename('/users/docs/file.txt');

// console.log(filename);

// // Get the file name of the current module
// console.log(__filename);

// // Get the directory name of the current module
// console.log(__dirname);

// /users/downloads/softwares/inbuilt/.env

// console.log(path.join(__dirname, ".env"));
// console.log(path.extname("hello.txt"))

