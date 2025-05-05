import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const MovieSearch = () => {

    return (
        <div className="movie-search-container">
            <SearchBar />
            <MovieList />
        </div>
    );
};

export default MovieSearch;