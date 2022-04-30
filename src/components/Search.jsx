import React, { Component } from "react";

export default class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.value);
    }
  };

  handleClick = () => {
    this.props.searchMovie(this.state.value);
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
            onClick={this.handleClick}
          />
          <button className='btn search-btn'>Search</button>
        </div>
      </div>
    );
  }
}
