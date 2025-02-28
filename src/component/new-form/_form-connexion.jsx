import { useState } from "react";
import { loginUser } from "../DB-API/_IndexDB";
import { NavLink } from "react-router-dom";  // Correct importation
// Component
// import Connection from "../element-form/_button-blue-powder";
import Creation from "../element-form/_button-red-dark";

export default function FormCreation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState([]);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
          const result = await loginUser(email, password);
          setMessage(result); // Message de succès
          // Rediriger vers une autre page ou faire d'autres actions après la connexion réussie
        } catch (error) {
          setMessage(error); // Message d'erreur
        }
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="button-form-container">
                    <Creation />
                    <NavLink to={`/Creation`} end>
                        Créer un compte
                    </NavLink> {/* Correction ici avec la bonne fermeture */}
                </div>
                <div className="label-container">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={handleEmail} 
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={handlePassword} 
                        />
                    </div>
                </div>
                <button>Connexion</button>
            </form>
        </>
    );
}
