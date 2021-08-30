import React, { useState, useEffect } from "react";
import axios from "axios";
import BEARER_TOKEN from "./config";
function WatchApp() {
  const [movieGenres, setMovieGenres] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3/"
  useEffect(function getMovieGenres(){

    async function fetchGenres(){
      const genreRes = await axios.get(`${BASE_URL}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`
        }
      });

      setMovieGenres(genreRes.data);
    }
    fetchGenres();
  }, []);
  
  return (
    <div>
      <h1>Welcome to Kathrin's What to Watch App!</h1>
      <h3>Fill out the form below to get movie reccomendations based on your mood!</h3>
    </div>
  )
}

export default WatchApp;