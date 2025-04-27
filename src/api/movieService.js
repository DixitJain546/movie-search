const API_KEY = 'fe00c1cc';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm) => {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error("Failed to fetch Movies", error);
        return [];
    }
}