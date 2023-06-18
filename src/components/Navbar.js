import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full text-white bg-blue-600 fixed h-12 p-4 ">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center px-20"
      >
        <img
          className="flex items-center
         w-10 h-10 rounded-full"
          src="https://res.cloudinary.com/dehghhzey/image/upload/v1680547598/logo_nxh6go.jpg"
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className=" hidden md:flex flex-column items-center "
      >
        <ul className="px-4 relative right-16 flex flex-row ">
          <li className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200">
            <Link to="Home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200">
            <Link to="About" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200">
            <Link to="Projects" smooth duration={500}>
              Projects
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200">
            <Link to="Skills" smooth duration={500}>
              Skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200">
            <Link to="Contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-black bg-gradient-to-b from-blue to gray-800 text-gray-500 ">
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link to="Home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link to="About" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link to="Projects" smooth duration={500}>
              Projects
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link to="Skills" smooth duration={500}>
              Skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link to="Contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
