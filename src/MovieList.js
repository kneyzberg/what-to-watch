import React from "react";
import MovieCard from "./MovieCard";

function MovieList({imgUrl, posterSize, movies}){
  console.log(movies);

  return(
    <div>
      {movies.map(m => <MovieCard key={m.id} movie={m} imgUrl={imgUrl} posterSize={posterSize}/>)}
    </div>
  )
}

export default MovieList;