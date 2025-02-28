import { NavLink,useNavigate  } from "react-router-dom";
import { search } from "./DB-API/_RequestApi";
import { useEffect, useState } from "react";


export default function _Nav() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim() !== "") {
            search(query).then((result) => setData(result));
        }
    }, [query]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (query.trim() !== "") {
            const result = await search(query);
            setData(result);
            navigate("/search", { state: { res: result } });
        }
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <nav>
            <ul>
                <li><NavLink to="/" end>Accueil</NavLink></li>
                <li><NavLink to="/categorie" end>Catégorie</NavLink></li>
                <li><NavLink to="/connexion" end>Se&nbsp;connecter</NavLink></li>
            </ul>
            <form action="#" className="search-bar" onSubmit={handleSubmit}>
                <button type="submit" className="button-search">+</button>
                <div className="button-input">
                    <label htmlFor="search"></label>
                    <input 
                        type="text" 
                        name="search" 
                        onChange={handleChange} 
                        value={query} 
                        placeholder="Entrer un artiste, un film, une série, un acteur" 
                        required 
                    />
                </div>
            </form>
        </nav>
    );
}
