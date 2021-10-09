const http = require("http");
const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express();
const path = require("path");
const config = require("./config.json");

app.use("/", express.static(path.join(__dirname, "..", "ui", "build")));

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "ui", "build", "index.html"));
});

const credentials = {
  key: fs.readFileSync(path.join(__dirname, "certs", "privkey.pem"), "utf8"),
  cert: fs.readFileSync(path.join(__dirname, "certs", "cert.pem"), "utf8"),
  ca: fs.readFileSync(path.join(__dirname, "certs", "chain.pem"), "utf8"),
};

// Aditional Funcs
function reditectToHTTPS(req, res) {
  res.writeHead(301, { Location: "https://" + req.headers["host"] + req.url });
  res.end();
}

// Ports
let httpPort = config.debug ? config.debugPort : 80;
let httpsPort = 443;

// Servers
const httpServer = http.createServer(config.debug ? app : reditectToHTTPS);
const httpsServer = https.createServer(credentials, app);

try {
  httpServer.listen(httpPort);
  if (!config.debug) httpsServer.listen(httpsPort);
} catch (err) {
  return console.error(
    `Word Scrapper HTTP suncucuları başlatılamadı! \n \n [ERROR NAME]: ${err.name} \n [ERROR MESSAGE]: ${err.message} \n [ERROR STACK]: ${err.stack}`
  );
}

console.log(
  `Word Scrapper HTTP sunucuları başarı ile başlatıldı! \n HTTP Sunucu Port: \x1b[32m${httpPort}\x1b[0m \n HTTPS Sunucu Port: \x1b[32m${
    config.debug ? "-" : httpsPort
  }\x1b[0m`
);
