export default function _itemSlider(movie){
    const image = `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.movie.poster_path}`
    return(
        <>
        <div className="item-silder">
            <p>{movie.movie.original_title}</p>
            <img src={image} alt="" />
        </div>
        </>
    )
}