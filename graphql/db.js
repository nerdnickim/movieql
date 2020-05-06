import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES = `${API_URL}list_movies.json?`;
const MOVIE_DETAIL = `${API_URL}movie_details.json?`;
const MOVIE_SUGGESTIONS = `${API_URL}movie_suggestions.json?`;


export const getMovies = (limit, rating) => {
    let REQUEST_URL = LIST_MOVIES;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
}

export const getMovie = (id) => {
    let REQUEST_URL = MOVIE_DETAIL;
    if(id > 0){
        REQUEST_URL += `movie_id=${id}`
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie)
}

export const suggestionsMovie = (id) => {
    let REQUEST_URL = MOVIE_SUGGESTIONS;
    if(id >0){
        REQUEST_URL += `movie_id=${id}`
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
}