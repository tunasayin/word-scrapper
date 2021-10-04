// Modules
import { Link } from "react-router-dom";

// Styles
import "./NotFoundStyle.css";

function NotFound() {
  return (
    <div className="word-scrapper-notFoundPage-container">
      <div className="word-scrapper-notFoundPage-wrapper">
        <h1>404</h1>
        <p>
          We couldn't find the page your are looking for. Want to search some
          words?
        </p>
        <Link to="/">Head to Main Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
