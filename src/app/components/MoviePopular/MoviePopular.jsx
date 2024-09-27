export default function MoviePopular({ popularMovies }) {
    return (
        <div>
            <h2>Popular</h2>
            <ul>
                {popularMovies.map((movie, index) => (
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
    )
}