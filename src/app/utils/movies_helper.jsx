const ApiConfig = {
  urlBase: 'https://api.themoviedb.org/3/', // URL base de la Api
  authorizationToken: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVlMDFkYWUzMzRmNmI0Mjk5MDllYzY5YWMzNmUwYSIsIm5iZiI6MTcyOTE4ODIyNS4zNDE4ODksInN1YiI6IjY2ZDEwN2ZmMDUwODQ5ZmQzMDAxOWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTsqQNLG0FhtLp3ozmmBK9hi7OLP_h6xR-yeFIdABYk', // API Key
  originalImage: (ImgPath) => `https://image.tmdb.org/t/p/original${ImgPath}`, // URL de la imagen original
  w500Image: (ImgPath) => `https://image,tmdb.org/t/p/w500${ImgPath}` // URL de la imagen de 500px
}

export default ApiConfig;
