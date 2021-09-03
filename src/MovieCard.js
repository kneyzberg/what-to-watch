import React from "react";

function MovieCard({imgUrl, posterSize, movie}){

  const posterURL = `${imgUrl}/${posterSize}/${movie.poster_path}`;

  return(
    <div>
      <div>{movie.title} {movie.release_date}</div>
      <img src={posterURL} alt={`Poster for ${movie.title}`}/>

    </div>
    
  )
}

export default MovieCard;