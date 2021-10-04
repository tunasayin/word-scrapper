const { default: axios } = require("axios");
const express = require("express");
const app = express();
const path = require("path");
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

  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.word.trim()}`,
    headers: {
      "x-rapidapi-host": config.api.host,
      "x-rapidapi-key": config.api.key,
    },
  };

  axios
    .request(options)
    .then((serverRes) => {
      if (!serverRes.data.message) {
        res.json({ statusCode: 200, data: serverRes.data }).end();
      } else {
        res
          .status(404) 
          .json({
            statusCode: 404,
            message: "Word couldn't found in the dictionary.",
          })
          .end();
      }
    })
    .catch((err) => {
      res
      .status(404) 
      .json({
        statusCode: 404,
        message: "Word couldn't found in the dictionary.",
      })
      .end();
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
