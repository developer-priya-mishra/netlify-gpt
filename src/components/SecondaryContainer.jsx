import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)  
  return (
    <div className="bg-black">
      <div className="-my-40 relative z-20 pl-5">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
