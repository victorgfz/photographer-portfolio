import React from "react";
import { Link } from "react-router-dom";
import PortfolioImg1 from "../assets/portfolio1.jpg";
import PortfolioImg2 from "../assets/portfolio2.jpg";
import PortfolioImg3 from "../assets/portfolio3.jpg";
import PortfolioImg4 from "../assets/portfolio4.jpg";

const Portfolio = () => {
  return (
    <section className="bg-[#111] h-screen w-full overflow-hidden flex justify-center items-center">
      <div className="container px-5 z-10 text-white flex items-center md:items-start flex-col">
        <h1 className="font-alternative uppercase font-bold text-center md:text-left text-[60px] lg:text-[80px] xl:text-[100px] xxl:text-[120px] leading-[60px] lg:leading-[80px] xl:leading-[100px] xxl:leading-[120px] max-w-[300px] md:max-w-full break-words">
          my work
        </h1>
        <p className="font-light text-[16px] md:text-[20px] mb-[36px] text-center md:text-left ">
          A little bit from what I’ve been doing in the last couple months
        </p>
        <Link
          to={"/contact"}
          className="text-[16px] font-light uppercase border-[1px] border-white py-2 px-[36px] hover:text-[#111]
  duration-300 relative before:absolute before:top-0 before:left-0 before:bg-white before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300"
        >
          hire me
        </Link>
      </div>
      <div className="fixed top-0 w-full h-full z-0 flex justify-end">
        <div className="w-full md:w-6/12 grid grid-cols-2 gap-2">
          <div className="overflow-hidden bg-black">
            <img
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src={PortfolioImg1}
              alt=""
            />
          </div>
          <div className="overflow-hidden bg-black">
            <img
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src={PortfolioImg2}
              alt=""
            />
          </div>
          <div className="overflow-hidden bg-black">
            <img
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src={PortfolioImg3}
              alt=""
            />
          </div>
          <div className="overflow-hidden bg-black">
            <img
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src={PortfolioImg4}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
