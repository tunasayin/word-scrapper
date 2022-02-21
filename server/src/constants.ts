interface AntonymAndSynonymsReturn {
  antonyms: string[];
  synonyms: string[];
}

interface WordForm {
  type: string;
  words: string[];
}

export type { AntonymAndSynonymsReturn, WordForm };
