import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaBan } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showHamburger, setshowHamburger] = useState(true);
  const activeLink = 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  const inActiveLink = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  const linkClass = ({isActive})=> isActive ? activeLink : inActiveLink

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between p-4">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs"/>
              <span className="text-white text-2xl font-bold ml-2">React Jobs</span>
            </NavLink>
            <div className="md:ml-auto hidden md:block">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>
              </div>
            </div>
            <div className="ml-auto flex flex-col md:hidden">
              <button className="text-indigo-500 block" onClick={()=>setshowHamburger((prev)=> !prev)}> {showHamburger ? <FaBars />: <FaBan />} </button>
            </div>
          </div>
        </div>
        {showHamburger ? '' : <div className="flex-col space-x-2 flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
          <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>
        </div>}
        
      </div>
    </nav>
  )
}

export default Navbar