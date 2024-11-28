import { useEffect, useState } from "react";
import { calculateRating } from "./RatingUtilities";
function HomePage() {
    const [data, setData] = useState([])
    const [tvData, setTvData] = useState([])
    const [popularList, setPopularList] = useState([])


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlNmUzYjM1ZTZjNTRmMTRlY2ZhMjBmYWE3ZGFkYiIsIm5iZiI6MTczMjc4NTg2Mi40OTIxMTg2LCJzdWIiOiI2NzQ4MmRhMDJhYTViN2JkMTRlNTM4ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.G3bHv0ENl_uA07gs9yQVMmk_vQvuFeg3k5ScloFyQnA'
        }
    };


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
            .then(response => response.json())
            .then(data => setData(data.results))

        fetch('https://api.themoviedb.org/3/tv/popular', options)
            .then(response => response.json())
            .then(data => setTvData(data.results))

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setPopularList(data.results))



    }, []);



    const handleCardClick = (e) => {
        const card = e.currentTarget;
        card.classList.toggle('flipped');
    };



    return (
        <main className="bg-dark p-4 text-white">


            {/* Carosello per i film */}
            <h1>Popular Movies</h1>
            <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
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
                                                <p>Vote : {rating}</p>
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


            {/* Carosello per i programmi TV */}
            <h1>Popular TV Shows</h1>
            <div id="tvCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    {tvData.map((tvShow, index) => {
                        const rating = calculateRating(tvShow.vote_average);
                        const isActive = index === 0 ? 'active' : '';
                        return (
                            <div key={index} className={`carousel-item ${isActive}`}>
                                <div className="movie-carousel">
                                    {tvData.slice(index, index + 5).map((tvItem) => (
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
                                                <p>Vote : {rating}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#tvCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#tvCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>




            </div >


            {/* Carosello per i Popular */}
            <h1>Top Rated</h1>
            <div id="topRated" className="carousel slide " data-bs-ride="carousel" data-bs-interval="4000" >
                <div className="carousel-inner">
                    {popularList.map((tvShow, index) => {
                        const rating = calculateRating(tvShow.vote_average);
                        const isActive = index === 0 ? 'active' : '';
                        return (
                            <div key={index} className={`carousel-item ${isActive}`}>
                                <div className="movie-carousel">
                                    {popularList.slice(index, index + 5).map((tvItem) => (
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
                                                <p>Vote : {rating}</p>
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




            </div >


        </main >
    );
}

export default HomePage