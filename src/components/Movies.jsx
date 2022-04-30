import React from "react";
import Movie from "./Movie";

export default function Movies({ movies }) {
  return (
    <div className='movies'>
      {movies && movies.length ? (
        movies.map((movie) => <Movie movie={movie} key={movie.imdbId} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
