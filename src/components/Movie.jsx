import React from "react";

export default function Movie({ movie }) {
  const {
    Title: title,
    Year: year,
    imbdId: id,
    Type: type,
    Poster: poster,
  } = movie;

  return (
    <div className='card' id={id}>
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === "N/A" ? (
          <img
            className='activator'
            src={`https://via.placeholder.com/300x450?text=${title}`}
            alt={title}
          />
        ) : (
          <img className='activator' src={poster} alt={title} />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year}
          <span className='right'>Type: {type}</span>
        </p>
      </div>
    </div>
  );
}
