import React from "react";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineCloudDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const Home = () => {
  return (
    <header
      id="home"
      className="h-cover ml-[102px] box-border w-screen bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#F4FDFF] pl-16"
    >
      <div className="flex">
        <div className="w-[52%]">
          <h1 className="text-stroke z-0">Welcome</h1>
          <h2 className="relative bottom-24 z-10 ml-4 font-Trebuchet text-[70px] font-extrabold">
            Hamim Hossain
          </h2>
          <div>
            <TypeAnimation
              className="relative bottom-24 left-16 font-Trebuchet font-bold text-red-700"
              sequence={[
                "Frontend Developer",
                1000,
                "UI - UX Designer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={5}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <div className="mb-5 ml-[145px] flex gap-x-4">
            <a href="https://www.facebook.com/hamim641h" target="_blank">
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/hamim-hossain2308/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/hamimhossainm" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://stackoverflow.com/users/26340791/hamim"
              target="_blank"
            >
              <FaStackOverflow />
            </a>
          </div>
          <div className="z-10 ml-[100px] space-x-6 font-Trebuchet text-xl font-bold text-white">
            <button className="relative rounded-3xl border-2 bg-[#040836] px-8 py-4 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#FF014F] before:transition-transform before:duration-300 before:content-[''] hover:border-2 hover:border-[#040836] hover:bg-transparent hover:text-[#040836] hover:shadow-md hover:shadow-[#040836] hover:transition-all hover:duration-300 hover:ease-in-out before:hover:scale-x-100">
              <a
                className="flex items-center justify-center gap-2"
                href="../../public/Hamim Hossain Resume.pdf"
                target="_blank"
              >
                <MdOutlineCloudDownload /> Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="ml-6 mt-6 flex w-[40%]">
          <div className="">
            <img src="../../public/images/Hamim copy.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
