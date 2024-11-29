import { useEffect, useState } from "react";
import TopRated from "./TopRated"
import Movies from "./Movies";
import TvShows from "./TvShows";
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

    return (
        <main className="bg-dark p-4 text-white">


            {/* Carosello per i film */}
            <Movies data={data} />


            {/* Carosello per le serie TV */}
            <TvShows tvData={tvData} />


            {/* Carosello per i Popular */}
            <TopRated data={popularList} />

        </main >
    );
}

export default HomePage