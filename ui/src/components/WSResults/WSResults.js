// Styles
import "./WSResultsStyle.css";

function WSResults({ results }) {
  if (!results) {
    return (
      <div className="word-scrapper-results-container">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="word-scrapper-results-container">
        <div className="word-scrapper-results-table-container">
          <div className="word-scrapper-results-head">
            <h1>{results?.word || "Word"}</h1>
            <p>({results?.word_type || "None"})</p>
          </div>
          <div
            style={{ marginTop: "10px" }}
            className="word-scrapper-results-table"
          >
            <h2>Definition(s)</h2>
            <p>{results?.definitions?.join("<br>") || "None"}</p>
          </div>

          <div className="word-scrapper-results-table">
            <h2>Antonym(s)</h2>
            <p>{results?.antonyms?.join("<br>") || "None"}</p>
          </div>

          <div className="word-scrapper-results-table">
            <h2>Synonym(s)</h2>
            <p>{results?.synonyms?.join("<br>") || "None"}</p>
          </div>

          <div className="word-scrapper-results-table">
            <h2>Example Sentence(s)</h2>
            <p>{results?.example_sentences?.join("<br>") || "None"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WSResults;
