import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchText, setsearchText] = useState("");

    // Chiamata API per recuperare i film
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it-IT&page=1&sort_by=popularity.desc', {

        })
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                setFilteredMovies(data.results);
            })
            .catch(err => console.error("Errore nel recupero dei film:", err));
    }, []);

    // Funzione per filtrare i film
    const filterMovies = (title) => {
        setsearchText(title);
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    return (
        <GlobalContext.Provider
            value={{
                movies,
                filteredMovies,
                searchText,
                filterMovies,
                setFilteredMovies
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;