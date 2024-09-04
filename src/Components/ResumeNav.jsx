import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const linkClass =
    "ml-5 mr-5 mt-2 px-20 py-4 text-xl font-bold transition-all duration-500 ease-in-out hover:rounded-full hover:bg-[#040836] hover:text-white";

  const activeClass = "rounded-full bg-[#040836] text-white";

  return (
    <nav className="flex items-center justify-between">
      <Link
        className={`${linkClass} ${activeLink === "/" ? activeClass : ""}`}
        to="/"
        onClick={() => setActiveLink("/")}
      >
        BIOGRAPHY
      </Link>
      <Link
        className={`${linkClass} ${activeLink === "/skills" ? activeClass : ""}`}
        to="/skills"
        onClick={() => setActiveLink("/skills")}
      >
        SKILLS
      </Link>
      <Link
        className={`${linkClass} ${activeLink === "/education" ? activeClass : ""}`}
        to="/education"
        onClick={() => setActiveLink("/education")}
      >
        WORK & EDUCATION
      </Link>
    </nav>
  );
};

export default Navbar;
