// Modules
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

// Compontents
import WSSearch from "../../components/WSSearch/WSSearch";
import WSResults from "../../components/WSResults/WSResults";

// Styles
import "./SearchStyle.css";

function Search() {
  const history = useHistory();
  const { word: paramWord } = useParams();
  const [results, setResults] = useState([]);

  if (!paramWord) history.push("/");

  function searchWord(a) {
    fetch(`/api/getWord/${a}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          const results = [];
          data.data.results.forEach((result) => {
            const targetResult = results.find(
              (x) => x.type == result.partOfSpeech
            );
            if (targetResult) {
              targetResult.definitions.push(result.definition);
              if (result.synonyms) targetResult.synonyms.push(result.synonyms);
              if (result.antonyms) targetResult.antonyms.push(result.antonyms);
              if (result.examples)
                targetResult.exampleSentences.push(result.examples);
            } else {
              results.push({
                word: data.data.word,
                type: result.partOfSpeech,
                definitions: [result.definition],
                synonyms: result?.synonyms || [],
                antonyms: result?.antonyms || [],
                exampleSentences: result?.examples || [],
              });
            }
          });
          setResults(results);
        }
      });
  }

  useEffect(() => {
    searchWord(paramWord);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="word-scrapper-searchPage-container">
      <div className="word-scrapper-searchPage-head">
        <h1>Word Scrapper</h1>
        <WSSearch word={paramWord} searchedWord={searchWord} />
      </div>
      <div className="word-scrapper-searchPage-body">
        {results.map((result) => {
          return <WSResults results={result} />;
        })}
      </div>
    </div>
  );
}

export default Search;
