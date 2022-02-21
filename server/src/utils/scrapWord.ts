import getDefinitions from "./getDefinitions";
import getTurkishDefinitions from "./getTurkishDefinitions";
import getAntonymAndSynonyms from "./getAntonymAndSynonyms";
import getWordForms from "./getWordForms";

const scrapWord = async (word: string): Promise<any> => {
  const definitions = await getDefinitions(word);

  const trDefinitions = await getTurkishDefinitions(word);

  const antsAndSyns = await getAntonymAndSynonyms(word);

  const wordForms = await getWordForms(word);

  return {
    definitions: definitions,
    trDefinitions: trDefinitions,
    antonyms: antsAndSyns.antonyms,
    synonyms: antsAndSyns.synonyms,
    wordForms: wordForms,
  };
};

export default scrapWord;
