import React, { useState, useEffect } from "react";
import axios from "axios";
import BEARER_TOKEN from "./config";
import WatchForm from "./WatchForm";

function WatchApp() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://api.themoviedb.org/3/"
  useEffect(function getMovieGenres() {

    async function fetchGenres() {
      const genreRes = await axios.get(`${BASE_URL}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`
        }
      });

      setMovieGenres(genreRes.data.genres);
      setIsLoading(false);
    }
    fetchGenres();
  }, []);

  console.log(movieGenres);

  return (
    <div>
      <h1>Welcome to Kathrin's What to Watch App!</h1>
      <h3>Fill out the form below to get movie reccomendations based on your mood!</h3>
      {isLoading && <div>Loading</div>}
      {!isLoading && <WatchForm genres={movieGenres} />}
    </div>
  )
}

export default WatchApp;