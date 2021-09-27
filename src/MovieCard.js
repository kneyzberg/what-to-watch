import React from "react";
import "./MovieCard.css";

function MovieCard({ imgUrl, posterSize, movie }) {
  const posterURL = `${imgUrl}/${posterSize}/${movie.poster_path}`;

  return (
    <div className="MovieCard-container">
      <img src={posterURL} alt={`Poster for ${movie.title}`} />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
    </div>
  );
}

export default MovieCard;
