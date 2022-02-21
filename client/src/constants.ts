interface AntonymAndSynonymsReturn {
  antonyms: string[];
  synonyms: string[];
}

interface WordForm {
  type: string;
  words: string[];
}

interface SearchResultArgs {
  definitions: string[];
  trDefinitions: string[];
  antonymSynonyms: AntonymAndSynonymsReturn[];
  wordForms: WordForm[];
}

interface WordData {
  definitions: string[];
  trDefinitions: string[];
  antonymAndSynonyms: AntonymAndSynonymsReturn[];
  wordForms: WordForm[];
}

export type { AntonymAndSynonymsReturn, WordForm, SearchResultArgs, WordData };
