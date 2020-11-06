import React,{useState,useEffect} from 'react'
import "../Components-css/Banner.css"
import axios from "../axios.js"
import requests from "../requests.js"
function Banner() {
    const [movie, setmovie] = useState({});
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        const getData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            const index = Math.floor(Math.random() * request.data.results.length - 1);
            setmovie(request.data.results[index]);
            console.log(movie);
        }
        getData();
    }, []);
    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + "..." : str; 
    }
    return (
        <div className="banner"
        style={{
            backgroundImage : `url(${base_url}${movie?.backdrop_path})`,
            backgroundSize : "cover",
            backgroundPosition : "center top"
        }}>
           <div className="banner__fadeBottom"/>
            <div className="banner__contents">
                <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h5>{truncate(movie?.overview,150)}</h5>
            </div> 
        </div>
    )
}

export default Banner
