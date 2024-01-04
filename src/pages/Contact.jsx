import React from "react";
import Input from "../components/Input";

const Contact = () => {
  return (
    <section className="bg-[#111] h-screen w-full after:fixed after:bottom-0 after:w-full after:h-3/5 after:bg-white after:z-0 overflow-hidden flex justify-center items-center">
      <div className="container px-5 flex flex-col justify-center items-center z-10">
        <h1 className="font-alternative uppercase font-bold text-white mb-[96px] text-center text-[60px] lg:text-[80px] xl:text-[100px] xxl:text-[120px] leading-[60px] lg:leading-[80px] xl:leading-[100px] xxl:leading-[120px] max-w-[300px] md:max-w-full break-words">
          get in touch
        </h1>
        <form className="flex flex-wrap justify-center gap-5">
          <Input type="text" placeholder="Name" id="name" name="name" />
          <Input type="email" placeholder="Email" id="email" name="email" />
          <Input
            type="text"
            placeholder="Message"
            id="message"
            name="message"
          />
          <button
            className="text-[16px] font-light uppercase border-[1px] border-[#111] py-2 px-[36px] hover:text-white
      duration-300 relative before:absolute before:top-0 before:left-0 before:bg-[#111] before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300 shrink-1"
          >
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
