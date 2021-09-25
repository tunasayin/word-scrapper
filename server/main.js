const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const config = require("./config.json");

app.use("/", express.static(path.join(__dirname, "..", "ui", "build")));

app.get("/api/getWord/:word", (req, res) => {
  if (!req.params?.word)
    return res
      .json({
        statusCode: 400,
        message: "Bad Request \n Abusing this endpoint will result in ip ban!",
      })
      .end();

  fetch(`https://wordsapiv1.p.rapidapi.com/words/${req.params.word.trim()}`, {
    headers: {
      "x-rapidapi-host": config.api.host,
      "x-rapidapi-key": config.api.key,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        res.json({ statusCode: 200, data: data }).end();
      } else {
        res
          .json({
            statusCode: 404,
            message: "Word couldn't found in the dictionary.",
          })
          .end();
      }
    })
    .catch((err) => {
      res.json({ statusCode: 500, message: "Server Error!" });
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "ui", "build", "index.html"));
});

app.listen(config.websitePort, () => {
  console.log(
    "Word scrapper port ",
    config.websitePort + " üzerinde başlatıldı!"
  );
});
