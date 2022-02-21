import { FC, ReactElement } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SearchResultArgs } from "../../constants";

import "../../styles/search_result.scss";

const SearchResult: FC<
  SearchResultArgs
> = ({}: SearchResultArgs): ReactElement => {
  return (
    <div className="search-result-container">
      <div className="search-result-title">Word</div>
      <div className="search-result-parts">
        <div className="search-result-part">
          <div className="search-result-part-title">
            Definitions
            <IoIosArrowForward className="search-result-part-toggle" />
          </div>
          <div className="search-result-part-desc">
            Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Turkish Definitions
            <IoIosArrowForward className="search-result-part-toggle" />
          </div>
          <div className="search-result-part-desc">
            Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Antonyms
            <IoIosArrowForward className="search-result-part-toggle" />
          </div>
          <div className="search-result-part-desc">
            Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Synonyms <IoIosArrowForward className="search-result-part-toggle" />
          </div>
          <div className="search-result-part-desc">
            Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div className="search-result-part">
          <div className="search-result-part-title">
            Word Forms
            <IoIosArrowForward className="search-result-part-toggle" />
          </div>
          <div className="search-result-part-desc">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
