import React from "react";
const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen p-4 text-blue-500">
      <div className="flex flex-col p-4 justify-center max-w-screen -lg mx-auto h-full mt-[80px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-[70px]">
            Get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/b0628bb1-1812-485a-918a-147ab187950c"
            method="post"
            className="flex flex-col w-full ml-[-85px] md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-blue-500 to-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
