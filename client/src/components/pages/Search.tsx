import { FC, ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getWord from "../../utils/getWord";

import SearchInput from "../layout/SearchInput";
import SearchResult from "../layout/SearchResult";

import "../../styles/search.scss";
import { WordData } from "../../constants";

const Search: FC = (): ReactElement => {
  const { word } = useParams();
  const [result, setResult] = useState<WordData | null>(null);

  useEffect(() => {
    setResult(null);
    (async () => {
      const wordData = await getWord(word as string);

      if (wordData) {
        setResult(wordData);
      }
    })();
  }, [word]);

  return (
    <div className="search-container">
      <div className="search-head">
        <div className="search-head-brand">
          <h1>Word Scrapper</h1>
          <p>Simple online scrapper to make your life easier</p>
        </div>
        <div className="search-head-input">
          <SearchInput input={word} />
        </div>
      </div>
      <div className="search-body">
        <SearchResult
          definitions={(result as any)?.definitions}
          trDefinitions={(result as any)?.trDefinitions}
          antonymSynonyms={(result as any)?.antonymSynonyms}
          wordForms={(result as any)?.wordForms}
        />
      </div>
    </div>
  );
};

export default Search;
