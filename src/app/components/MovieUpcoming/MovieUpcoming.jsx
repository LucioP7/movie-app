export default function MovieUpcoming( { upcomingMovies } ) {
    return (
        <div>
            <h2>Upcoming</h2>
            <ul>
                {upcomingMovies.map((movie, index) => (
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
                        <p>Fecha: {movie.release_date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}