"use client";

import { useState, useEffect } from "react";

export default function MovieId({ params }) {
    const { movieId } = params;
    const [movie, setMovie] = useState(0);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVlMDFkYWUzMzRmNmI0Mjk5MDllYzY5YWMzNmUwYSIsIm5iZiI6MTcyNzM5MjE3Mi40Mjk5MzMsInN1YiI6IjY2ZDEwN2ZmMDUwODQ5ZmQzMDAxOWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jewglkwf3LYV_65YEKczA1iS4cVGKIwyv06zLu0QgQk'}};
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            const { movie } = await response.json();
            setMovie(movie);
        }
        fetchMovie();
    }, [movieId]);
    
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p><strong>Vote Average:</strong> {movie.vote_average}</p>
            <p><strong>Vote Count:</strong> {movie.vote_count}</p>
            <p><strong>Production Companies:</strong> {movie.production_companies.map(company => company.name).join(', ')}</p>
            <p><strong>Homepage:</strong> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a></p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
        </div>
    );
}
