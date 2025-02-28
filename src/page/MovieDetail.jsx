// hook
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
// request
import {getDetailMovie,getRecommandation} from '../component/DB-API/_RequestApi.jsx'
// css
import '../page/pageCss/movieDetail.css'
// component
import _Nav from '../component/_Nav.jsx'
import _movieImage from '../component/_movieImage'
import _commentaire from '../component/comment/_commentaire.jsx'
import _addComment from '../component/comment/_addComment.jsx'

function MovieDetail() {
  const { id } = useParams();
  const [user,setUser] = useState(null)
  const [movieDetail, setMovieDetail] = useState(null);
  const [recommendation, SetRecommandation] = useState([]);

  useEffect(() => {
    getDetailMovie(id)
      .then(data => setMovieDetail(data))
      .catch(error => console.error("Erreur lors du chargement des détails :", error));
      getRecommandation(id)
        .then(data=>SetRecommandation(data))
        .catch(error => console.error("Erreur lors du chargement des recommandation :", error));
  }, [id]);
  

  if (!movieDetail) return <p>Chargement...</p>;

  const genres = movieDetail.genres || [];
  const img = `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movieDetail.poster_path}`;
  console.log(recommendation);

  return (
    <>
      <_Nav />
      <div className="main-poster">
        <img src={img} alt={movieDetail.title} />
        <ul>
          <li><strong>Titre :</strong> {movieDetail.title}</li>
          <li><strong>Synopsis :</strong> {movieDetail.overview}</li>
          <li><strong>Genres :</strong>
            <ul className='list-genre'>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>Commentaire:</h2>
        { user && user.name  ?(
          <_addComment idMovie={id}/>
        ):(
          <p>Veiller vous connectez</p>
        )}
        <_commentaire idMovie={id}/>
      </div>
      <div>
        <h2>Recommandation:</h2>
        <ul className='list-last-movie'>
          {recommendation.map(movie=>(
            <_movieImage key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default MovieDetail;