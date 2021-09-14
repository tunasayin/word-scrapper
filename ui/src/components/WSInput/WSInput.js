import { BiSearchAlt } from 'react-icons/bi';
import './WSInputStyle.css';

function WSInput() {
    return (
        <div className="word-scrapper-input-container">
            <input type="text" placeholder="Search a word" />
            <BiSearchAlt className="word-scrapper-search-icon" />
        </div>
    )
}

export default WSInput
