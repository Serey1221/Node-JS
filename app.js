// var logger = require("./logger");

// console.log(logger)
//======================Create File==================================
//fs.appendFile()
// var fs = require("fs");

// //create a file named mynewfile1.txt:
// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
//========================================================
//fs.open()
// var fs = require("fs");

// //create an empty file named mynewfile2.txt:
// fs.open("mynewfile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });
//========================================================
//fs.writeFile()
// var fs = require("fs");

// //create a file named mynewfile3.txt:
// fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
//=======================Update File=================================
//fs.appendFile()
// var fs = require("fs");

// //append content at the end of the file:
// fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
//   if (err) throw err;
//   console.log("Updated!");
// });
//========================================================
//fs.writeFile()
// var fs = require("fs");

// //Replace the file with a new one:
// fs.writeFile(
//   "mynewfile3.txt",
//   "This is my text You go out the my text !.",
//   function (err) {
//     if (err) throw err;
//     console.log("Replaced!");
//   }
// );
//=====================Delete Files===================================
//fs.unlink()
// var fs = require("fs");

// //Delete the file mynewfile2.txt:
// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });
//=====================Rename Files===================================
//fs.rename()

// var fs = require("fs");

// //Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });
//===================Globals===================================================
// console.log(__filename);
// setInterval(() => {
//   console.log("Hello Serey");
// }, 10);
//=====================First Module=================================================

const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello Where are you from?");
    res.end();
  })
  .listen(4000);
