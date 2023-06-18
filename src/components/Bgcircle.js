import React from "react";
import { motion } from "framer-motion";
const Bgcircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 1, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className=" relative p-5 top-30 flex justify-center items-center"
    >
      <div className=" absolute border border-red-500 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className=" absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 " />
      <div className=" absolute border border-red-500 rounded-full h-[400px] w-[400px] mt-52 " />
      <div className="  absolute rounded-full border border-yellow-500  h-[500px] w-[500px]  mt-52 opacity-20 animate-pulse" />
      <div className="  absolute rounded-full border border-red-500 h-[600px] w-[600px]  mt-52 " />
    </motion.div>
  );
};

export default Bgcircle;
