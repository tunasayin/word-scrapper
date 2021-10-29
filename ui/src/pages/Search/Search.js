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
  let compCount = 0;
  const history = useHistory();
  const { word: paramWord } = useParams();
  const [results, setResults] = useState([]);
  const [inputState, setInputState] = useState(false);
  const [title, setTitle] = useState("Loading");

  if (!paramWord) history.push("/");

  async function searchWord(a) {
    const words = a.trim().split(/ +/);
    let url = `/api/bulkGetWord/${words.join(",")}`;

    // Reset states
    setInputState(true);
    setResults([]);
    setTitle("Loading");

    const data = await fetch(url)
      .then((res) => res.json())
      .catch((err) => {});

    if (!data?.data || data?.statusCode !== 200) {
      setInputState(false);
      setResults(null);
      setTitle("Not Found");
      return;
    }

    setInputState(false);
    setResults(data.data);
    setTitle(a);
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
        <WSSearch
          word={paramWord}
          clearOnSearch={true}
          searchedWord={searchWord}
          inputDisabled={inputState}
        />
      </div>
      <div className="word-scrapper-searchPage-body">
        {results && results.length > 0 ? (
          results.map((result) => <WSResults results={result} />)
        ) : (
          <WSResults key={compCount++} results={results} />
        )}
      </div>
    </div>
  );
}

export default Search;
