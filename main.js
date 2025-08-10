const fs = require("fs");

console.log("starting");

// creating file
fs.writeFile("atiya.txt", "i am Atiya Inayat", () => {
  console.log("done");
});

console.log("ending");
