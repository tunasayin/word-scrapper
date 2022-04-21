import { FC, ReactElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getWord from "../../utils/getWord";

import SearchInput from "../layout/SearchInput";
import SearchResult from "../layout/SearchResult";
import Loader from "../layout/Loader";
import WordNotFound from "../layout/WordNotFound";

import "../../styles/search.scss";
import { WordData } from "../../constants";

const Search: FC = (): ReactElement => {
  const { word } = useParams();
  const [result, setResult] = useState<WordData | string | null>(null);

  useEffect(() => {
    setResult(null);
    (async () => {
      const wordData = await getWord(word as string);

      if (wordData) {
        setResult(wordData);
      } else {
        setResult("word_not_found");
      }
    })();
  }, [word]);

  return (
    <div className="search-container">
      <div className="search-head">
        <div className="search-head-brand">
          <Link to="/">Word Scrapper</Link>
          <p>Simple online scrapper to make your life easier</p>
        </div>
        <div className="search-head-input">
          <SearchInput input={word} />
        </div>
      </div>
      <div className="search-body">
        {result ? (
          result === "word_not_found" ? (
            <WordNotFound />
          ) : (
            <SearchResult
              word={word as string}
              definitions={(result as any)?.definitions}
              exampleSentences={(result as any)?.exampleSentences}
              trDefinitions={(result as any)?.trDefinitions}
              antonyms={(result as any)?.antonyms}
              synonyms={(result as any)?.synonyms}
              wordForms={(result as any)?.wordForms}
            />
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Search;
