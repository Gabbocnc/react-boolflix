import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const MyMovies = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    /* chiamata ajax per i FILM */
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it-IT&page=1&sort_by=popularity.desc')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setMovies(data.results);
                setFilteredMovies(data.results)
            })
            .catch(err => {
                console.error("Errore nel recupero dei film:", err);
            });
    }, []);

    /* funzione per cercare i film  */
    const searchMovies = (searchText) => {
        const filtered = movies.filter(movie =>
            searchText === "" || movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    return (
        <GlobalContext.Provider value={{ movies: filteredMovies, searchMovies }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default { GlobalContext, MyMovies }
