 
import axios from "axios";

const API_KEY = "8645fb2";
const API_URL = "http://www.omdbapi.com";

function requestStarWarsMoviesObject() {
  return {
    method: "get",
    url: API_URL,
    params: {
      s: "star wars",
      apiKey: API_KEY
    }
  };
}

export function getStarWarsMovies() {
  return axios(requestStarWarsMoviesObject())
    .then(response => {
      console.log("FUNCIONOU", response);
      return response.data.Search;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
}