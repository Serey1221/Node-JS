const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  fs.readFile("demofile1.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
  //   if (urlPath === "/overview") {
  //     res.end('Welcome to the "overview page" of the nginX project');
  //   } else if (urlPath === "/api") {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(
  //       JSON.stringify({
  //         product_id: "xyz12u3",
  //         product_name: "NginX injector",
  //       })
  //     );
  //   } else {
  //     res.end("Successfully started a server");
  //   }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for request");
});
