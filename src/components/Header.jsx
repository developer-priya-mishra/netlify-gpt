import NetFlixLogo from "../../public/Netlify_Logo.svg";
import LogOutLogo from "../../public/logout_logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NetFlixLogo} alt="logo" className="w-20 mx-6" />
      {user && (
        <div className="flex p-2">
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
