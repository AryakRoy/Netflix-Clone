import React,{useState, useEffect} from 'react'
import axios from "../axios.js"
import "../Components-css/Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row(props) {
    const {title,fetchURL,isLargeRow} = props;
    const [movies, setmovies] = useState([]);
    const [trailerURL, settrailerURL] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        const getMovies  = async() => {
            const request = await axios.get(fetchURL);
            console.log(request);
            setmovies(request.data.results);
        }
        getMovies();
    }, [fetchURL]);
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
        //  https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if(trailerURL){
            settrailerURL('');
        }
        else{
            movieTrailer(movie?.name || movie?.original_title || movie?.original_name)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailerURL(urlParams.get("v"));
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie) => {
                        return <img onClick={() => handleClick(movie)} key={movie.id} className = {isLargeRow ? "row__poster": "row__backdrop"} src={base_url + (isLargeRow ? movie.poster_path: movie.backdrop_path)} alt={movie.original_title} />
                    })
                }
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row