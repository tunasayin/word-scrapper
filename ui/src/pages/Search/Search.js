// Modules
import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// Compontents
import WSSearch from "../../components/WSSearch/WSSearch";
import WSResults from "../../components/WSResults/WSResults";

// Styles
import "./SearchStyle.css";

function Search() {
  const history = useHistory();
  const { word: paramWord } = useParams();
  const [results, setResults] = useState([]);
  const [title, setTitle] = useState("Loading");

  if (!paramWord) history.push("/");

  function searchWord(a) {
    setResults([]);
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
          setTitle(a);
        }
        else {

          setResults(null)
          setTitle(a);
        }
      }).catch(err => {

        setResults(null);
        setTitle(a);
      });
  }

  useEffect(() => {
    searchWord(paramWord);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="word-scrapper-searchPage-container">
      <Helmet>
        <title>{title} - Word Scrapper</title>
      </Helmet>
      <div className="word-scrapper-searchPage-head">
        <Link to="/">Word Scrapper</Link>
        <WSSearch word={paramWord} clearOnSearch={true} searchedWord={searchWord} />
      </div>
      <div className="word-scrapper-searchPage-body">
        {
          results && results.length > 0 ?  results.map(result => <WSResults results={result} />) : <WSResults results={results} />
        }
      </div>
    </div>
  );
}

export default Search;
