import getDefinitonAndExamples from "./getDefinitonAndExamples";
import getTurkishDefinitions from "./getTurkishDefinitions";
import getAntonymAndSynonyms from "./getAntonymAndSynonyms";
import getWordForms from "./getWordForms";

const scrapWord = async (word: string): Promise<any> => {
  const [definitions, examples] = await getDefinitonAndExamples(word);

  const trDefinitions = await getTurkishDefinitions(word);

  const antsAndSyns = await getAntonymAndSynonyms(word);

  const wordForms = await getWordForms(word);

  if (
    !definitions?.length &&
    !examples?.length &&
    !trDefinitions?.length &&
    !antsAndSyns.antonyms?.length &&
    !antsAndSyns.synonyms?.length &&
    !wordForms?.length
  )
    return null;

  return {
    definitions: definitions,
    exampleSentences: examples,
    trDefinitions: trDefinitions,
    antonyms: antsAndSyns.antonyms,
    synonyms: antsAndSyns.synonyms,
    wordForms: wordForms,
  };
};

export default scrapWord;
