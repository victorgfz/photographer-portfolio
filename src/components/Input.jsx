import React from "react";

const Input = ({ type, placeholder, id, name }) => {
  return (
    <input
      className={`text-[#111] font-light outline-none p-2 relative border-b-[1px] border-[#111] w-full ${
        id !== "message" ? "md:flex-1 mb-5" : "mb-[64px]"
      }`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default Input;
