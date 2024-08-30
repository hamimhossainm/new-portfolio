import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="#"
      className="h-cover ml-[102px] w-[94%] bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#F4FDFF]"
    >
      <h1 className="text-stroke z-0">Welcome</h1>
      <h2 className="relative bottom-24 z-10 ml-10 font-Trebuchet text-[80px] font-extrabold">
        I'm Hamim
      </h2>
      <TypeAnimation
        className="relative bottom-28 left-16 font-Trebuchet"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Frontend Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "UI - UX Designer",
          1000,
          "React Developer",
          1000,
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Home;
