import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function searchInput() {
    const { searchText, filterContent } = useContext(GlobalContext);



    return (
        <div className="search-input-container">
            <input
                type="text"
                placeholder="Cerca per titolo..."
                value={searchText}
                onChange={(e) => filterContent(e.target.value)}
                className="search-input"

            />
            <i className="bi bi-search"></i>
        </div>
    );
}

export default searchInput;