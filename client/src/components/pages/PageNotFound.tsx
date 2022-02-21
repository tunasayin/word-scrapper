import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import "../../styles/pgnotfound.scss";

const PageNotFound: FC = (): ReactElement => {
  return (
    <div className="pgnotfound-container">
      <div className="pgnotfound-wrapper">
        <h1>404</h1>
        <p>
          Page not found! <Link to="/">Return to the main page.</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
