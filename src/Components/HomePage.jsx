import { useEffect, useState } from "react";
import TopRated from "./TopRated"
import Movies from "./Movies";
import TvShows from "./TvShows";
import Carousel from './CarouselCard';

function HomePage() {
    const [data, setData] = useState([])
    const [tvData, setTvData] = useState([])
    const [popularList, setPopularList] = useState([])
    const API = import.meta.env.VITE_API_KEY
    const BEARER = import.meta.env.BEARER


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBlNmUzYjM1ZTZjNTRmMTRlY2ZhMjBmYWE3ZGFkYiIsIm5iZiI6MTczMjc4NTg2Mi40OTIxMTg2LCJzdWIiOiI2NzQ4MmRhMDJhYTViN2JkMTRlNTM4ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.G3bHv0ENl_uA07gs9yQVMmk_vQvuFeg3k5ScloFyQnA'
        }
    };


    useEffect(() => {
        /* chimata per trendingWeek film  */
        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
            .then(response => response.json())
            .then(data => setData(data.results))

        /* chimata per popular tvShows */
        fetch('https://api.themoviedb.org/3/tv/popular', options)
            .then(response => response.json())
            .then(data => setTvData(data.results))

        /* chimata per i topRated */
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setPopularList(data.results))



    }, []);

    return (
        <main className="bg-dark p-4 text-white homePage">
            {/* Carosello per i film */}
            <Carousel data={data} title="Movies" id="movieCarousel" isMovie={true} />

            {/* Carosello per le serie TV */}
            <Carousel data={tvData} title="TV Shows" id="tvShowsCarousel" isMovie={false} />

            {/* Carosello per i Popular */}
            <Carousel data={popularList} title="Top Rated" id="topRatedCarousel" isMovie={false} />
        </main>
    );
}

export default HomePage