import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ imgUrl, posterSize, movies }) {
  return (
    <div className="MovieList-container MovieList-shrink">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          imgUrl={imgUrl}
          posterSize={posterSize}
        />
      ))}
    </div>
  );
}

export default MovieList;
