import React from "react";
import "./MovieCard.css";

function MovieCard({ imgUrl, posterSize, movie }) {
  const posterURL = `${imgUrl}/${posterSize}/${movie.poster_path}`;

  return (
    <div className="MovieCard-container">
      <div>
        <img src={posterURL} alt={`Poster for ${movie.title}`} />
        <div className="Movie-card-text">{movie.title}</div>
        <div className="Movie-card-text">({movie.release_date.slice(0, 4)})</div>
      </div>
    </div>
  );
}

export default MovieCard;
