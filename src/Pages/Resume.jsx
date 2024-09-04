import React from "react";
import ResumeNav from "../Components/ResumeNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Education from "./Education";

const Resume = () => {
  return (
    <section
      id="resume"
      className="h-cover ml-[102px] w-[94%] bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#FFFFFF] pl-16"
    >
      <div>
        <div className="mb-10 flex justify-end">
          <img className="w-32" src="../../public/images/bell.webp" alt="" />
        </div>
        <div className="h-cover relative w-full bg-gradient-to-r from-[#FBF7E5] via-[#F3F6F3] to-[#FBFEFF] font-Trebuchet">
          <BrowserRouter>
            <div className="absolute right-0 top-[-30px] mx-auto h-20 w-[90%] rounded-full bg-white">
              <ResumeNav />
            </div>
            <div className="px-32 py-32">
              <Routes>
                <Route path="/" element={<Experiences />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/education" element={<Education />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </section>
  );
};

export default Resume;
