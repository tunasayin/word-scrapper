// Modules
import { useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

// Styles
import "./WSSearchStyle.css";

function WSSearch({ word, searchedWord, mainPage }) {
  const history = useHistory();

  function searchWord() {
    const searchBarContent = document
      .getElementById("word-scrapper-search-input")
      .value.trim();
    if (!searchBarContent) return;
    history.push("/search/" + searchBarContent);
    if (!mainPage) searchedWord(searchBarContent);
  }

  return (
    <div className="word-scrapper-input-container">
      <input
        id="word-scrapper-search-input"
        type="text"
        placeholder={word ? word : "Search a word"}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchWord();
        }}
      />
      <BiSearchAlt className="word-scrapper-search-icon" onClick={searchWord} />
    </div>
  );
}

export default WSSearch;
