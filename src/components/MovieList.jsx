import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="py-2 text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll  hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movies={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
