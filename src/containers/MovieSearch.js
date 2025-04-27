import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const MovieSearch = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="movie-search-container">
            <SearchBar />
            <MovieList movies={ movies }/>
        </div>
    );
};

export default MovieSearch;