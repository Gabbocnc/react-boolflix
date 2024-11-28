import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
/* import { IT, US, FR, ES, JP, GB, } from 'country-flag-icons/react/3x2' */

export default function MovieList() {


    const { filteredMovies } = useContext(GlobalContext);
    /*   const languageFlag = {
          'it': IT,
          'en': US,
          'fr': FR,
          'es': ES,
          'ja': JP,
          'gb': GB,
      }; */

    return (
        <div>
            <h2>Film Trovati</h2>
            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.original_title}</p>
                        <p>Lingua : {movie.original_language}</p>
                        <p>Voto : {movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}