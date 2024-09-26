import { useState } from "react";

//Recibo el un objeto de array de peliculas
export default function Carrusel({ movies }) {

    // Al establecerlo en 0 muestra la primer pelicula del array
    const [currentMovie, setCurrentMovie] = useState(0); 

    // Incrementa el indice de la pelicula actual, % vuelve a 0 al final del array
    const handleNext = () => {
        setCurrentMovie((prevMovie) => (prevMovie + 1) % movies.length);
    };

    // Decrementa el indice de la pelicula actual, % vuelve al final del array
    const handlePrev = () => {
        setCurrentMovie((prevMovie) => (prevMovie - 1 + movies.length) % movies.length);
    };

    console.log(movies[currentMovie]);
    //movies[currentMovie] me permite acceder al array en la posicion que se encuentre currentMovie
    return (
        <div>
            <button onClick={handlePrev}>{"<"}</button>
            {/* Imagen de fondo difuminada */}
            <img
                src={`https://image.tmdb.org/t/p/w500${movies[currentMovie].backdrop_path}`}
                alt={movies[currentMovie].title}
            />
           <img
                src={`https://image.tmdb.org/t/p/w500${movies[currentMovie].poster_path}`}
                alt={movies[currentMovie].title}
            />
            <h2 className="text-4xl font-bold mb-4">{movies[currentMovie].title}</h2>
            <p className="text-xl mb-6">{movies[currentMovie].overview}</p>
            <button className="self-start">Ver ahora</button>
            <button onClick={handleNext}>{">"}</button>        
        </div>
    );
}


// <div className="carrusel">
        //     <button onClick={handlePrev}>{"<"}</button>
        //     <div className="movie">
        //         <h1>{movies[currentMovie].title}</h1>
        //         <p>{movies[currentMovie].overview}</p>
        //         {movies[currentMovie].posters && movies[currentMovie].posters.length > 0 && (
        //             <img src={`https://image.tmdb.org/t/p/w500${movies[currentMovie].posters[0].file_path}`} alt={movies[currentMovie].title} />
        //         )}
        //     </div>
        //     <button onClick={handleNext}>{">"}</button>
        // </div>
