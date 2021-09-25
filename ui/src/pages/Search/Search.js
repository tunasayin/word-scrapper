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
  const [results, setResults] = useState(null);

  if (!paramWord) history.push("/");

  useEffect(() => {
    searchWord(paramWord);
    //eslint-disable-next-line
  }, []);

  function searchWord(a) {
    console.log("searched word", a);
    setResults({ wow: true });
    return;
    fetch(`/api/getWord/${a}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          setResults(data.data);
        }
      });

    setResults({ wow: true });
    //eslint-disable-next-line
  }

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
