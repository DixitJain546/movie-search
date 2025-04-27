import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import { fetchMovies } from "../api/movieService";

const useFetchMovies = () => {
    const { setMovies } = useContext(MovieContext);

    const searchMovies = async (searchTerm) => {
        const result = await fetchMovies(searchTerm);
        setMovies(result);
    };

    return { searchMovies };
};

export default useFetchMovies;