import React from "react";
import ResumeNav from "../Components/ResumeNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Education from "./Education";
import pricing from "../Components/PricingItems";

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
            <div className="px-32 pb-20 pt-32">
              <Routes>
                <Route path="/" element={<Experiences />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/education" element={<Education />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>

        <div className="pt-16 font-Trebuchet">
          <div className="flex w-full items-center justify-between">
            <div className="w-[45%]">
              <h2 className="pb-2 font-Trebuchet text-2xl font-extrabold text-[#FF014F]">
                /
              </h2>
              <h3 className="pb-6">
                <span className="bg-gradient-to-r from-[#22A6E7] via-[#8E569E] to-[#FF014F] bg-clip-text font-Trebuchet text-2xl font-bold text-transparent">
                  Pricing
                </span>
              </h3>
              <h2 className="relative text-5xl font-extrabold text-[#040836]">
                The best pricing plans <br /> to get your best
              </h2>

              <div className="relative mt-32">
                <div className="animate-up-down absolute bottom-0 left-[-120px] w-[340px]">
                  <img src="../../public/images/animated.webp" alt="" />
                </div>

                <h2 className="rounded-full bg-white px-20 py-20 text-4xl font-bold">
                  Save up to{" "}
                  <span className="text-shadow-bottom text-[#FF014F]">50%</span>{" "}
                  with your every order
                </h2>
              </div>
            </div>

            <div className="w-[45%]">
              {pricing.map((item) => (
                <div
                  key={item.id}
                  className="mx-auto mb-10 max-w-sm border-2 border-[#FF014F] bg-white p-6 shadow-md"
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    {item.service}
                  </h2>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-[#FF014F]">✔</span>
                      <span className="text-gray-700">{item.ofOne}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-[#FF014F]">✔</span>
                      <span className="text-gray-700">{item.ofTwo}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-[#FF014F]">✔</span>
                      <span className="text-gray-700">{item.ofThree}</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-gray-900">
                      {item.price}
                    </div>
                    <button className="rounded-lg bg-[#FF014F] px-6 py-2 font-semibold text-white shadow hover:bg-[#040836]">
                      Order Now
                    </button>
                  </div>
                  {/* <div className="mt-4 flex justify-end">
                    <img src={item.icon} alt="" className="w-20" />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
