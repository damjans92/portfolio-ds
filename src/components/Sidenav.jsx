import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import pdf from "../pdf/Damjan Savkovic CV.pdf";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        size={24}
        color={`${nav ? "black" : "white"}`}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 top-0">
          <a
            onClick={handleNav}
            href="#main"
            className={`animate-slidein0 opacity-0 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200`}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#experience"
            className={`animate-slidein100 opacity-0 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200`}
          >
            <GrProjects size={20} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="animate-slidein200 opacity-0 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="animate-slidein300 opacity-0 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="animate-slidein400 opacity-0 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a
              href="#main"
              className="tooltip rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineHome size={20} />
              <div className="tooltiptext bg-gray-100">Home</div>
            </a>
            <a
              href="#experience"
              className="tooltip rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <GrProjects size={20} />
              <div className="tooltiptext bg-gray-100">Experience</div>
            </a>
            <a
              href="#projects"
              className="tooltip rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineProject size={20} />
              <div className="tooltiptext bg-gray-100">Projects</div>
            </a>
            <a
              href={pdf}
              className="tooltip rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <BsPerson size={20} />
              <div className="tooltiptext bg-gray-100">Resume</div>
            </a>
            <a
              href="#contact"
              className="tooltip rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineMail size={20} />
              <div className="tooltiptext bg-gray-100">Contact</div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
