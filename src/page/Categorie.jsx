import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'
// component
import _Nav from '/src/component/_Nav.jsx'
import _silder from '../component/_slider'
import _movieCanvas from '../component/_movieCanvas'
import _movieImage from '../component/_movieImage'
import {getGenreMovie,getNowPlaying} from '../component/DB-API/_RequestApi'

function Categorie() {
    // genre
    const [genres,setGenres] = useState([]);
    const [lastMovie,setLastMovie] = useState([]);

    // use effect
    useEffect(()=>{
      getGenreMovie().then(data => setGenres(data));
      getNowPlaying().then(data => setLastMovie(data));
    },[]);

    console.log(lastMovie);

    return (
      <>
        <_Nav />
        <ul className='container-type-movie'>
              {genres.map(genre=>(
                <li key={genre.id}>{genre.name}</li>
              ))}
        </ul>
        {/* on affiche les 6 type de film selectionner */}
        <ul className='list-last-movie'>
          {lastMovie.map(movie=>(
            <_movieImage key={movie.id} movie={movie} />
          ))}
        </ul>
      </>
    )
  }

export default Categorie
