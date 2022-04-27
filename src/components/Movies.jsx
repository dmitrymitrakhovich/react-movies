import React from "react";
import Movie from "./Movie";

export default function Movies({ movies }) {
  return (
    <div className='movies'>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}
