// "use client";
// import { useEffect, useState, useRef } from "react";
// import { category, movieType } from "@/app/utils/theMovieAPI";
// import ApiConfig from "@/app/utils/movies_helper";
// import theMovieAPI from "@/app/utils/theMovieAPI";
// import Button from "../button/Button";
// import './HeroSlider.css';

// export default function HeroSlider() {
//     const [movies, setMovies] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const getMovies = async () => {
//             const params = { page: 1 };
//             const response = await theMovieAPI.getMoviesList(movieType.popular, params);
//             setMovies(response.results.slice(1, 5));
//         };
//         getMovies();
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
//         }, 3000); // Cambia cada 3 segundos

//         return () => clearInterval(interval);
//     }, [movies]);

//     useEffect(() => {
//         if (sliderRef.current) {
//             sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
//         }
//     }, [currentIndex]);

//     return (
//         <div className="heroSlider">
//             <div className="heroSlider__wrapper" ref={sliderRef}>
//                 {movies.map((movie, index) => (
//                     <HeroSliderMovies key={index} movie={movie} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const HeroSliderMovies = ({ movie }) => {
//     let history = useHistory();

//     const background = ApiConfig.originalImage(movie.backdrop_path ? movie.backdrop_path : movie.poster_path);
//     return (
//         <div className="heroSlider__items" style={{
//             backgroundImage: `url(${background})`
//         }}>
//             <div className="heroSlider__content heroSlider__content--large">
//                 <div className="heroSlider__text">
//                     <h2 className="heroSlider__title heroSlider__title--large">{movie.title}</h2>
//                     <p className="heroSlider__overview heroSlider__overview--large">{movie.overview}</p>
//                     <div className="heroSlider__buttons">
//                         <Button onClick={() => history.push(`/movie/${movie.id}`)}>Ver más</Button>
//                         <Button onClick={console.log("Trailer")}>Ver trailer</Button>
//                     </div>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <img src={ApiConfig.w500Image(movie.poster_path)} alt={movie.title} className="heroSlider__image" />
//                 </div>
//             </div>
//         </div>
//     );
// };

"use client";
import { useEffect, useState, useRef } from "react";
import { category, movieType } from "@/app/utils/theMovieAPI";
import ApiConfig from "@/app/utils/movies_helper";
import theMovieAPI from "@/app/utils/theMovieAPI";
import Button from "../button/Button";
import './HeroSlider.css';

export default function HeroSlider() {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const params = { page: 1 };
                const response = await theMovieAPI.getMoviesList(movieType.popular, params);
                setMovies(response.results.slice(1, 5));
            } catch (error) {
                if (error.code) {
                    switch (error.code) {
                        case 'ECONNABORTED':
                            console.error('Error: La conexión fue abortada.');
                            break;
                        case 'ERR_BAD_OPTION':
                        case 'ERR_BAD_OPTION_VALUE':
                            console.error('Error: Opción incorrecta en la solicitud.');
                            break;
                        case 'ERR_BAD_REQUEST':
                            console.error('Error: Solicitud incorrecta.');
                            break;
                        case 'ERR_BAD_RESPONSE':
                            console.error('Error: Respuesta incorrecta del servidor.');
                            break;
                        case 'ERR_CANCELED':
                            console.error('Error: Solicitud cancelada.');
                            break;
                        case 'ERR_DEPRECATED':
                            console.error('Error: Uso de una característica obsoleta.');
                            break;
                        case 'ERR_FR_TOO_MANY_REDIRECTS':
                            console.error('Error: Demasiados redireccionamientos.');
                            break;
                        case 'ERR_INVALID_URL':
                            console.error('Error: URL inválida.');
                            break;
                        case 'ERR_NETWORK':
                            console.error('Error: Problema de red.');
                            break;
                        case 'ERR_NOT_SUPPORT':
                            console.error('Error: Característica no soportada.');
                            break;
                        case 'ETIMEDOUT':
                            console.error('Error: Tiempo de espera agotado.');
                            break;
                        default:
                            console.error('Error desconocido:', error.message);
                    }
                } else {
                    console.error('Error desconocido:', error.message);
                }
            }
        };
        getMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, [movies]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <div className="heroSlider">
            <div className="heroSlider__wrapper" ref={sliderRef}>
                {movies.map((movie, index) => (
                    <HeroSliderMovies key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export const HeroSliderMovies = ({ movie }) => {
    let history = useHistory();

    const background = ApiConfig.originalImage(movie.backdrop_path ? movie.backdrop_path : movie.poster_path);
    return (
        <div className="heroSlider__items" style={{
            backgroundImage: `url(${background})`
        }}>
            <div className="heroSlider__content heroSlider__content--large">
                <div className="heroSlider__text">
                    <h2 className="heroSlider__title heroSlider__title--large">{movie.title}</h2>
                    <p className="heroSlider__overview heroSlider__overview--large">{movie.overview}</p>
                    <div className="heroSlider__buttons">
                        <Button onClick={() => history.push(`/movie/${movie.id}`)}>Ver más</Button>
                        <Button onClick={() => console.log("Trailer")}>Ver trailer</Button>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <img src={ApiConfig.w500Image(movie.poster_path)} alt={movie.title} className="heroSlider__image" />
                </div>
            </div>
        </div>
    );
};