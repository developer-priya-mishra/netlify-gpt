import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";


const VideoBackGround = ({movieID}) =>{
    const trailer = useSelector((store) => store.movies?.trailerVideo)
    
    useMovieVideo(movieID);
    

    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailer.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackGround;