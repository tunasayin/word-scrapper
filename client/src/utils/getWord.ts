import { WordData } from "../constants";

const getWord = async (word: string): Promise<WordData | null> => {
  const serverRes = await fetch(`/api/words/${word.trim()}`)
    .then((res) => res.json())
    .catch((err) => ({ success: false, message: "Client Error" }));

  if (!serverRes?.success) return null;

  return serverRes.data as WordData;
};

export default getWord;
