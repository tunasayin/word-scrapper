// Styles
import './WSResultsStyle.css';

function WSResults({ loading }) {
    if (loading) {
        return (
            <div className="word-scrapper-results-container">
                <div class="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className="word-scrapper-results-container">

            </div>
        )
    }

}

export default WSResults
