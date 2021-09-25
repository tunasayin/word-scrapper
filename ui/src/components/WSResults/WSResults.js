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
    return <div className="word-scrapper-results-container"></div>;
  }
}

export default WSResults;
