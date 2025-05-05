import { useState } from "react"
import useFetchMovies from "../hooks/useFetchMovies"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchMovies } = useFetchMovies();

    const handleSearch = () => {
        if (searchTerm.length < 3) {
            alert("Please enter a valid Search term. Minimum 3 characters required.");
            return;
        }
        searchMovies(searchTerm);
    };

    return(
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;