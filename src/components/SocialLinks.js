import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
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
      className=" hidden md:flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        <li
          className="flex justify-between text-white items-center w-40 h-14 px-4   bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300 rounded-tr-md
         hover:rounded-br-md "
        >
          <a
            href="https://github.com/lakshitaa1809"
            className="flex justify-between items-center w-full  "
          >
            <>
              GitHub
              <FaGithub size={30} />
            </>
          </a>
        </li>

        <li
          className="flex justify-between text-white items-center w-40 h-14 px-4   bg-blue-600 ml-[-100px] hover:ml-[-10px] 
           hover:rounded-tr-md  hover:rounded-br-mdduration-300
       "
        >
          <a
            href="https://www.linkedin.com/"
            className="flex justify-between items-center w-full "
          >
            <>
              LinkedIn
              <FaLinkedin size={30} />
            </>
          </a>
        </li>

        <li
          className="flex justify-between text-white items-center w-40 h-14 px-4   bg-blue-600 ml-[-100px] hover:ml-[-10px] 
        hover:rounded-tr-md  hover:rounded-br-md
        duration-300 "
        >
          <a
            href="mailto:tsaranya03@gmail.com"
            className="flex justify-between items-center w-full  "
          >
            <>
              Mail
              <HiOutlineMail size={30} />
            </>
          </a>
        </li>

        <li
          className="flex justify-between text-white items-center w-40 h-14 px-4   bg-blue-600 
        rounded-br-md ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-tr-md  "
        >
          <a
            href="/FullStack Resume_Saranya.pdf"
            className="flex justify-between items-center w-full  "
            download="Saranya Resume"
            target="-blank"
          >
            {" "}
            <>
              Resume
              <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
