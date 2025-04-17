import Header from "./Header"
import background_Image from "../../public/background_img.jpg"

const Login=()=>{
    return(
        <div>
            <Header/>
            <div className="absolute">
                 <img src={background_Image} alt="logo"/>
            </div>
            <form className="relative p-12 bg-blend-hard-light w-70 border border-white ">
                <input name="text" placeholder="Email" className="p-2 m-2 border border-white text-white bg-gray-400"/>
                <input name="text" placeholder="Password" className="p-2 m-2 border border-white text-white bg-gray-400"/>
                <button className="p-2 m-2">Sign In</button>
            </form>
        </div>
    )
}

export default Login