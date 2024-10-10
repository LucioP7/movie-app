"use client";
import { useEffect, useState } from 'react';
import MovieCarrusel from './components/MovieCarrusel/MovieCarrusel';
import MovieNavBar from './components/MovieNavBar/MovieNavBar';
import Slider from './components/shared/Slider/Slider';

//const api = "api_key=94ee01dae334f6b429909ec69ac36e0a"
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVlMDFkYWUzMzRmNmI0Mjk5MDllYzY5YWMzNmUwYSIsIm5iZiI6MTcyNzM5MjE3Mi40Mjk5MzMsInN1YiI6IjY2ZDEwN2ZmMDUwODQ5ZmQzMDAxOWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jewglkwf3LYV_65YEKczA1iS4cVGKIwyv06zLu0QgQk'}};


export default function Home() {
    const [movies, setMovies] = useState([]);
    const [topRanked, setTopRanked] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
            const { results } = await response.json();
            setMovies(results);
        };

        const fetchTopRanked = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
            const { results } = await response.json();
            setTopRanked(results);
        };

        const fetchUpcoming = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            const { results } = await response.json();
            setUpcoming(results);
        };

        const fetchPopular = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            const { results } = await response.json();
            setPopular(results);
        };

        fetchMovies();
        fetchTopRanked();
        fetchUpcoming();
        fetchPopular();
    }, []);


    return(
        <div>
            <MovieNavBar />
            <div>
                {movies.length > 0 ? <MovieCarrusel movies={movies} /> : <p>Cargando...</p>}
            </div>
            <Slider datos={topRanked} title="TopMovies" />
            <Slider datos={upcoming} title="Upcoming" />
            <Slider datos={popular} title="Popular" />
        </div>
    )
}
