import { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'
import { calculateRating } from '../Utilities/RatingUtilities';

export default function MovieList({ }) {
    const { movies, tvShows, fetchTrailer, videoTrailer } = useContext(GlobalContext);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

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

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i <= 5; i++) {
            if (i <= rating) {
                /* Stella piena */
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else {
                /* Stella vuota */
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    };
    const handleImageClick = (id) => {
        if (selectedMovieId === id) {
            setSelectedMovieId(null);
        } else {
            setSelectedMovieId(id);
            fetchTrailer(id);
        }
    };


    return (
        <div className="movieList bg-dark text-white ov">

            <div className="movieList bg-dark text-white">

                {/* FILM */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 p-3">
                    {movies.map((movie) => {
                        const Flag = languageFlag[movie.original_language.toLowerCase()];
                        const rating = calculateRating(movie.vote_average);
                        if (!movie.backdrop_path) return null

                        return (
                            <div key={movie.id} className="col">
                                <div className="card bg-dark border-white text-white">
                                    {selectedMovieId === movie.id ? (


                                        <div className="video-container">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${videoTrailer[movie.id] ? videoTrailer[movie.id].split('/')[4] : ''}?autoplay=1&modestbranding=1&controls=0&rel=0&showinfo=0`}
                                                title="Trailer"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (

                                        <img
                                            src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                            alt={movie.title}
                                            className="card-img-top img-fluid w-100"
                                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                                            onClick={() => handleImageClick(movie.id)}
                                        />

                                    )}

                                    <div className="card-body">
                                        <h5 className="card-title overflow-hidden">{movie.title}</h5>
                                        <p className="card-text">{movie.original_title}</p>
                                        <p> Type : Film</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                {Flag ? (
                                                    <Flag width={30} height={20} className="me-2" />
                                                ) : (
                                                    <span>{movie.original_language}</span>
                                                )}
                                            </div>
                                            <div>
                                                <span>Voto: {rating}</span>
                                                <span className="m-3">{renderStars(rating)}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* SERIE TV */}

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-3 tvshows ">
                {tvShows.map((tvShow) => {
                    const TvShowFlag = languageFlag[tvShow.original_language.toLowerCase()];
                    const rating = Math.ceil(tvShow.vote_average / 2);
                    if (!tvShow.backdrop_path) return null

                    return (
                        <div key={tvShow.id} className="col" >

                            <div className="card bg-dark border-white text-white">
                                <img
                                    src={`http://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`}
                                    alt={tvShow.name}
                                    className="card-img-top img-fluid w-100"
                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title overflow-hidden">{tvShow.name}</h5>
                                    <p className="card-text">{tvShow.original_name}</p>
                                    <p> Type : ShowTv</p>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {TvShowFlag ? (
                                                <TvShowFlag width={30} height={20} className="me-2" />
                                            ) : (
                                                <span>{tvShow.original_language}</span>
                                            )}
                                        </div>

                                        <div>
                                            <span>Voto: {rating}</span>
                                            <span className='m-3'>{renderStars(rating)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}