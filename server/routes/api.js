const fetch = require("cross-fetch");
const cheerio = require("cheerio");
const express = require("express");
const apiRouter = express.Router();
const config = require("../config.json");

module.exports = apiRouter;

apiRouter.get("/getWord/:word?", async (req, res) => {
  if (!req.params.word)
    return res.status(400).json({
      message: "Bad Request \n Abusing this endpoint will result in ip ban!",
    });

  const defsExs = await fetch(
    `${config.baseURL}/api/getDefs/${req.params.word}`
  ).then((res) => res.json());
  const antsSyns = await fetch(
    `${config.baseURL}/api/getAntsSyns/${req.params.word}`
  ).then((res) => res.json());

  const wForms = await fetch(
    `${config.baseURL}/api/getWordForms/${req.params.word}`
  ).then((res) => res.json());

  if (defsExs.definitions.length == 0)
    res.status(404).json({ statusCode: 404, message: "Not Found" });
  else
    res
      .status(200)
      .json({ statusCode: 200, ...defsExs, ...antsSyns, ...wForms });
});

apiRouter.get("/getDefs/:word?", async (req, res) => {
  if (!req.params.word)
    return res.status(400).json({
      message: "Bad Request \n Abusing this endpoint will result in ip ban!",
    });

  const defs = [];
  const exSentences = [];

  await fetch(config.sites.definiton.url.replace("$word", req.params.word))
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(config.sites.definiton.query).each((x) => {
        const el = $(config.sites.definiton.query).get(x);
        const text = $(el).text();
        defs.push(text);
      });

      $(config.sites.exampleSentences.query).each((x) => {
        const el = $(config.sites.exampleSentences.query).get(x);
        const sentence = $(el).text();
        exSentences.push(sentence);
      });
    })
    .catch((Err) => {});

  return res.status(200).json({
    definitions: defs,
    exampleSentences: exSentences,
  });
});

apiRouter.get("/getAntsSyns/:word?", async (req, res) => {
  if (!req.params.word)
    return res.status(400).json({
      message: "Bad Request \n Abusing this endpoint will result in ip ban!",
    });

  const synonyms = [];
  const antonyms = [];

  await fetch(config.sites.synonym.url.replace("$word", req.params.word))
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(config.sites.synonym.query).each((x) => {
        const el = $(config.sites.synonym.query).get(x);
        const word = $(el).text().trim();
        synonyms.push(word);
      });

      $(config.sites.antonym.query).each((x) => {
        const el = $(config.sites.antonym.query).get(x);
        const word = $(el).text().trim();
        antonyms.push(word);
      });
    });

  return res.status(200).json({
    synonyms: synonyms,
    antonyms: antonyms,
  });
});

apiRouter.get("/getWordForms/:word?", async (req, res) => {
  if (!req.params.word)
    return res.status(400).json({
      message: "Bad Request \n Abusing this endpoint will result in ip ban!",
    });

  const wordForms = [];

  for (var i = 0; i < config.sites.wordForms.urls.length; i++) {
    const url = config.sites.wordForms.urls[i];
    await fetch(url.replace("$word", req.params.word))
      .then((res) => res.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const wordType = $(".contentdesc > b:first-child").text();
        $(config.sites.wordForms.query).each((x) => {
          const el = $(config.sites.wordForms.query).get(x);
          const word = $(el).text();
          wordForms.push({
            word: word,
            type: wordType,
          });
        });
      });
  }

  return res.status(200).json({
    wordForms: wordForms,
  });
});

apiRouter.get("/*", (req, res) => {
  res.status(400).json({ message: "Bad Request" }).end();
});
