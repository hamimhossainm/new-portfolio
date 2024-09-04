import React from "react";
import { Link } from "react-router-dom";

const ResumeNav = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between">
          <Link
            className="ml-5 mr-5 mt-2 px-20 py-4 text-xl font-bold transition-all duration-500 ease-in-out hover:rounded-full hover:bg-[#040836] hover:text-white"
            to="/"
          >
            EXPERIENCES
          </Link>
          <Link
            className="ml-5 mr-5 mt-2 px-20 py-4 text-xl font-bold transition-all duration-500 ease-in-out hover:rounded-full hover:bg-[#040836] hover:text-white"
            to="/skills"
          >
            SKILLS
          </Link>
          <Link
            className="ml-5 mr-5 mt-2 px-20 py-4 text-xl font-bold transition-all duration-500 ease-in-out hover:rounded-full hover:bg-[#040836] hover:text-white"
            to="/education"
          >
            EDUCATION
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ResumeNav;
