import NetFlixLogo from "../../public/NetFlix_Logo.png"

const Header=()=>{
    return(
        <div className="absolute bg-gradient-to-b from-black z-10">
           <img src={NetFlixLogo} alt="logo" className="mx-35 p-2 w-50"/>
        </div>
    )
}

export default Header