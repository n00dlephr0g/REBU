const https = require("https");
const http = require("http");
const fs = require("fs");
const url = require("url");
const auth = require("./modules/security/authentication")
const token = require("./modules/security/tokens")

const creds = "./host/files/security/credentials.json"


http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.writeContinue("bozo")
  res.end("Hello World!");
}).listen(8080);


