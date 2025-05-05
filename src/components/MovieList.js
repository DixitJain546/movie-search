import MovieCard from "./MovieCard"
import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

const MovieList = () => {

    const { movies } = useContext(MovieContext);

    if(movies === null) {
        return <></>
    }
    if(movies.length < 1) {
        return <p>No Movies Found. Please try searching something else.</p>
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;