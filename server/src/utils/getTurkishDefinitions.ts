import cheerio from "cheerio";
import fetch from "cross-fetch";

const getTurkishDefinitions = async (word: string): Promise<string[]> => {
  const defs: string[] = [];
  const url = `https://tureng.com/en/turkish-english/${word}`;

  await fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(".tr a").each((x) => {
        const el = $(".tr a").get(x);
        const text = $(el).text();
        if (defs.includes(text) || defs.length >= 15) return;
        defs.push(text);
      });
    })
    .catch((Err) => {});

  return defs;
};

export default getTurkishDefinitions;
