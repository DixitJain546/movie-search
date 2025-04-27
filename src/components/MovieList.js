import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {
    if(!movies.length) {
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