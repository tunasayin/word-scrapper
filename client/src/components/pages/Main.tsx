import { FC, ReactElement } from "react";
import SearchInput from "../layout/SearchInput";

import "../../styles/main.scss";

const Main: FC = (): ReactElement => {
  return (
    <div className="main-container">
      <div className="main-head">
        <h1>Word Scrapper</h1>
        <p>Simple online scrapper to make your life easier</p>
      </div>
      <div className="main-body">
        <SearchInput />
      </div>
    </div>
  );
};

export default Main;
