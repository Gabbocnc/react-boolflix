import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchText, setsearchText] = useState("");
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlNmUzYjM1ZTZjNTRmMTRlY2ZhMjBmYWE3ZGFkYiIsIm5iZiI6MTczMjc4NTg2Mi40OTIxMTg2LCJzdWIiOiI2NzQ4MmRhMDJhYTViN2JkMTRlNTM4ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.G3bHv0ENl_uA07gs9yQVMmk_vQvuFeg3k5ScloFyQnA'
        }
    };

    // Chiamata API per recuperare i film
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it-IT&page=1&sort_by=popularity.desc', options)
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