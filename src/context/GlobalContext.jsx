import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filteredTvShows, setFilteredTvShows] = useState([])
    const [searchText, setsearchText] = useState("");
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlNmUzYjM1ZTZjNTRmMTRlY2ZhMjBmYWE3ZGFkYiIsIm5iZiI6MTczMjc4NTg2Mi40OTIxMTg2LCJzdWIiOiI2NzQ4MmRhMDJhYTViN2JkMTRlNTM4ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.G3bHv0ENl_uA07gs9yQVMmk_vQvuFeg3k5ScloFyQnA'
        }
    };


    useEffect(() => {
        /*  Chiamata API per recuperare i film */
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it-IT&page=1&sort_by=popularity.desc', options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                setFilteredMovies(data.results);
            })
            .catch(err => console.error("Errore nel recupero dei film:", err));

        /* Chimata API per le serie TV */
        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=it-IT&page=1&sort_by=popularity.desc', options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTvShows(data.results);
                setFilteredTvShows(data.results);
            })
            .catch(err => console.error("Errore nel recupero delle serie TV:", err));

    }, []);


    // Funzione per filtrare i film
    const filterMovies = (title) => {
        setsearchText(title);
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredMovies(filtered);
    };
    /* funzione per filtra le serie tv  */
    const filterTvShows = (title) => {
        setSearchText(title);
        const filtered = tvShows.filter(tvShow =>
            tvShow.name.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredTvShows(filtered);
    };

    return (
        <GlobalContext.Provider
            value={{
                movies,
                tvShows,
                filteredTvShows,
                filteredMovies,
                searchText,
                filterMovies,
                filterTvShows,
                setFilteredMovies,
                setFilteredTvShows
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;