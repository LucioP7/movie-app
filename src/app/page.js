"use client";
import { useEffect, useState } from 'react';
import MovieCarrusel from './components/MovieCarrusel/MovieCarrusel';
import MovieNavBar from './components/MovieNavBar/MovieNavBar';
import MovieTopRated from './components/MovieTopRated/MovieTopRated';
import MovieUpcoming from './components/MovieUpcoming/MovieUpcoming';
import MoviePopular from './components/MoviePopular/MoviePopular';

const api = "api_key=94ee01dae334f6b429909ec69ac36e0a"
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVlMDFkYWUzMzRmNmI0Mjk5MDllYzY5YWMzNmUwYSIsIm5iZiI6MTcyNzM5MjE3Mi40Mjk5MzMsInN1YiI6IjY2ZDEwN2ZmMDUwODQ5ZmQzMDAxOWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jewglkwf3LYV_65YEKczA1iS4cVGKIwyv06zLu0QgQk'}};


const responseTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
const { results: TopRanked } = await responseTop.json();

const responseUp = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
const { results: Upcoming } = await responseUp.json();

const responsePopular = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
const { results: Popular } = await responsePopular.json();

// useState = Hook que permite agregar estado local a un componente funcional. Devuelve un array con dos elementos: el estado actual y una función que permite actualizarlo.
// useEffect = Hook que permite ejecutar efectos secundarios en componentes funcionales. Se ejecuta después de cada renderizado.

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
            const { results } = await response.json();
            
            //Promise.all es un metodo de js que permite ejecutar multiples promesas al mismo tiempo
            //Devuelve una sola promesa que se resuelve cuando todas las promesas pasadas como argumento se han resuelto
            // const moviesWithImages = await Promise.all(results.map(async (movie) => {
            //     const responseImg = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images?${api}`, options)
            //     const { backdrops } = await responseImg.json(); // Imagenes de fondo	
            //     return {... movie, backdrops}; //Devuelve un nuevo objeto de pelicula que incluye los backdrops
        
            const moviees = results.map((movie) => {
                return {
                    ...movie,
                };
            });

        setMovies(moviees); //actualiza el estado de las peliculas
        }

        fetchMovies();
    }, []);

    //Mediante una condicion vemos que el array de objetos sea mayor a 0
    //(operarior ternario) ? : (Forma de if else) si ? es verdadero se renderiza el componente Carrusel
    //si es falso se renderiza un parrafo con un mensaje de cargando

    return(
        <div>
            <MovieNavBar />
            <div>
                {movies.length > 0 ? <MovieCarrusel movies={movies} /> : <p>Cargando...</p>}
            </div>
            <MovieTopRated topMovies={TopRanked} />
            <MovieUpcoming upcomingMovies={Upcoming} />
            <MoviePopular popularMovies={Popular} />
        </div>
    )
}
