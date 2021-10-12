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

  function searchWord(a) {
    setInputState(true);
    setResults([]);
    setTitle("Loading");
    const data = {
      statusCode: 200,
      definitions: [
        "used to show surprise and sometimes pleasure: ",
        "a person or thing that is very successful, attractive, or pleasant: ",
        "to make someone feel great excitement or admiration: ",
        "used to show surprise or pleasure: ",
      ],
      exampleSentences: [
        "Wow! Did you make that cake? It looks delicious!",
        "He's a real wow with the girls in his class.",
        "The movie wowed audiences with its amazing special effects.",
        "Wow! Did you hear that noise?",
      ],
      synonyms: [
        "charm",
        "entertain",
        "cheer",
        "kill",
        "slay",
        "tickle",
        "bowl over",
        "break one up",
        "crack up",
        "go over big",
        "knock dead",
        "knock someone's socks off",
        "make laugh",
        "make roll in the aisles",
        "tickle pink",
        "tickle to death",
      ],
      antonyms: ["bear", "create", "give birth"],
      wordForms: [
        { word: "wow", type: "verb" },
        { word: "wows", type: "verb" },
        { word: "wowed", type: "verb" },
        { word: "wowing", type: "verb" },
        { word: "wowed", type: "adjective" },
        { word: "wowing", type: "adjective" },
        { word: "wow", type: "noun" },
        { word: "wowser", type: "noun" },
        { word: "wowzer", type: "noun" },
        { word: "wowsers", type: "noun" },
        { word: "wowzers", type: "noun" },
      ],
    };
    if (data?.statusCode !== 200)
      throw new Error("Status code is not equal to 200.");
    data.word = a;
    const wordF = [];
    data.wordForms.forEach((wordForm) =>
      wordF.push(`${wordForm.word} (${wordForm.type})`)
    );
    data.wordForms = wordF;
    setInputState(false);
    setResults([data]);
    setTitle(a);
    return;
    fetch(`/api/getWord/${a}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.statusCode !== 200)
          throw new Error("Status code is not equal to 200.");
        data.word = a;
        const wordF = [];
        data.wordForms.forEach((wordForm) =>
          wordF.push(`${wordForm.word} (${wordForm.type})`)
        );
        data.wordForms = wordF;
        setInputState(false);
        setResults([data]);
        setTitle(a);
      })
      .catch((err) => {
        setInputState(false);
        setResults(null);
        setTitle("Not Found");
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
