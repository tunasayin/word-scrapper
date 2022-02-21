import getDefinitions from "./getDefinitions";
import getTurkishDefinitions from "./getTurkishDefinitions";
import getAntonymAndSynonyms from "./getAntonymAndSynonyms";
import getWordForms from "./getWordForms";

const scrapWord = async (word: string): Promise<any> => {
  const definitons = await getDefinitions(word);

  const trDefinitions = await getTurkishDefinitions(word);

  const antsAndSyns = await getAntonymAndSynonyms(word);

  const wordForms = await getWordForms(word);

  return {
    definitons: definitons,
    trDefinitions: trDefinitions,
    antonymAndSynonyms: antsAndSyns,
    wordForms: wordForms,
  };
};

export default scrapWord;
