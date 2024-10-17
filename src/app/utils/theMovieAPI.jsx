import axiosClient from "./axiosClient";

//define categorias en objeto
export const category = {
    movie: "movie",
    tv: "tv"
}

// tipo de peliculas en objeto
export const movieType = {
    popular: "popular",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    upcoming: "upcoming"
}

// tipo de series en objeto
export const serieType = {
    popular: "popular",
    topRated: "top_rated",
    onTheAir: "on_the_air",
    airingToday: "airing_today"
}

// Objeto con metodos para interactuar con api
// Utiliza axiosClient para hacer peticiones http
// Devuelve una promsea que se resuelve con los datos de la respuesta
const theMovieAPI = {
    // Obtener peliculas, especificando tipo y parametros adicionales
    getMoviesList: (type, params) => {
        const url = '/movie/' + movieType[type];
        //Retorno de promesa con lista de peliculas
        return axiosClient.get(url, {params}); 
    },
    getSeriesList: (type, params) => {
        const url = '/tv/' + serieType[type];
        return axiosClient.get(url, {params});
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params :{}});	
        // params es se utiliza para especificar parametros
        // {} objeto vacio que para como valor predeterminado atraves de params
        // Seria no se esta añadiendo parametros adicionales
        // Uso, mantiene consistencia en la forma que se realizan las consultas
        // Facilita la adición de parametros adicionales en el futuro
    },
    search: (cate, params) => {
        const url = '/search/' + category[cate];
        return axiosClient.get(url, {params});
    },
    details: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, {params});	
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params :{}});	
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params :{}});	
    },
}

export default theMovieAPI;