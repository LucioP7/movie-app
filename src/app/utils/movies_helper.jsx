"use server";

const getAuthOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVlMDFkYWUzMzRmNmI0Mjk5MDllYzY5YWMzNmUwYSIsIm5iZiI6MTcyNzM5MjE3Mi40Mjk5MzMsInN1YiI6IjY2ZDEwN2ZmMDUwODQ5ZmQzMDAxOWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jewglkwf3LYV_65YEKczA1iS4cVGKIwyv06zLu0QgQk'
    }
  };


  const responseTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&${api}`, options)
  const { results } = await responseTop.json();