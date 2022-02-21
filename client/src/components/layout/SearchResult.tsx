import { FC, Fragment, ReactElement, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SearchResultArgs } from "../../constants";
import $ from "jquery";

import "../../styles/search_result.scss";

const SearchResult: FC<SearchResultArgs> = ({
  word,
  definitions,
  trDefinitions,
  antonyms,
  synonyms,
  wordForms,
}: SearchResultArgs): ReactElement => {
  useEffect(
    () => {
      $(".search-result-part-title").on("click", function () {
        if ($(this).siblings().hasClass("search-result-part-collapsed")) {
          $(this).siblings().removeClass("search-result-part-collapsed");
          $(this).find(".search-result-part-toggle svg").css("rotate", "0deg");
        } else {
          $(this).siblings().addClass("search-result-part-collapsed");
          $(this).find(".search-result-part-toggle svg").css("rotate", "90deg");
        }
      });
    },
    //eslint-disable-next-line
    []
  );

  // Count varaibles
  let defCount = 0;

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
            {definitions?.map((definition) => {
              defCount++;
              return (
                <p>
                  <span style={{ fontWeight: "bold" }}>{defCount}</span>
                  &nbsp; - &nbsp;
                  {definition}
                </p>
              );
            })}
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
            {trDefinitions?.join(", ")}
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Antonyms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">{antonyms?.join(", ")}</div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Synonyms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">{synonyms?.join(", ")}</div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Word Forms
            <div className="search-result-part-toggle">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="search-result-part-desc">
            {wordForms?.map((wordForm) => {
              return (
                <Fragment>
                  <div className="search-result-wordform">
                    <h3>{wordForm.type}</h3>
                    <ul>
                      {wordForm.words.map((word) => {
                        return <li>{word}</li>;
                      })}
                    </ul>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
