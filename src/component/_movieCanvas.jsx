import '../componentCss/movieCanvas.css'
import { NavLink } from "react-router-dom";

export default function _movieCanvas(movie){
    const imageMovieCanvas = `https://image.tmdb.org/t/p/w220_and_h330_face${movie.movie.poster_path}`
    const link = `/movie/${movie.movie.id}`
    return(
    <>
        <NavLink to={link} end>
            {/* title */}
            <p>{movie.movie.title}</p>
            <div className="movie">
                    {/* image background */}
                    <img src={imageMovieCanvas} alt="#" />
            </div>
        </NavLink>
    </>);
}