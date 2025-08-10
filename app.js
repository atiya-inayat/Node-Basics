// fs : work with files
// path : handle file paths
// http : create a web server

//commonJS:  require is used for importing module , then we can use its methids
// ES6 module : import is used like --> import http from 'http'; plus do "type": module in package.json

// import fs from "fs";
// import http from "http";
// const name = "Atiya Inayat";

// try {
//   fs.writeFileSync("myFile.txt", "Hello there!!!!!!");

//   const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });

//     if (req.url === "/") {
//       res.end("Welcome to my ES6 Node Server");
//     } else if (req.url === "/about") {
//       res.end(`About me: my name is ${name}`);
//     } else {
//       res.statusCode = 404;
//       res.end("404 Page Not Found");
//     }
//   });

//   server.listen(4000, () => {
//     console.log("Server is running on port 4000");
//   });
// } catch (error) {
//   console.log("Error Occured", error);
// }

// *******************************************

import fs from "fs";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create file
fs.writeFile("newFile.txt", "new file data here", (err) => {
  if (err) console.error(err);
  else console.log("File created successfully");
});

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // path.join() is commonly used to build file paths. dirname is a helper that returns the directory name of a file path.
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    const secondFilePath = path.join(__dirname, "about.html");
    fs.readFile(secondFilePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
