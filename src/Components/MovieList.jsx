import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'

export default function MovieList() {
    const { filteredMovies, filteredTvShows } = useContext(GlobalContext);

    /* Bandiere per le lingue */
    const languageFlag = {
        'it': IT,
        'en': US,
        'fr': FR,
        'es': ES,
        'ja': JP,
        'gb': GB,
        'de': DE,
        'cn': CN,
        'ko': KR,
        'ru': RU
    };

    return (
        <div>
            <h2>Film Trovati</h2>
            <ul>
                {filteredMovies.map((movie) => {

                    const Flag = languageFlag[movie.original_language.toLowerCase()];

                    return (
                        <li key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>{movie.original_title}</p>
                            <div style={{}}>
                                {Flag ? (
                                    <Flag
                                        width={30}
                                        height={20}
                                        language={movie.original_language}
                                    />
                                ) : (
                                    <span>{movie.original_language}</span>
                                )}
                                <p>Voto: {movie.vote_average}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h2>Serie Tv</h2>
            <ul>
                {filteredTvShows.map(tvShow => (
                    <li key={tvShow.id}>
                        {tvShow.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}