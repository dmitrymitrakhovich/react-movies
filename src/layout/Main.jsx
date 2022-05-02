import React, { Component } from "react";
import Movies from "../components/Movies";
import { Prealoader } from "../components/Prealoader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
export default class Main extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  searchMovie = (str, type = "all") => {
    this.setState({ loading: true });
    try {
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
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
