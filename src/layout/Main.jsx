import React, { Component } from "react";
import Movies from "../components/Movies";
import { Prealoader } from "../components/Prealoader";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      fetch(`http://www.omdbapi.com/?apikey=bbfe5210&s=matrix`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } catch (error) {
      new Error(error);
    }
  }

  searchMovie = (str, type = "all") => {
    this.setState({ loading: true });
    try {
      fetch(
        `http://www.omdbapi.com/?apikey=bbfe5210&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } catch (error) {
      new Error(error);
    }
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovie={this.searchMovie} />
        {loading ? <Prealoader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
