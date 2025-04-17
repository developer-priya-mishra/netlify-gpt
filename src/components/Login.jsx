import Header from "./Header"
import background_Image from "../../public/background_img.jpg"
import { useState } from "react"

const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={background_Image} alt="logo" />
            </div>
            <form className="absolute p-12 w-4/12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
                <h1 className="text-3xl text-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input name="text" placeholder="Full Name" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />}
                <input name="text" placeholder="Email" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />
                <input name="text" placeholder="Password" className="p-4 my-5  w-full bg-gray-700 rounded-lg" />
                <button className="p-4 my-5  bg-red-500 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Alrady registered? Sign in now."}</p>
            </form>

        </div>
    )
}

export default Login