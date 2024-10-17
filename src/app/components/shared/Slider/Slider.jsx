export default function Slider( { datos, title } ) {
    
    
    return (
        <div className="p-5 bg-white rounded-lg shadow-lg my-5">
            <h2 className="text-tomato mb-5">{title}</h2>
            <ul className="list-none p-0 flex overflow-x-auto">
                {datos.map((movie, index) => (
                    <li key={movie.id} className="bg-white border border-gray-300 rounded-lg mr-2 p-2 min-w-[150px] shadow-md flex flex-col items-center">
                        <span>{index + 1}</span>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded mb-2"
                            width={60}
                            height={90}
                        />
                        <div>
                            <h3 className="text-gray-800 my-2 text-lg">{movie.title}</h3>
                            <p className="text-gray-600 text-sm">Rating: {movie.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}