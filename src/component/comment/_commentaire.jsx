import { useState,useEffect } from "react";
// request
import { getCommentsByMovieId } from "../DB-API/_IndexDB";

export default function _CategoriesMovieChoice(idMovie){
    // commentaire
    const [commentaire,setCommentaire] = useState();

    useEffect(()=>{
        getCommentsByMovieId(idMovie).then(data => setCommentaire(data));
    },[idMovie]);

    console.log(commentaire);
    
    return(
    <>
        <p>

        </p>
    </>);
}