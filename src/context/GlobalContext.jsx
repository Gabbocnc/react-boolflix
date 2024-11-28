import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filteredTvShows, setFilteredTvShows] = useState([])
    const [searchText, setSearchText] = useState("");

    const API = '5c0e6e3b35e6c54f14ecfa20faa7dadb'
    useEffect(() => {

        /*  Chiamata API per recuperare i film */
        fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${API}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log("Film :", data);
                setMovies(data.results);
                setFilteredMovies(data.results);
            })
            .catch(err => console.error("Errore nel recupero dei film:", err));

        /* Chimata API per le serie TV */
        fetch(`https://api.themoviedb.org/3/search/tv?&api_key=${API}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log('Serie Tv :', data);
                setTvShows(data.results);
                setFilteredTvShows(data.results);
            })
            .catch(err => console.error("Errore nel recupero delle serie TV:", err));

    }, [searchText]);



    const filterContent = (title) => {
        setSearchText(title)
    };

    return (
        <GlobalContext.Provider
            value={{
                movies,
                tvShows,
                filteredMovies,
                filteredTvShows,
                searchText,
                filterContent,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;