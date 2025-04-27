import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openAI from "../utils/openAI";

const GptSearchBar = () => {
  const search = useRef(null);
  const langKey = useSelector((state) => state.config.lang);

  const handleGptSearchClick = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some more movies for the query : " +
      search.current.value +
      " only give name of 5 movies";

    const response = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: query },
      ],
    });

    console.log(response);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-2 col-span-9 bg-white rounded-lg"
        />
        <button
          className="col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
