import cheerio from "cheerio";
import fetch from "cross-fetch";

const getDefinitions = async (word: string): Promise<string[]> => {
  const defs: string[] = [];
  const exSentences: string[] = [];
  const url: string = `https://dictionary.cambridge.org/dictionary/english/${word}`;

  await fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(".def").each((x) => {
        const el = $(".def").get(x);
        const text = $(el).text().trim();
        if (defs.includes(text)) return;
        const capitalized = (
          text.charAt(0).toUpperCase() + text.slice(1)
        ).trim();
        defs.push(capitalized);
      });

      $(".deg").each((x) => {
        const el = $(".deg").get(x);
        const sentence = $(el).text();
        exSentences.push(sentence);
      });
    })
    .catch((Err) => {});

  return defs;
};

export default getDefinitions;
