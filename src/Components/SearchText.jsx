import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function MovieSearchInput() {
    const { filterMovies, searchTerm } = useContext(GlobalContext);

    return (
        <div className="search-input-container">
            <input
                type="text"
                placeholder="Cerca per titolo..."
                value={searchTerm}
                onChange={(e) => filterMovies(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default MovieSearchInput;