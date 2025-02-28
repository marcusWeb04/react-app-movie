// hooked
import { useState,useEffect } from 'react';
// css
import '../componentCss/slider.css'
// request
import {getMoviePopular} from './DB-API/_RequestApi'
// component
import _itemSlider from './element-slider/_item-slider';

export default function _silder(){
    const [lastMovie,setLastMovie] = useState([]);
    
    useEffect(()=>{
        getMoviePopular(1).then(data => setLastMovie(data));
    },[]);

    return(
    <>
        <div className="slider">
            <div className="slider-button"></div>
            <div className="slider-item">
                {lastMovie.map(movie=>(
                    < _itemSlider movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    </>);
}