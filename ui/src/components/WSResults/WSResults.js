// Modules
import { Fragment } from 'react';

// Styles
import './WSResultsStyle.css';

function WSResults({ loading }) {
    if (loading) {
        return (
            <div className="word-scrapper-results-container">
                <div class="sk-cube-grid">
                    <div class="sk-cube sk-cube1"></div>
                    <div class="sk-cube sk-cube2"></div>
                    <div class="sk-cube sk-cube3"></div>
                    <div class="sk-cube sk-cube4"></div>
                    <div class="sk-cube sk-cube5"></div>
                    <div class="sk-cube sk-cube6"></div>
                    <div class="sk-cube sk-cube7"></div>
                    <div class="sk-cube sk-cube8"></div>
                    <div class="sk-cube sk-cube9"></div>
                </div>
            </div>
        )
    }
    else {

        return (
            <Fragment></Fragment>
        )
    }

}

export default WSResults
