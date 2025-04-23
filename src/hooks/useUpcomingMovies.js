import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/contants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;