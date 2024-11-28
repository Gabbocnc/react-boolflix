import React from 'react';
import { calculateRating } from './RatingUtilities';

export default function Movies({ data }) {
    const handleCardClick = (e) => {
        const card = e.currentTarget;
        card.classList.toggle('flipped');
    };

    return (
        <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <h1 className='titleCarousel'>Film</h1>
            <div className="carousel-inner">
                {data.map((movie, index) => {
                    const rating = calculateRating(movie.vote_average);
                    const isActive = index === 1 ? 'active' : '';
                    return (
                        <div key={index} className={`carousel-item ${isActive}`}>
                            <div className="movie-carousel">
                                {data.slice(index, index + 5).map((movieItem) => (
                                    <div
                                        key={movieItem.id}
                                        className="movie-card"
                                        onClick={handleCardClick}
                                    >
                                        <img
                                            className="card-img-top"
                                            src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
                                            alt={movieItem.title}
                                        />
                                        <div className="movie-info">
                                            <img className="movie-info-backdrop-img" src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`} alt="" />
                                            <h3>{movieItem.title}</h3>
                                            <p>{movieItem.overview}</p>
                                            <p>Release Date: {movieItem.release_date}</p>
                                            <p>Vote: {rating}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}