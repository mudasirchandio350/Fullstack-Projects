import { useEffect, useState } from "react";

const MovieList = ({ searchTerm }: { searchTerm: string }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // how many movies to show

  const GetAPI = async () => {
    const api = await fetch(
      "https://imdb236.p.rapidapi.com/api/imdb/top250-movies",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "de6ad08770msh67634f70b2362a9p1a4bfajsn6eb9564a149b",
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      }
    );
    const resapi = await api.json();
    setMovies(resapi.data || resapi);
  };

  useEffect(() => {
    GetAPI();
  }, []);

  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.primaryTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search Results Info */}
      {searchTerm && (
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} for "{searchTerm}"
          </p>
        </div>
      )}

      {/* Movies Grid */}
      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.slice(0, visibleCount).map((movie) => (
          <div
            key={movie.id}
            className="bg-dark-100 rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 group cursor-pointer"
          >
            {/* Movie Poster */}
            <div className="relative">
              <img
                src={movie.primaryImage}
                alt={movie.primaryTitle}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Rating badge */}
              {movie.averageRating && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded-lg shadow">
                  ⭐ {movie.averageRating}
                </span>
              )}
            </div>

            {/* Movie Info */}
            <div className="p-4">
              <h1 className="text-lg font-semibold mb-2 truncate">
                {movie.primaryTitle}
              </h1>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {movie.description || "No description available."}
              </p>

              {/* Hover Action */}
              <a
                href={movie.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < filteredMovies.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer hover:scale-105"
          >
            View More
          </button>
        </div>
      )}

      {/* No Results Message */}
      {searchTerm && filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <img src="/no-movie.png" alt="No movies found" className="w-32 h-32 mx-auto mb-4 opacity-50" />
          <p className="text-gray-600 text-lg">No movies found for "{searchTerm}"</p>
          <p className="text-gray-500">Try a different search term</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
