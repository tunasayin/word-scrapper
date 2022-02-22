interface AntonymAndSynonymsReturn {
  antonyms: string[];
  synonyms: string[];
}

interface WordForm {
  type: string;
  words: string[];
}

interface SearchResultArgs {
  word: string;
  definitions: string[];
  exampleSentences: string[];
  trDefinitions: string[];
  antonyms: string[];
  synonyms: string[];
  wordForms: WordForm[];
}

interface WordData {
  definitions: string[];
  trDefinitions: string[];
  antonyms: string[];
  synonyms: string[];
  wordForms: WordForm[];
}

export type { AntonymAndSynonymsReturn, WordForm, SearchResultArgs, WordData };
