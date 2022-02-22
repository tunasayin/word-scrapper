import express from "express";

// Functions
import scrapWord from "../utils/scrapWord";
import getDefinitonAndExamples from "../utils/getDefinitonAndExamples";
import getTurkishDefinitions from "../utils/getTurkishDefinitions";
import getWordForms from "../utils/getWordForms";

const router = express.Router();

router.get("/words/:word", async (req, res) => {
  const wordData = await scrapWord(req.params.word);

  if (wordData) {
    res.status(200).json({ success: true, data: wordData }).end();
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Server Error" })
      .end();
  }
});

router.get("/definitions/:word", async (req, res) => {
  const [wordDefinitions] = await getDefinitonAndExamples(req.params.word);

  if (wordDefinitions) {
    res.status(200).json({ success: true, data: wordDefinitions }).end();
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Server Error" })
      .end();
  }
});

router.get("/examples/:word", async (req, res) => {
  const [_, examples] = await getDefinitonAndExamples(req.params.word);

  if (examples) {
    res.status(200).json({ success: true, data: examples }).end();
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Server Error" })
      .end();
  }
});

router.get("/tr-definitions/:word", async (req, res) => {
  const wordTrDefinitions = await getTurkishDefinitions(req.params.word);

  if (wordTrDefinitions) {
    res.status(200).json({ success: true, data: wordTrDefinitions }).end();
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Server Error" })
      .end();
  }
});

router.get("/word-forms/:word", async (req, res) => {
  const wordForms = await getWordForms(req.params.word);

  if (wordForms) {
    res.status(200).json({ success: true, data: wordForms }).end();
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Server Error" })
      .end();
  }
});

router.get("/*", (req, res) => {
  res.status(400).json({ success: false, message: "Bad Request" }).end();
});

export default router;
