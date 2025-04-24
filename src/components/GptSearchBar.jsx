import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black rounded-lg">
        <input
          type="text"
          placeholder="What would you like t watch today?"
          className="p-4 m-2 col-span-9 bg-white rounded-lg"
        />
        <button className="col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
