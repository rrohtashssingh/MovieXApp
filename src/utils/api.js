import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "5d74ff3b67b6871f6486bfc6967780e1"; // Replace with your API key

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params: {
                ...params,
                api_key: TMDB_API_KEY,
            },
        });
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
};

// Example usage:
// fetchDataFromApi("/movie/550", {});
