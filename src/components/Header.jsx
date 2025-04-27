import NetlifyLogo from "../../public/Netlify_Logo.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/contants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscibing when components unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NetlifyLogo} alt="logo" className="w-20 mx-6" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select className="bg-gray-500 p-2 my-4 rounded-lg cursor-pointer" onChange={handleLanguageChange}>
            {Supported_Languages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button
            className="py-2 px-4 text-white bg-purple-800 rounded-lg mx-4 my-4 cursor-pointer hover:bg-purple-600"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img src={user.photoURL} alt="logo" className="w-10 h-10 m-2" />
          <button className="font-bold text-white" onClick={handleClick}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
