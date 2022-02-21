import cheerio from "cheerio";
import fetch from "cross-fetch";
import { AntonymAndSynonymsReturn } from "../constants";

const getAntonymAndSynonyms = async (
  word: string
): Promise<AntonymAndSynonymsReturn> => {
  const synonyms: string[] = [];
  const antonyms: string[] = [];
  const url = `https://www.thesaurus.com/browse/${word}`;

  await fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $("#meanings .e1ccqdb60:nth-child(2) li a").each((x) => {
        const el = $("#meanings .e1ccqdb60:nth-child(2) li a").get(x);
        const word = $(el).text().trim();
        synonyms.push(word);
      });

      $("#antonyms .e1ccqdb60:nth-child(2) li a").each((x) => {
        const el = $("#antonyms .e1ccqdb60:nth-child(2) li a").get(x);
        const word = $(el).text().trim();
        antonyms.push(word);
      });
    });

  return { antonyms: antonyms, synonyms: synonyms } as any;
};

export default getAntonymAndSynonyms;
