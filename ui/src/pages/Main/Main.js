// Modules
import { Fragment } from "react";
import { Helmet } from "react-helmet";

// Compontents
import WSSearchStyle from "../../components/WSSearch/WSSearch";

// Styles
import "./MainStyle.css";

function MainPage() {
  return (
    <Fragment>
      <Helmet>
        <title>Word Scrapper</title>
      </Helmet>
      <div className="word-scrapper-mainPage-container">
        <div className="word-scrapper-mainPage-head">
          <h1>Word Scrapper</h1>
          <p>Basic word information collector that makes your life easier.</p>
        </div>
        <div className="word-scrapper-mainPage-body">
          <WSSearchStyle />
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;