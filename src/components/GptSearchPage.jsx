import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import background_Image from "../../public/background_img.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
            <img src={background_Image} alt="logo" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
