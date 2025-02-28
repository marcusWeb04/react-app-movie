import { useState } from "react";

export default function _addComment(idMovie) {
  // Définition de l'état du commentaire avec une valeur initiale
  const [comment, setComment] = useState({
    description: "", 
    idMovie: idMovie,
    // idUser: idUser
  });

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Fonction appelée lorsque l'utilisateur modifie l'input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Formulaire pour saisir un commentaire */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Commentaire</label>
          <input
            type="text"
            name="description"
            value={comment.description} 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}