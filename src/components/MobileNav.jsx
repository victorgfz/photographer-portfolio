import React from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const MobileNav = ({ value, setValue }) => {
  return (
    <div className="block md:hidden">
      <RiMenu3Fill
        onClick={() => setValue(true)}
        className="block md:hidden text-white text-[28px] cursor-pointer"
      />
      <nav
        className={`fixed ${
          value ? "right-0" : "-right-full"
        } flex duration-300 flex-col top-0 h-screen align-start bg-white gap-5 text-[#111] uppercase font-bold text-[12px] `}
      >
        <Link className="px-2 py-5" to={"/"}>
          Home
        </Link>
        <Link className="px-2 py-5" to={"/about"}>
          About
        </Link>

        <Link className="px-2 py-5" to={"/portfolio"}>
          Portfolio
        </Link>

        <Link className="px-2 py-5" to={"/contact"}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
