import React from 'react';

export default function TopRated({ topMovies }) {
  return (
    <div className="w-1/4 bg-gray-900 text-white p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
      <ul className="space-y-4">
        {topMovies.map((movie, index) => (
          <li key={movie.id} className="flex items-center space-x-4">
            <span className="text-2xl font-bold">{index + 1}</span>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              width={60}
              height={90}
              className="rounded-md"
            />
            <div>
              <h3 className="font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-400">Rating: {movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

