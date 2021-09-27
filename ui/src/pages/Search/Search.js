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
  const [results, setResults] = useState({});

  if (!paramWord) history.push("/");

  function searchWord(a) {
    // fetch(`/api/getWord/${a}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.statusCode == 200) {
    //       const definitions = [];
    //       const antonyms = [];
    //       const synonyms = [];
    //       const examples = [];
    //       setResults({
    //         word: data.data.word,
    //         definitions: definitions,
    //         antonyms: antonyms,
    //         synonyms: synonyms,
    //         example_sentences: examples,
    //       });
    //     }
    //   });
    // setResults({ wow: true });
    // eslint-disable-next-line
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
        <WSResults results={results} />
      </div>
    </div>
  );
}

export default Search;
