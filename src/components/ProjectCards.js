import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCards = ({ title, des, src, view, live }) => {
  return (
    <div className="w-full p-4 ml-[20px]  rounded-lg shadow-shadowOne flex flex-row">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-1/2 h-60  ml-[20px] object-cover  b hover:scale-110 duration-300 cursor-pointer rounded-lg "
          src={src}
          alt="src"
        />
      </div>
      <div className="w-1/2  mt-[8px] ml-[-400px] mr-[75px] flex flex-col mt-[-45px] hover:scale-110 duration-300 cursor-pointer">
        <div>
          <div className="flex  items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={view}
                className="text-lg w-10 h-10 rounded-full bg-red-600 inline-flex justify-center items-center  hover:text-designColor duration-300 hover:bg-white cursor-pointer"
              >
                <BsGithub />
              </a>
              <a
                href={live}
                className="text-lg w-10 h-10 rounded-full bg-red-600 inline-flex justify-center items-center  hover:text-designColor duration-300 hover:bg-white cursor-pointer"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 justify-between">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
