import { useEffect, useState } from "react";
import { calculateRating } from "./RatingUtilities";
function HomePage() {
    const [data, setData] = useState([])
    const [tvData, setTvData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlNmUzYjM1ZTZjNTRmMTRlY2ZhMjBmYWE3ZGFkYiIsIm5iZiI6MTczMjc4NTg2Mi40OTIxMTg2LCJzdWIiOiI2NzQ4MmRhMDJhYTViN2JkMTRlNTM4ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.G3bHv0ENl_uA07gs9yQVMmk_vQvuFeg3k5ScloFyQnA'
        }
    };


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(data => setData(data.results))

        fetch('https://api.themoviedb.org/3/tv/popular', options)
            .then(response => response.json())
            .then(data => setTvData(data.results))

    }, []);



    const handleCardClick = (e) => {
        const card = e.currentTarget;
        card.classList.toggle('flipped');
    };





    return (
        <main className="bg-dark vh-200 text-white">
            <h1>Popular Movies</h1>

            {/* Carosello orizzontale per i film */}
            <div className="movie-carousel d-flex overflow-auto">
                {data.map((movie) => {
                    const rating = calculateRating(movie.vote_average)

                    return (
                        <div
                            key={movie.id}
                            className="movie-card"
                            onClick={handleCardClick}
                        >
                            <img
                                className="card-img-top"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="movie-info">
                                <h3>Title : {movie.title}</h3>
                                <p>Overview : {movie.overview}</p>
                                <p>Release Date: {movie.release_date}</p>
                                <p>Vote : {rating}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <h1>Popular TV Shows</h1>

            {/* Carosello orizzontale per i programmi TV */}
            <div className="movie-carousel d-flex overflow-auto">
                {tvData.map((tvShow) => {
                    const rating = calculateRating(tvShow.vote_average)

                    return (
                        <div key={tvShow.id} className="movie-card" onClick={handleCardClick}>
                            <img
                                className="card-img-top"
                                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                                alt={tvShow.name}
                            />
                            <div className="movie-info">
                                <h3>Title : {tvShow.name}</h3>
                                <p>Overview : {tvShow.overview}</p>
                                <p>Release Date: {tvShow.first_air_date}</p>
                                <p>Vote : {rating}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
export default HomePage