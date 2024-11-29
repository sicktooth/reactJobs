import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaBan } from "react-icons/fa";

const Navbar = () => {
  const [showHamburger, setshowHamburger] = useState(true);

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between p-4">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs"/>
              <span className="text-white text-2xl font-bold ml-2">React Jobs</span>
            </a>
            <div className="md:ml-auto hidden md:block">
              <div className="flex space-x-2">
                <a href="/" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
                <a href="/jobs" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
                <a href="/add-job" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
              </div>
            </div>
            <div className="ml-auto flex flex-col md:hidden">
              <button className="text-indigo-500 block" onClick={()=>setshowHamburger((prev)=> !prev)}> {showHamburger ? <FaBars />: <FaBan />} </button>
            </div>
          </div>
        </div>
        {showHamburger ? '' : <div className="flex-col space-x-2 flex">
          <a href="/" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
          <a href="/jobs" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
          <a href="/add-job" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
        </div>}
        
      </div>
    </nav>
  )
}

export default Navbar