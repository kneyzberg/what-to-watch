import React, { useState, useEffect } from "react";
import axios from "axios";
import BEARER_TOKEN from "./config";
import WatchForm from "./WatchForm";
import MovieList from "./MovieList";

function WatchApp() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [imgBaseUrl, setImgBaseUrl] = useState("");
  const [posterSize, setPosterSize] = useState("");

  const BASE_URL = "https://api.themoviedb.org/3/"
  useEffect(function getMovieGenres() {

    async function fetchGenres() {
      const genreRes = await axios.get(`${BASE_URL}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`
        }
      });
      const configRes = await axios.get(`${BASE_URL}/configuration`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`
        }
      } );
      console.log(configRes.data);
      setImgBaseUrl(configRes.data.images.base_url);
      setPosterSize(configRes.data.images.poster_sizes[2]);

      setMovieGenres(genreRes.data.genres);
      setIsLoading(false);
    }
    fetchGenres();
  }, []);

  // console.log(movieGenres);

  async function getMovieRecs(data) {
    const movieRes = await axios.get(`${BASE_URL}/discover/movie`, {
      params: { with_genres: data.genre }, 
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`
      }
    });
    // console.log(movieRes, "movie res");
    // console.log(movieRes.data.results);
    setMovies(movieRes.data.results);
  }

  return (
    <div>
      <h1>Welcome to Kathrin's What to Watch App!</h1>
      <h3>Fill out the form below to get movie reccomendations based on your mood!</h3>
      {isLoading && <div>Loading</div>}
      {!isLoading && <WatchForm genres={movieGenres} getMovies={getMovieRecs}/>}
      {movies && <MovieList imgUrl={imgBaseUrl} posterSize={posterSize} movies={movies}/>}
    </div>
  )
}

export default WatchApp;