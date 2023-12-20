import React from "react";
import HomeImg from "../assets/home.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#111] h-screen w-full overflow-hidden flex justify-center items-center">
      <div className="container px-5 z-10 text-white">
        <h1 className="uppercase font-bold text-[120px] leading-[120px] mb-[24px">
          hi, i'm a photographer
        </h1>
        <p className="font-light text-[16px] mb-[36px]">
          from <span className="uppercase font-medium">Dallas, texas</span>
        </p>
        <Link
          to={"/contact"}
          className="text-[16px] font-light uppercase border-[1px] border-white py-2 px-[36px] hover:text-[#111]
        transition-all duration-300 relative before:absolute before:top-0 before:left-0 before:bg-white before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300"
        >
          hire me
        </Link>
      </div>
      <div className="flex fixed top-0 w-full z-0">
        <div className="w-6/12"></div>
        <div className="w-6/12"></div>

        <img
          className="w-full max-h-screen object-cover object-center saturate-0"
          src={HomeImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
