import React, { useState } from "react";
import projectsData from "./ProjectsData";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const ProjectSlider = () => {
  const [hoveredId, sethoveredId] = useState(null);

  return (
    <>
      <div className="grid cursor-pointer grid-cols-3 gap-x-8 gap-y-8">
        {projectsData.map((item) => (
          <div
            className="relative"
            onMouseEnter={() => sethoveredId(item.id)}
            onMouseLeave={() => sethoveredId(null)}
          >
            <div>
              <img src={item.image} alt="" />
            </div>

            <div
              className={`absolute bottom-0 flex h-24 w-full items-center justify-center bg-white font-Trebuchet transition-all duration-1000 ease-in-out ${
                hoveredId === item.id
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              <div className="w-[40%]">
                <h3 className="text-xl font-bold text-slate-500">
                  {item.subTitle}
                </h3>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
              <div
                className={`w-[40%] transition-all duration-1000 ease-in-out ${
                  hoveredId === item.id ? "translate-x-20" : "translate-x-0"
                }`}
              >
                <HiMiniArrowSmallRight className="rounded-full border-4 border-slate-900 text-5xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSlider;
