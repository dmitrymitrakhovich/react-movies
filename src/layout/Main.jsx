import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import { Prealoader } from "../components/Prealoader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchMovie();
  }, [movies]);

  const searchMovie = (str = "matrix", type = "all") => {
    setLoading(true);
    try {
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className='container content'>
      <Search searchMovie={searchMovie} />
      {loading ? <Prealoader /> : <Movies movies={movies} />}
    </main>
  );
}
