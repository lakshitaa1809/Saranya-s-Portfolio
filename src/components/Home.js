import React from "react";
import Bgcircle from "./Bgcircle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// eslint - disable - next - line
const Home = () => {
  const [text] = useTypewriter({
    words: ["Hi 👋🏼", "I am Saranya"],
    loop: true,
    delaySpeed: 2000,
  });
  const [text1] = useTypewriter({
    words: [" passionate about creating interactive applications on web."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div name="Home" className="w-full h-screen p-4 text-blue-500">
      <div className="relative top-40  h-screen  flex flex-col items-center justify-center text-center  ">
        <Bgcircle />
        <div className=" relative  flex justify-center items-center ">
          <h1 className="text-4xl  text-blue-600  ">
            <span>{text}</span>
            <Cursor cursorColor="white" />
          </h1>
        </div>
        <div className=" relative  flex justify-center items-center ">
          <img
            className="relative  items-center rounded-full w-36 h-36 object-cover  "
            src="https://res.cloudinary.com/dehghhzey/image/upload/v1680812766/photo_xmvyhr.jpg"
            alt="source"
          />
        </div>
        <h2 className=" text-2xl ml-3 mt-10  uppercase text-blue-600 tracking-[11px]">
          full stack developer
        </h2>
        <h1 className="text-sm pt-10 text-blue-600 ">
          <span className=" ">{text1}</span>
          <Cursor cursorColor="white" />
        </h1>
      </div>
    </div>
  );
};

export default Home;
