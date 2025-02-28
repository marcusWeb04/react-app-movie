import { NavLink } from "react-router-dom";

export default function _movieCanvas(movie){
    const imageMovieCanvas = `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.movie.poster_path}`
    const link = `/movie/${movie.movie.id}`
    return(
    <>
    <NavLink to={link} end>
        <li>
            <img src={imageMovieCanvas} alt="#" />
        </li>
    </NavLink>
    </>
    );
}