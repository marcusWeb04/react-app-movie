// hook
import { useState,useEffect } from 'react'
// css
import '../App.css'
// component
import _Nav from '/src/component/_Nav.jsx'
import _silder from '../component/_slider'
import _movieCanvas from '../component/_movieCanvas'
// request
import {getTopRatedMovie} from "../component/DB-API/_RequestApi"

function App() {

  const[movie,setMovie] = useState([]);
  useEffect(()=>{
    getTopRatedMovie().then(data => setMovie(data));
  },[]);

  return (
    <>
      <_Nav />
      <_silder />
      <div className='container-canvas'>
        {movie.map(movie=>
          (<_movieCanvas key={movie.id} movie={movie}/>)
        )}
      </div>
    </>
  )
}

export default App
