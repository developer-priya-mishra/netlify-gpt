import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({movies}) => {
    
    return (
      <div className="w-48 pr-4">
        <img src={IMG_CDN_URL+movies} alt="No image"/>
      </div>
    );
  };
  
  export default MovieCard;
  