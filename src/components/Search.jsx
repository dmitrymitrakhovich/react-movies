import React, { useState } from "react";

export default function Search({ searchMovie }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovie(search, type);
    }
  };

  const handleClick = () => {
    searchMovie(search, type);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovie(search, type);
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='Search movie'
          id='email_inline'
          type='search'
          className='validate'
          value={search}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
        <button className='btn search-btn' onClick={handleClick}>
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
            checked={type === "all"}
            onChange={handleFilter}
          />
          <span>All</span>
        </label>

        <label>
          <input
            name='type'
            type='radio'
            value='movie'
            data-type='movie'
            checked={type === "movie"}
            onChange={handleFilter}
          />
          <span>Movie</span>
        </label>

        <label>
          <input
            name='type'
            type='radio'
            value='series'
            data-type='series'
            checked={type === "series"}
            onChange={handleFilter}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}
