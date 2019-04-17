import React from 'react';
import { NavLink } from 'react-router-dom';

function MovieCard({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <NavLink to={`/movies/${id}`} style={{color:"red"}} >
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </NavLink>
  );
}


export default MovieCard;
