// Modules
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// Styles
import './App.css';

// Cımpontents
import WSInput from './components/WSInput/WSInput';
import WSResults from './components/WSResults/WSResults';

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Word Scrapper</title>
      </Helmet>
      <div style={{ backgroundImage: "url('/background.svg')" }} className="word-scrapper-wrapper">
        <div className="word-scrapper-container">
          <div className="word-scrapper-head">
            <h1>Word Scrapper</h1>
            <p>Basic word information collector that makes your life easier.</p>
          </div>
          <div className="word-scrapper-body">
            <WSInput />
            <WSResults loading={true} />
          </div>
        </div>
        <div className="word-scrapper-background"></div>
      </div>
    </Fragment>
  );
}

export default App;