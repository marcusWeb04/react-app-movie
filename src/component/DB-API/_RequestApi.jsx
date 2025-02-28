// entrer la clée api
const token = "";

export function getMovieWithPaginate()
{
    const request = "";
}

// les dernier films sortie
export function getLastestMovie()
{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    return fetch(`https://api.themoviedb.org/3/movie/latest`, options)
        .then(res => res.json())
        .then(data => data.genres)
        .catch(err => {
            console.error(err);
            return [];
        });

}

// les film populaire
export function getMoviePopular(page)
{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    return fetch(`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${page}`, options)
        .then(res => res.json())
        .then(data => data.results)
        .catch(err => {
            console.error(err);
            return [];
        });
}

// film qui vont arriver
export function getMovieUpcoming()
{
    const request = "";
}

// detail du film
export function getDetailMovie(movie_id)
{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.error(err);
            return [];
        });
}

export function getGenreMovie() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=fr-FR', options)
        .then(res => res.json())
        .then(data => data.genres)
        .catch(err => {
            console.error(err);
            return [];
        });
}

export function getTopRatedMovie(){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
      return fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

export function search(query)
{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
    };
    return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=fr-FR&page=1`, options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

export function getNowPlaying(){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
      return fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

export function getRecommandation(id) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=fr-FR&page=1`, options)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur API TMDB: ${res.status}`);
            }
            return res.json();
        })
        .then(data => data.results)
        .catch(err => {
            console.error("Erreur lors du chargement des recommandations :", err);
            return [];
        });
}