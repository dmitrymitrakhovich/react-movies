import React, { Component } from "react";
import Movies from "../components/Movies";
import { Prealoader } from "../components/Prealoader";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    try {
      fetch(`http://www.omdbapi.com/?apikey=bbfe5210&s=matrix`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search }));
    } catch (error) {
      new Error(error);
    }
  }

  searchMovie = (str) => {
    try {
      fetch(`http://www.omdbapi.com/?apikey=bbfe5210&s=${str}`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search }));
    } catch (error) {
      new Error(error);
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <main className='container content'>
        <Search searchMovie={this.searchMovie} />
        {movies && movies.length ? <Movies movies={movies} /> : <Prealoader />}
      </main>
    );
  }
}
