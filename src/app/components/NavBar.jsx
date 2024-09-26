export default function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4 z-10">
            <ul className="flex space-x-4 justify-center">
                <li><a href="/" className="hover:text-gray-300">Inicio</a></li>
                <li><a href="/movies" className="hover:text-gray-300">Movies</a></li>
                <li><a href="/series" className="hover:text-gray-300">Series</a></li>
            </ul>
        </nav>
    )
}
