const fetch = require("cross-fetch");
const cheerio = require("cheerio");
const express = require("express");
const apiRouter = express.Router();
const config = require("../config.json");
let wordCache = [];

module.exports = apiRouter;

apiRouter.get("/bulkGetWord/:words", async (req, res) => {
  const words = [];
  const data = [];

  req.params?.words.split(",").forEach((word) => {
    words.push(word.trim());
  });

  for (var i = 0; i < words.length; i++) {
    const d = await fetch(`${config.baseURL}/api/getWord/${words[i]}`)
      .then((res) => res.json())
      .catch((err) => {});
    if (d.statusCode != 200) return;
    delete d.statusCode;
    data.push(d.data[0]);
  }

  return res.status(200).json({ statusCode: 200, data });
});

apiRouter.get("/getWord/:word", async (req, res) => {
  const cacheWord = wordCache.find((x) => x.word == req.params.word);

  if (cacheWord?.data)
    return res.status(200).json({
      statusCode: 200,
      data: cacheWord.data,
    });

  const defsExs = await fetch(
    `${config.baseURL}/api/getDefs/${req.params.word}`
  ).then((res) => res.json());

  const turkishDefs = await fetch(`
  ${config.baseURL}/api/getTurkishDefs/${req.params.word}`).then((res) =>
    res.json()
  );

  const antsSyns = await fetch(
    `${config.baseURL}/api/getAntsSyns/${req.params.word}`
  ).then((res) => res.json());

  const wForms = await fetch(
    `${config.baseURL}/api/getWordForms/${req.params.word}`
  ).then((res) => res.json());

  if (defsExs.definitions.length == 0)
    res.status(404).json({ statusCode: 404, message: "Word Not Found" });
  else {
    res.status(200).json({
      statusCode: 200,
      data: [
        {
          word: req.params.word,
          ...defsExs,
          ...turkishDefs,
          ...antsSyns,
          ...wForms,
        },
      ],
    });

    const doesContainWord =
      wordCache.filter((x) => x.word == req.params.word).length == 0
        ? false
        : true;

    if (doesContainWord) return;

    wordCache.push({
      word: req.params.word,
      data: [
        {
          word: req.params.word,
          ...defsExs,
          ...turkishDefs,
          ...antsSyns,
          ...wForms,
        },
      ],
    });

    setTimeout(() => {
      wordCache = wordCache.filter((x) => x.word !== req.params.word);
    }, config.cacheResetTime * 60 * 1000);
  }
});

apiRouter.get("/getDefs/:word", async (req, res) => {
  const defs = [];
  const exSentences = [];
  const url = config.sites.definiton.url.replace("$word", req.params.word);

  await fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(config.sites.definiton.query).each((x) => {
        const el = $(config.sites.definiton.query).get(x);
        const text = $(el).text().trim();
        if (defs.includes(text)) return;
        const capitalized = (
          text.charAt(0).toUpperCase() + text.slice(1)
        ).trim();
        defs.push(capitalized);
      });

      $(config.sites.exampleSentences.query).each((x) => {
        const el = $(config.sites.exampleSentences.query).get(x);
        const sentence = $(el).text();
        exSentences.push(sentence);
      });
    })
    .catch((Err) => {});

  return res.status(200).json({
    defExsFetchedFrom: url,
    definitions: defs,
    exampleSentences: exSentences,
  });
});

apiRouter.get("/getTurkishDefs/:word", async (req, res) => {
  const defs = [];
  const url = config.sites.turkishDefinition.url.replace(
    "$word",
    req.params.word
  );

  await fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(config.sites.turkishDefinition.query).each((x) => {
        const el = $(config.sites.turkishDefinition.query).get(x);
        const text = $(el).text();
        if (defs.includes(text) || defs.length >= 15) return;
        defs.push(text);
      });
    })
    .catch((Err) => {});

  return res.status(200).json({
    turkishDefsFetchedFrom: url,
    turkishDefinitions: defs,
  });
});

apiRouter.get("/getAntsSyns/:word", async (req, res) => {
  const synonyms = [];
  const antonyms = [];
  const url = config.sites.synonym.url.replace("$word", req.params.word);

  await fetch(url)
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
    antSynsFetchedFrom: url,
    synonyms: synonyms,
    antonyms: antonyms,
  });
});

apiRouter.get("/getWordForms/:word", async (req, res) => {
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
          if (wordForms.filter((x) => x.type === wordType).length !== 0) {
            wordForms.find((x) => x.type === wordType)?.words.push(word);
          } else {
            wordForms.push({
              type: wordType,
              words: [word],
            });
          }
        });
      });
  }

  return res.status(200).json({
    wordForms: wordForms,
  });
});

apiRouter.get("/", (req, res) => {
  const registeredRoutes = [];
  apiRouter.stack.forEach((layer) => {
    if (
      layer?.route &&
      layer?.route?.path !== "/*" &&
      layer?.route?.path !== "/"
    )
      registeredRoutes.push(layer.route.path);
  });
  return res.status(200).json({
    statusCode: 200,
    notice: "Bad Request \n Abusing this endpoint will result in ip ban!",
    endpoints: registeredRoutes,
  });
});

apiRouter.get("/*", (req, res) => {
  return res.status(400).json({
    statusCode: 400,
    message: "Bad Request",
  });
});
