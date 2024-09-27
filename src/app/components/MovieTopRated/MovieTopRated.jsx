"use client";

import React from 'react';

export default function MovieTopRated({ topMovies }) {
  return (
    <div>
      <h2>Top Rated</h2>
      <ul>
        {topMovies.map((movie, index) => (
          <li key={movie.id}>
            <span>{index + 1}</span>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              width={60}
              height={90}
            />
            <div>
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

