import React from 'react';
import { calculateRating } from './RatingUtilities';

export default function TopRated({ data }) {

    const handleCardClick = (e) => {
        const card = e.currentTarget;
        card.classList.toggle('flipped');
    };
    return (
        <div id="topRated" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <h1 className='titleCarousel'>Top Rated</h1>
            <div className="carousel-inner">
                {data.map((tvShow, index) => {
                    const rating = calculateRating(tvShow.vote_average);
                    const isActive = index === 0 ? 'active' : '';
                    return (
                        <div key={index} className={`carousel-item ${isActive}`}>
                            <div className="movie-carousel">
                                {data.slice(index, index + 10).map((tvItem) => (
                                    <div
                                        key={tvItem.id}
                                        className="movie-card"
                                        onClick={handleCardClick}
                                    >
                                        <img
                                            className="card-img-top"
                                            src={`https://image.tmdb.org/t/p/w500${tvItem.poster_path}`}
                                            alt={tvItem.name}
                                        />
                                        <div className="movie-info">
                                            <img className="tv-show-backdrop-img" src={`https://image.tmdb.org/t/p/w500${tvItem.backdrop_path}`} alt="" />
                                            <h3>{tvItem.name}</h3>
                                            <p>{tvItem.overview}</p>
                                            <p>First Air Date: {tvItem.first_air_date}</p>
                                            <p>Vote: {rating}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#topRated" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#topRated" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

