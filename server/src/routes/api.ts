import express from "express";

// Functions
import scrapWord from "../utils/scrapWord";
import getDefinitonAndExamples from "../utils/getDefinitonAndExamples";
import getTurkishDefinitions from "../utils/getTurkishDefinitions";
import getWordForms from "../utils/getWordForms";

const router = express.Router();

router.get("/words/:word", async (req, res) => {
  try {
    const wordData = await scrapWord(req.params.word);

    if (!wordData)
      return res
        .status(400)
        .json({ success: false, message: "Not Found" })
        .end();

    res.status(200).json({ success: true, data: wordData }).end();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" }).end();
  }
});

router.get("/definitions/:word", async (req, res) => {
  try {
    const [wordDefinitions] = await getDefinitonAndExamples(req.params.word);

    if (!wordDefinitions)
      return res
        .status(400)
        .json({ success: false, message: "Not Found" })
        .end();

    res.status(200).json({ success: true, data: wordDefinitions }).end();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" }).end();
  }
});

router.get("/examples/:word", async (req, res) => {
  try {
    //eslint-disable-next-line
    const [_, examples] = await getDefinitonAndExamples(req.params.word);

    if (!examples)
      return res
        .status(400)
        .json({ success: false, message: "Not Found" })
        .end();

    res.status(200).json({ success: true, data: examples }).end();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" }).end();
  }
});

router.get("/tr-definitions/:word", async (req, res) => {
  try {
    const wordTrDefinitions = await getTurkishDefinitions(req.params.word);

    if (!wordTrDefinitions)
      return res
        .status(400)
        .json({ success: false, message: "Not Found" })
        .end();

    res.status(200).json({ success: true, data: wordTrDefinitions }).end();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" }).end();
  }
});

router.get("/word-forms/:word", async (req, res) => {
  try {
    const wordForms = await getWordForms(req.params.word);

    if (!wordForms)
      return res
        .status(400)
        .json({ success: false, message: "Not Found" })
        .end();

    res.status(200).json({ success: true, data: wordForms }).end();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" }).end();
  }
});

router.get("/*", (req, res) => {
  res.status(400).json({ success: false, message: "Bad Request" }).end();
});

export default router;
