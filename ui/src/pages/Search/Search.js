// Modules
import { useParams, useHistory } from "react-router-dom";

// Compontents
import WSSearch from "../../components/WSSearch/WSSearch";

// Styles
import "./SearchStyle.css";

function Search() {
  const history = useHistory();
  const { word } = useParams();

  if (!word) history.push("/");

  return (
    <div className="word-scrapper-searchPage-container">
      <div className="word-scrapper-searchPage-head">
        <WSSearch word={word} />
      </div>
      <div className="word-scrapper-searchPage-body"></div>
    </div>
  );
}

export default Search;
