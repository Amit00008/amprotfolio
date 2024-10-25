import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import {
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const Toast = () => {
    toast("Hi There, I am Amit");
  };

  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-8 py-6 bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-70 shadow-lg fixed w-full z-10 md:px-20 backdrop-blur-md">
      <button
        onClick={Toast}
        className="text-2xl font-bold tracking-wide text-white border-none hover:text-blue-400 hover:bg-black hover:shadow-lg transition duration-300"
      >
        Amit
      </button>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-auto p-y2 mt-4 font-semibold md:mt-0 bg-black px-4 rounded-xl bg-opacity-80 md:bg-transparent md:static md:flex gap-8 transition-all duration-300`}
      >
        
        <a href="#About">
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 flex items-center gap-2">
            <FaUser /> About
          </li>
        </a>

       
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 flex items-center gap-2">
            <FaBriefcase /> Experience
          </li>
        </a>

       
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 flex items-center gap-2">
            <FaProjectDiagram /> Projects
          </li>
        </a>

        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 flex items-center gap-2">
            <FaEnvelope /> Contact
          </li>
        </a>
      </ul>

      {/* Mobile Menu Icons */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-8 top-6 transition-all duration-300 text-white"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-8 top-6 transition-all duration-300 text-white"
          onClick={() => {
            setShowmenu(!showMenu);
            openMenu(!menu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
