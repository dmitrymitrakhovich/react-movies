import React, { Component } from "react";
import Movies from "../components/Movies";

export default class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    try {
      fetch("http://www.omdbapi.com/?apikey=bbfe5210&s=matrix")
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search }));
    } catch (error) {
      new Error(error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <main className='container content'>
        {movies.length ? <Movies movies={movies} /> : <h5>Loading...</h5>}
      </main>
    );
  }
}
