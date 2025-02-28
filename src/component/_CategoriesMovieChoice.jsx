import { useState } from "react";

export default function _CategoriesMovieChoice(){
    
    const [categories,setCategorie] = useState();
    
    const listCategorieMovie = ()=>
        {
            fetch("https://api.themoviedb.org/3/genre/movie/list?language=fr").then(
                (value)=>value = value.json()
            ).then(
                setCategorie(value)
            )
        };

    return(
    <>
        
    </>);
}