import { useState, useEffect , NavLink} from "react";
import { useLocation } from "react-router-dom";
// css
import "../page/pageCss/search.css";
// component
import _Nav from "../component/_Nav";

export default function SearchResults() {
  // pour recuperer les données
  const location = useLocation();
  const results = location.state?.res || []; // Récupérer le tableau ou un tableau vide par défaut

  const [persons,setPersons] = useState([]);
  const [content,setContents] = useState([]);

  // parcours de données
  useEffect(() => {
      const filteredPersons = results.filter(res => res.media_type === "person");
      const filteredContent = results.filter(res => res.media_type === "movie" || res.media_type=="tv")
      setPersons(filteredPersons);
      setContents(filteredContent);
  }, [results]);

  console.log(persons);

  console.log(content);

    return (
      <>
      <_Nav />
      <div>
            <h1>Résultats de la recherche :</h1>
            {persons.length > 0 || content.length>0 || persons.length>0 && content.length>0 ? (
              <div className="list-content">
                <ul>
                    {persons.map((res) => (
                      <li key={res.id}>
                        {res.title || res.name} 
                        {res.poster_path !== null && res.poster_path !== undefined ? 
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${res.poster_path}`} alt={res.title || res.name} /> :
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${res.profile_path}`} alt={res.title || res.name} />
                        }
                      </li>
                    ))}
                </ul>
                <ul>
                    {content.map((res) => (
                      <li key={res.id}>
                      {res.title || res.name} 
                      {res.poster_path !== null && res.poster_path !== undefined ? 
                      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${res.poster_path}`} alt={res.title || res.name} /> ?? <p></p> :
                      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${res.profile_path}`} alt={res.title || res.name} /> ?? <p></p>
                      }
                    </li>
                    ))}
                </ul>
              </div>
            ) : (
                <p>Aucun résultat trouvé.</p>
            )}
        </div>
      </>
    );
}