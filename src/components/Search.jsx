import React, { Component } from "react";

export default class Search extends Component {
  state = {
    value: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.value, this.state.type);
    }
  };

  handleClick = () => {
    this.props.searchMovie(this.state.value, this.state.type);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => this.props.searchMovie(this.state.value, this.state.type)
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='Search movie'
            id='email_inline'
            type='search'
            className='validate'
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button className='btn search-btn' onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div className='filter'>
          <label>
            <input
              name='type'
              type='radio'
              value='all'
              data-type='all'
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>

          <label>
            <input
              name='type'
              type='radio'
              value='movie'
              data-type='movie'
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span>Movie</span>
          </label>

          <label>
            <input
              name='type'
              type='radio'
              value='series'
              data-type='series'
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
