import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard({ imgUrl, posterSize, movie }) {
  const [hover, setHover] = useState(false);
  const posterURL = `${imgUrl}/${posterSize}/${movie.poster_path}`;

  function mouseOn(e) {
    setHover(true);
  }

  function mouseOut(e) {
    setHover(false);
  }

  return (
    <div className="MovieCard-container">
      <img
        src={posterURL}
        alt={`Poster for ${movie.title}`}
        onMouseOver={mouseOn}
        onMouseOut={mouseOut}
        className={hover ? "Image-transparent" : ""}
      />
      <div className="Movie-card-text">{movie.title}</div>
      <div className="Movie-card-text">({movie.release_date.slice(0, 4)})</div>
    </div>
  );
}

export default MovieCard;
