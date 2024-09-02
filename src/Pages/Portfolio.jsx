import React from "react";
import CountUp from "react-countup";
import ProjectSlider from "../Components/ProjectSlider";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="h-cover ml-[102px] box-border w-screen bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#F4FDFF] pl-16"
    >
      <div className="w-full pt-20">
        <h2 className="font-Trebuchet text-2xl font-extrabold text-[#FF014F]">
          /
        </h2>
        <h3>
          <span className="bg-gradient-to-r from-[#22A6E7] via-[#8E569E] to-[#FF014F] bg-clip-text font-Trebuchet text-2xl font-bold uppercase text-transparent">
            Recent Work
          </span>
        </h3>

        <div className="mt-5 flex w-full gap-x-20 pb-24">
          <h2 className="font-Trebuchet text-4xl font-extrabold">
            Look at my recent projects <br /> and give me your feedback
          </h2>
          <div className="font-Trebuchet">
            <h2 className="mb-1 text-center text-5xl font-extrabold">
              <CountUp start={0} end={18} duration={5}></CountUp>+
            </h2>
            <p className="font-bold text-slate-500">Completed Project</p>
          </div>
          <div className="font-Trebuchet">
            <h2 className="mb-1 text-center text-5xl font-extrabold">
              <CountUp start={70} end={95}></CountUp>%
            </h2>
            <p className="font-bold text-slate-500">Positive Rating</p>
          </div>
        </div>
        <div>
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
