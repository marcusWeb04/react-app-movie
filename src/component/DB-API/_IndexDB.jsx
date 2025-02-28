export const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("MoviesDB", 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
  
        // Création des stores et des index
        if (!db.objectStoreNames.contains("users")) {
          const userStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
          userStore.createIndex("email", "email", { unique: true });
        }
        if (!db.objectStoreNames.contains("comments")) {
          const commentStore = db.createObjectStore("comments", { keyPath: "id", autoIncrement: true });
          commentStore.createIndex("userId", "userId");
          commentStore.createIndex("movieId", "movieId");
        }
        if (!db.objectStoreNames.contains("evaluations")) {
          const evaluationStore = db.createObjectStore("evaluations", { keyPath: "id", autoIncrement: true });
          evaluationStore.createIndex("userId", "userId");
          evaluationStore.createIndex("movieId", "movieId");
        }
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result); // Retourne la base de données
      };
  
      request.onerror = (event) => {
        reject("Erreur lors de l'ouverture de la base de données");
      };
    });
};
  
export const addUser = async (email, password) => {
  const db = await openDB();
  const transaction = db.transaction(["users"], "readwrite");
  const userStore = transaction.objectStore("users");

  const user = { email, password };
  const request = userStore.add(user);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve("Utilisateur ajouté");
    request.onerror = (event) => reject("Erreur lors de l'ajout de l'utilisateur");
  });
};

// Fonction pour vérifier la connexion avec email et mot de passe
export const loginUser = async (email, password) => {
  const db = await openDB();
  const transaction = db.transaction(["users"], "readonly");
  const userStore = transaction.objectStore("users");

  // Utilisation de l'index email pour rechercher l'utilisateur
  const index = userStore.index("email");
  const request = index.get(email);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const user = request.result;
      if (user) {
        // Vérification du mot de passe
        if (user.password === password) {
          resolve("Connexion réussie");
        } else {
          reject("Mot de passe incorrect");
        }
      } else {
        reject("Utilisateur non trouvé");
      }
    };
    request.onerror = () => reject("Erreur lors de la vérification de l'utilisateur");
  });
};
  
export const addComment = async (userId, movieId, description) => {
  const db = await openDB();
  const transaction = db.transaction(["comments"], "readwrite");
  const commentStore = transaction.objectStore("comments");

  const comment = { userId, movieId, description };
  const request = commentStore.add(comment);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve("Commentaire ajouté");
    request.onerror = (event) => reject("Erreur lors de l'ajout du commentaire");
  });
};
  
export const addEvaluation = async (userId, movieId, rating) => {
  const db = await openDB();
  const transaction = db.transaction(["evaluations"], "readwrite");
  const evaluationStore = transaction.objectStore("evaluations");

  const evaluation = { userId, movieId, rating };
  const request = evaluationStore.add(evaluation);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve("Évaluation ajoutée");
    request.onerror = (event) => reject("Erreur lors de l'ajout de l'évaluation");
  });
};
  
export const getUserById = async (userId) => {
  const db = await openDB();
  const transaction = db.transaction(["users"], "readonly");
  const userStore = transaction.objectStore("users");

  const request = userStore.get(userId);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject("Erreur lors de la récupération de l'utilisateur");
  });
};
  
export const getCommentsByUserId = async (userId) => {
  const db = await openDB();
  const transaction = db.transaction(["comments"], "readonly");
  const commentStore = transaction.objectStore("comments");

  const index = commentStore.index("userId");
  const request = index.getAll(userId);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject("Erreur lors de la récupération des commentaires");
  });
};

export const getCommentsByMovieId = async (movieId) => {
    const db = await openDB();
    const transaction = db.transaction(["comments"], "readonly");
    const commentStore = transaction.objectStore("comments");
  
    // Utilisation de l'index "movieId" pour récupérer tous les commentaires d'un film
    const index = commentStore.index("movieId");
    const request = index.getAll(movieId);
  
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject("Erreur lors de la récupération des commentaires pour ce film");
    });
};
  
export const getEvaluationsByMovieId = async (movieId) => {
  const db = await openDB();
  const transaction = db.transaction(["evaluations"], "readonly");
  const evaluationStore = transaction.objectStore("evaluations");

  const index = evaluationStore.index("movieId");
  const request = index.getAll(movieId);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = (event) => reject("Erreur lors de la récupération des évaluations");
  });
};