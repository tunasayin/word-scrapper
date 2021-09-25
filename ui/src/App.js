// Modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context(s)
import appContext from "./contexts/appContext.js";

// Styles
import "./App.css";

// Pages
import MainPage from "./pages/Main/Main";
import SearchPage from "./pages/Search/Search.js";
import NotFoundPage from "./pages/NotFound/NotFound.js";

function App() {
  return (
    <div
      style={{ backgroundImage: "url('/background.svg')" }}
      className="word-scrapper-wrapper"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <appContext.Provider value={{}}>
              <MainPage />
            </appContext.Provider>
          </Route>
          <Route exact path="/search/:word?">
            <appContext.Provider value={{}}>
              <SearchPage />
            </appContext.Provider>
          </Route>
          <Route exact>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
      <div className="word-scrapper-background"></div>
    </div>
  );
}

export default App;
