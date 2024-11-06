import { FiBookOpen } from "react-icons/fi"
import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import { useAuth } from "../hooks"
import { FaRegEdit } from "react-icons/fa"

const AppBar = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div className="flex justify-between w-full py-5 border-b-2 bg-white fixed z-50 px-5 sm:px-10">
      <div className="flex">
        <Link to={'/'} className="flex items-center text-xl text-center ">
          <div className="text-lg mt-0.5 mx-1 text-purple-700"><FiBookOpen /></div> QuickReads
        </Link>
        <div className="hidden sm:flex justify-evenly items-center ">
          {/* <span>Home</span>
          <span>Explore</span> */}
          <a href="/publish" className="mx-10 flex items-center text-xl"><FaRegEdit /><span className="mx-2 text-lg ">Write</span></a> 
        </div>
      </div>
      {!isAuthenticated && <div className="flex justify-around">
        <button className=" hidden sm:block text-black font-semibold px-4 py-2 rounded-md mx-2" >Sign in</button>
        <button className="hidden sm:block bg-gray-800 text-white font-semibold px-4 py-2 rounded-md mx-2" >Sign up</button>
      </div>}
      {isAuthenticated && <Avatar name="Parikshit" size="big" />}

    </div>
  )
}

export default AppBar