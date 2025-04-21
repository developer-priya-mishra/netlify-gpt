import NetFlixLogo from "../../public/NetFlix_Logo.png"
import LogOutLogo from "../../public/logout_logo.png"
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () =>{
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
          }).catch((error) => {
            navigate('/error');
          });
    }

    return(
        <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
           <img src={NetFlixLogo} alt="logo" className="w-50"/>
           {
            <div className="flex p-2">
            <img src={LogOutLogo} alt="logo" className="w-12 h-12 m-2"/>
            <button className="font-bold text-white" onClick={handleClick}>Sign Out</button>
           </div>
           }
        </div>
    )
}

export default Header