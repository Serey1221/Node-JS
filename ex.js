const http = require("http");
const fs = require("fs");//fs = file System
const port = 3002;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
  //   res.write("Hello Node serey");
});
server.listen(port, function (error) {
  if (error) {
    console.log("Somthing went wrong", error);
  } else {
    console.log("Server is listening on  port" + port);
  }
});
