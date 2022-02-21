import cheerio from "cheerio";
import fetch from "cross-fetch";
import { WordForm } from "../constants";

const getWordForms = async (word: string): Promise<WordForm[]> => {
  const wordForms: WordForm[] = [];
  const urls: string[] = [
    "https://www.wordhippo.com/what-is/the-verb-for/$word.html",
    "https://www.wordhippo.com/what-is/the-adjective-for/$word.html",
    "https://www.wordhippo.com/what-is/the-adverb-for/$word.html",
    "https://www.wordhippo.com/what-is/the-noun-for/$word.html",
  ];

  for (var i = 0; i < urls.length; i++) {
    const url = urls[i];
    await fetch(url.replace("$word", word))
      .then((res) => res.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const wordType = $(".contentdesc > b:first-child").text();
        $(".defv2wordtype").each((x) => {
          const el = $(".defv2wordtype").get(x);
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

  return wordForms;
};

export default getWordForms;
