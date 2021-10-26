// Modules
import $ from "jquery";
import { VscChevronRight } from "react-icons/vsc";

// Styling
import "./WSResultCollapserStyle.css";

function WSResultCollapser({ collapserName, collapserEls }) {
  function collapse(e) {
    if (
      $(e.currentTarget)
        .siblings()
        .hasClass("word-scrapper-results-collapser-active")
    ) {
      $(e.currentTarget)
        .siblings()
        .removeClass("word-scrapper-results-collapser-active");

      $(e.currentTarget)
        .children(".word-scrapper-results-collapser-toggle")
        .css("transform", "rotate(0deg)");
    } else {
      $(e.currentTarget)
        .siblings()
        .addClass("word-scrapper-results-collapser-active");

      $(e.currentTarget)
        .children(".word-scrapper-results-collapser-toggle")
        .css("transform", "rotate(90deg)");
    }
  }

  return (
    <div className="word-scrapper-results-collapser-container">
      <div className="word-scrapper-results-collapser-head" onClick={collapse}>
        <h2>{collapserName}</h2>
        <VscChevronRight className="word-scrapper-results-collapser-toggle" />
      </div>
      <div className="word-scrapper-results-collapser-body">
        {collapserEls.map((el) => {
          return <p>{el}</p>;
        })}
      </div>
    </div>
  );
}

export default WSResultCollapser;
