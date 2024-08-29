import React, { useState } from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoverdId, sethoverdId] = useState(null);
  return (
    <div className="flex h-screen w-[9%] justify-center bg-[#FFFFFF] shadow-lg shadow-slate-200/50">
      <div className="grid w-full grid-rows-7 place-items-center">
        <p className="font-Trebuchet flex h-full w-full items-center justify-center border-b-[1px] border-slate-300 bg-[#FF014F] text-3xl text-white">
          Logo
        </p>

        {NavItems.map((item) => (
          <Link to={item.link}>
            <div
              key={item.id}
              className="flex h-full w-full items-center justify-center border-b-[1px] border-slate-300 hover:text-[#FF014F]"
              onMouseEnter={() => sethoverdId(item.id)}
              onMouseLeave={() => sethoverdId(null)}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute transform transition-all duration-500 ease-in-out ${
                    hoverdId === item.id
                      ? "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {<item.icon className="text-3xl" />}
                </div>
                <div
                  className={`absolute transform transition-all duration-500 ease-in-out ${
                    hoverdId === item.id
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <span className="font-Trebuchet text-[16px] font-bold">
                    <a href={item.idConnect}>{item.name}</a>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
