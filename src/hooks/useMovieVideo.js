import { useEffect, useState } from "react";
import { API_Options } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";


const useMovieVideo = ({movieID}) =>{
    const dispatch = useDispatch()

    const getMovieVideo = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_Options)
        const jsonData = await data.json();
        const filterData = jsonData?.results.filter((data) => data.type === "Trailer")
        const trailer =filterData.length ? filterData[0] : jsonData?.results[0];
        dispatch(addTrailerVideos(trailer))
    }
     
    useEffect(() => {
        getMovieVideo();
    },[])
}

export default useMovieVideo