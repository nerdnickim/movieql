let movies = [
    {
        id: 1,
        name: "Avengers",
        score: 2
    },
    {
        id: 2,
        name: "Avengers-fuck you",
        score: 100
    },
    {
        id: 3,
        name: "About time",
        score: 30
    },
    {
        id: 4,
        name: "Bugs",
        score: 20
    },
    {
        id: 5,
        name: "Bug's revenge",
        score: 100
    },
]

export const getMovie =() => movies

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovie = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovie.length){
        movies = cleanedMovie;
        return true;
    } else {
        return false;
    }

}

export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length +1,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}
