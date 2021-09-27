// Modules
import { Fragment } from "react";

// Compontents
import WSSearch from "../../components/WSSearch/WSSearch";

// Styles
import "./MainStyle.css";

function MainPage() {
  return (
    <Fragment>
      <div className="word-scrapper-mainPage-container">
        <div className="word-scrapper-mainPage-head">
          <h1>Word Scrapper</h1>
          <p>Basic word information collector that makes your life easier.</p>
        </div>
        <div className="word-scrapper-mainPage-body">
          <WSSearch mainPage={true} />
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
