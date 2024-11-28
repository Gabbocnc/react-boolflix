import { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext'

export default function SearchText({ }) {
    const [searchText, setSearchText] = useState("");
    const { searchMovies } = useContext(GlobalContext);

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        searchMovies(e.target.value);

    }
    return (
        <>
            <div>
                <input
                    type="text"
                    value={searchText}
                    onChange={{ handleSearchText }}
                    placeholder="Cerca un film, una serie Tv ..."
                />
            </div>
        </>
    )
}