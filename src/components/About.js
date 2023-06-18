import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen p-6 text-blue-500">
      <div className="mt-[220px] h-screen text-blue-600 w-full h-full ">
        <div className="pb-8 ">
          <h3 className="text-4xl ml-[70px] font-bold inline border-b-4 border-gray-500 ">
            About
          </h3>
        </div>
        <div className="flex flex-row items-center mx-auto px-20">
          <div className="flex flex-col text-justify relative left-[30px] ">
            <p className="text-justify font-semibold text-xl mt-[5px]  ">
              I am Saranya, now, I learned a full stack developer course in
              Skill Safari which helps to refresh my skills after taking some
              time off to provide care to rise of my family. Now I am able to
              build my real time projects, as an experienced education
              professional fond of Motivating, Inspiring, and Supporting Others.
              I have received an award for becoming a department topper because
              of Focusing, when interacting with and getting instructions from
              others.
            </p>
            <br />
            <p className="text-justify font-semibold text-xl ">
              I completed my both UG and PG in Engineering in that secured above
              80 percentages of marks. My short-term goal is to get a job in a
              reputed company, where I can enhance my skills and knowledge. My
              long-term goal is to see myself in a respectable position and
              become a part of the success of the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
