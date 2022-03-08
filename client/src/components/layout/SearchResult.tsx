import { FC, ReactElement, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SearchResultArgs, WordForm } from "../../constants";
import $ from "jquery";

import "../../styles/search_result.scss";

const WordFormation: FC<WordForm> = ({
  type,
  words,
}: WordForm): ReactElement => {
  useEffect(() => {
    $(".search-result-wordform h3")
      .off("click")
      .on("click", function () {
        if ($(this).siblings().hasClass("search-result-collapsed")) {
          $(this).siblings().removeClass("search-result-collapsed");
        } else {
          $(this).siblings().addClass("search-result-collapsed");
        }
      });
  });

  return (
    <div className="search-result-wordform">
      <h3>{type}</h3>
      <ul className="">
        {words.map((word) => {
          return <li>{word}</li>;
        })}
      </ul>
    </div>
  );
};

const SearchResult: FC<SearchResultArgs> = ({
  word,
  definitions,
  exampleSentences,
  trDefinitions,
  antonyms,
  synonyms,
  wordForms,
}: SearchResultArgs): ReactElement => {
  useEffect(
    () => {
      $(".search-result-part-toggle").on("click", function () {
        if ($(this).parent().siblings().hasClass("search-result-collapsed")) {
          $(this).parent().siblings().removeClass("search-result-collapsed");
          $(this)
            .parent()
            .find(".search-result-part-toggle svg")
            .css("rotate", "0deg");
        } else {
          $(this).parent().siblings().addClass("search-result-collapsed");
          $(this)
            .parent()
            .find(".search-result-part-toggle svg")
            .css("rotate", "90deg");
        }
      });
    },
    //eslint-disable-next-line
    []
  );

  // Count varaibles
  let defCount = 0;
  let exSentenceCount = 0;

  return (
    <div className="search-result-container">
      <div className="search-result-title">{word}</div>
      <div className="search-result-parts">
        <div className="search-result-part">
          <div className="search-result-part-title">
            Definitions
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {definitions.length > 0
              ? definitions?.map((definition) => {
                  defCount++;
                  return (
                    <p>
                      <span style={{ fontWeight: "bold" }}>{defCount}</span>
                      &nbsp; - &nbsp;
                      {definition}
                    </p>
                  );
                })
              : "None"}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Turkish Definitions
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {trDefinitions.length > 0 ? trDefinitions?.join(", ") : "None"}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Antonyms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {antonyms.length > 0 ? antonyms?.join(", ") : "None"}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Synonyms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {synonyms.length > 0 ? synonyms?.join(", ") : "None"}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Word Forms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {wordForms.length > 0
              ? wordForms?.map((wordForm) => {
                  return (
                    <WordFormation
                      type={wordForm.type}
                      words={wordForm.words}
                    />
                  );
                })
              : "None"}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Example Sentences
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {exampleSentences.length > 0
              ? exampleSentences?.map((exSentence) => {
                  exSentenceCount++;
                  return (
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        {exSentenceCount}
                      </span>
                      &nbsp; - &nbsp;
                      {exSentence}
                    </p>
                  );
                })
              : "None"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
