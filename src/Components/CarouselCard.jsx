// Carousel.js
import React from 'react';
import { calculateRating } from '../Utilities/RatingUtilities';

const Carousel = ({ data, title, id, isMovie }) => {
    const handleCardClick = (e) => {
        e.currentTarget.classList.toggle('flipped');
    };

    return (
        <div id={id} className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <h1 className="titleCarousel">{title}</h1>
            <div className="carousel-inner">
                {data.map((_, index) => {
                    const isActive = index === 0 ? 'active' : '';
                    return (
                        <div key={index} className={`carousel-item ${isActive}`}>
                            <div className="movie-carousel">
                                {data.slice(index, index + 10).map((item) => (
                                    <div
                                        key={item.id}
                                        className="movie-card"
                                        onClick={handleCardClick}
                                    >
                                        <img
                                            className="card-img-top"
                                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            alt={isMovie ? item.title : item.name}
                                        />
                                        <div className="movie-info">
                                            <img
                                                className="movie-info-backdrop-img"
                                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                                alt=""
                                            />
                                            <h3>{isMovie ? item.title : item.name}</h3>
                                            <p>{item.overview}</p>
                                            <p>{isMovie ? `Release Date: ${item.release_date}` : `First Air Date: ${item.first_air_date}`}</p>
                                            <p>Vote: {calculateRating(item.vote_average)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
