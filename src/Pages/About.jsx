import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="h-cover ml-[102px] w-[94%] bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#FFFFFF] pl-16"
    >
      <div className="pt-48 font-Trebuchet">
        <h3 className="mb-6 text-center">
          <span className="bg-gradient-to-r from-[#22A6E7] via-[#8E569E] to-[#FF014F] bg-clip-text font-Trebuchet text-2xl font-bold text-transparent">
            ABOUT ME
          </span>
        </h3>
        <h2 className="relative text-center text-5xl font-extrabold text-[#040836]">
          I can develop that help people
        </h2>

        <p className="mt-10 text-justify text-xl text-slate-500">
          Experienced Frontend Developer with a strong background in creating
          responsive and user-friendly web applications. Proven success in
          optimizing website performance, developing intuitive user interfaces,
          and collaborating with crossfunctional teams to drive project success.
          Skilled in HTML, CSS, JavaScript, and modern frameworks like React ,
          Bootstrap5 & TaIlwind CSS. Excellent problem-solving and communication
          skills. Committed to delivering high-quality code and enhancing user
          experience to achieve organizational goals and foster innovation.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-10">
          <div className="flex items-center justify-center gap-x-10">
            <div className="text-[100px]">
              <FaLaptopCode className="rounded-full bg-[#21759B] p-4 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Frontend Developer</h2>
              <p className="mt-2 text-xl font-bold text-slate-500">
                1.5+ Years of Experiences
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-10">
            <div className="text-[100px]">
              <FaHtml5 className="rounded-full bg-[#DD4B25] p-4 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Experienced HTML Developer</h2>
              <p className="mt-2 text-xl font-bold text-slate-500">
                Level Two Seller - Fiverr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
