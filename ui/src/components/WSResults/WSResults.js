// Modules
import { useEffect } from "react";
import $ from "jquery";

// Compontents
import WSResultCollapser from "../WSResultCollapser/WSResultCollapser";
import { VscChevronDown } from "react-icons/vsc";

// Styles
import "./WSResultsStyle.css";

function WSResults({ results }) {
  // Funcs
  useEffect(
    () => {
      $(".word-scrapper-results-table-collapse-btn-icon").on("click", (e) => {
        const targetEl = $(e.currentTarget);
        const isActive = targetEl.hasClass(
          "word-scrapper-results-table-collapse-btn-icon-active"
        );
        if (isActive) {
          // Collapse document

          targetEl
            .parent()
            .parent()
            .siblings()
            .addClass("word-scrapper-results-table-collapsed");

          targetEl.removeClass(
            "word-scrapper-results-table-collapse-btn-icon-active"
          );
        } else {
          // Expand document

          targetEl
            .parent()
            .parent()
            .siblings()
            .removeClass("word-scrapper-results-table-collapsed");

          targetEl.addClass(
            "word-scrapper-results-table-collapse-btn-icon-active"
          );
        }
      });
    },
    // eslint-disable-nextline
    []
  );

  // Vars
  let defCount = 0;
  let exampCount = 0;

  if (!results) {
    return (
      <div className="word-scrapper-results-container">
        <div className="word-scrapper-results-notFound">
          <h1>Ooops!</h1>
          <p>It looks like we couldn't find your word on resources we use.</p>
        </div>
      </div>
    );
  } else if (results.length == 0) {
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
          </div>
          <div
            style={{ marginTop: "10px" }}
            className="word-scrapper-results-table"
          >
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Definition(s)</h2>
                <p>
                  Fetched from
                  <a href={results?.defExsFetchedFrom} target="_blank">
                    &nbsp;Cambridge Dictionary
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              {results?.definitions?.map((def) => {
                defCount++;
                return (
                  <p
                    style={{
                      borderBottom: "1px solid #252525",
                      padding: "7px",
                    }}
                  >
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {defCount}
                    </span>
                    &nbsp;- {def || "None"}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="word-scrapper-results-table">
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Turkish Definiton(s)</h2>
                <p>
                  Fetched from
                  <a href={results?.turkishDefsFetchedFrom} target="_blank">
                    &nbsp;Tureng
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              <p>
                {results.turkishDefinitions.length == 0
                  ? "None"
                  : results?.turkishDefinitions?.join(", ")}
              </p>
            </div>
          </div>

          <div className="word-scrapper-results-table">
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Synonym(s)</h2>
                <p>
                  Fetched from
                  <a href={results?.antSynsFetchedFrom} target="_blank">
                    &nbsp;TheSaurus
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              <p>
                {results.synonyms.length == 0
                  ? "None"
                  : results?.synonyms?.join(", ")}
              </p>
            </div>
          </div>

          <div className="word-scrapper-results-table">
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Antonym(s)</h2>
                <p>
                  Fetched from
                  <a href={results?.antSynsFetchedFrom} target="_blank">
                    &nbsp;TheSaurus
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              <p>
                {results.antonyms.length == 0
                  ? "None"
                  : results?.antonyms?.join(", ")}
              </p>
            </div>
          </div>

          <div className="word-scrapper-results-table">
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Word Formation(s)</h2>

                <p>
                  Fetched from
                  <a href="https://www.wordhippo.com/" target="_blank">
                    &nbsp;WordHippo
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              {results?.wordForms?.length > 0
                ? results.wordForms.map((wordForm) => {
                    return (
                      <WSResultCollapser
                        collapserName={wordForm.type}
                        collapserEls={wordForm.words}
                      />
                    );
                  })
                : "None"}
            </div>
          </div>

          <div className="word-scrapper-results-table">
            <div className="word-scrapper-results-table-head">
              <div className="word-scrapper-results-table-head-content">
                <h2>Example Sentence(s)</h2>
                <p>
                  Fetched from
                  <a href={results?.defExsFetchedFrom} target="_blank">
                    &nbsp;Cambridge Dictionary
                  </a>
                  .
                </p>
              </div>
              <div className="word-scrapper-results-table-collapse-btn">
                <VscChevronDown className="word-scrapper-results-table-collapse-btn-icon word-scrapper-results-table-collapse-btn-icon-active" />
              </div>
            </div>
            <div className="word-scrapper-results-table-body">
              {results?.exampleSentences?.map((sentence) => {
                exampCount++;
                return (
                  <p
                    style={{
                      borderBottom: "1px solid #252525",
                      padding: "7px",
                    }}
                  >
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {exampCount}
                    </span>{" "}
                    - {sentence || "None"}
                  </p>
                );
              })}
              {results?.exampleSentences.length == 0 ? <p>None</p> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WSResults;
