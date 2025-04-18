import Header from "./Header"
import background_Image from "../../public/background_img.jpg"
import { useRef, useState } from "react"
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true);
    const [errorMsg,setErrorMsg] = useState("");

    const nameRef= useRef(null)
    const emailRef= useRef(null)
    const passwordRef= useRef(null)

    const toggleSignInForm = () =>{
        setSignInForm(!isSignInForm)
    }

    const handleBtnClick = () =>{
        const message = checkValidData(nameRef.current.value,emailRef.current.value,passwordRef.current.value)
        setErrorMsg(message);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={background_Image} alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-4/12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
                <h1 className="text-3xl text-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={nameRef} type="text" placeholder="Full Name" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />}
                <input ref={emailRef} type="text" placeholder="Email" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />
                <input ref={passwordRef} type="password" placeholder="Password" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />
                {errorMsg && <p className="text-red-500 text-lg font-bold ">{errorMsg}</p>}
                <button className="p-4 my-5 cursor-pointer bg-red-500 w-full rounded-lg" onClick={handleBtnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Alrady registered? Sign in now."}</p>
            </form>

        </div>
    )
}

export default Login