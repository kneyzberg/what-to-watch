import React, { useState, useEffect } from "react";
import axios from "axios";
import BEARER_TOKEN from "./config";
import WatchForm from "./WatchForm";
import MovieList from "./MovieList";
import "./WatchApp.css";
import "./clapboard.jpeg";

function WatchApp() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [imgBaseUrl, setImgBaseUrl] = useState("");
  const [posterSize, setPosterSize] = useState("");
  const [streamers, setStreamers] = useState("");

  const BASE_URL = "https://api.themoviedb.org/3/";
  useEffect(function getMovieGenres() {
    async function fetchGenres() {
      const genreRes = await axios.get(`${BASE_URL}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      const configRes = await axios.get(`${BASE_URL}/configuration`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });

      setImgBaseUrl(configRes.data.images.base_url);
      setPosterSize(configRes.data.images.poster_sizes[2]);

      setMovieGenres(genreRes.data.genres);
      setIsLoading(false);
    }
    fetchGenres();
  }, []);

  async function getMovieRecs(data) {
    const movieRes = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        with_genres: data.genre,
        include_adult: false,
        "primary_release_date.gte": data.start_date,
        "primary_release_date.lte": data.end_date,
      },
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    setMovies(movieRes.data.results);
  }

  useEffect(() => {
    async function getProviders() {
      const providers = await axios.get(`${BASE_URL}/watch/providers/movie`, {
        params: { watch_region: "US" },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      const providersObj = {
        Netflix: true,
        "Disney Plus": true,
        "Amazon Prime Video": true,
        Hulu: true,
        "Apple TV Plus": true,
        "HBO Max": true,
      };

      let response = providers.data.results.filter(
        (provider) => providersObj[provider.provider_name] === true
      );
      setStreamers(response);
    }
    getProviders();
  }, []);

  return (
    <div className="WatchApp-container">
      <h1 className="WatchApp-title">
        Welcome to Kathrin's and David's What to Watch App!
      </h1>
      <section className="WatchApp-form">
        {isLoading && <div>Loading</div>}
        {!isLoading && (
          <WatchForm
            genres={movieGenres}
            getMovies={getMovieRecs}
            streamers={streamers}
          />
        )}
      </section>
      <section>
        {movies && (
          <MovieList
            imgUrl={imgBaseUrl}
            posterSize={posterSize}
            movies={movies}
          />
        )}
      </section>
    </div>
  );
}

export default WatchApp;
