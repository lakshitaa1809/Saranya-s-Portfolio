import React from "react";
import html from "../Assests/CSS.png";
import css from "../Assests/html.png";
import js from "../Assests/javascript.png";
import react from "../Assests/reactjs.png";
import next from "../Assests/next-js.png";
import tailwindcss from "../Assests/tailwind css.jpg";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: js, title: "JAVASCRIPT", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: next, title: "NEXT js", style: "shadow-white" },
    { id: 6, src: tailwindcss, title: "Tailwind CSS", style: "shadow-sky-400" },
  ];
  return (
    <div name="Skills">
      <div className="bg-gradient-to -b from-gray-800 to -black w-full h- screen  mt-[950px] ">
        <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center  w-full h-full text-blue-500">
          <div className="ml-[-160px]">
            <p className="text-4xl  font-bold inline border-b-4 border-gray-500 ">
              Skills
            </p>
            <p className="py-8">I've worked with these technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
            {skills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" />
                <p className="mt-5 ml-20 ">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
