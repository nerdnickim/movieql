import {getMovies, getMovie, suggestionsMovie} from "./db";

const resolvers = {
    Query: {
        movies:(_, {limit, rating}) => getMovies(limit, rating),
        movie:(_, {id}) => getMovie(id),
        suggestions:(_, {id}) => suggestionsMovie(id)
    }
}

export default resolvers;