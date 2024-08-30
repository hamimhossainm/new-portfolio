import React, { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [hoverdId, sethoverdId] = useState(null);
  return (
    <nav>
      <div className="fixed flex h-screen w-[8%] justify-center bg-[#FFFFFF] shadow-lg shadow-slate-200/50">
        <div className="grid w-full grid-rows-7 place-items-center border-b-[2px] border-slate-700">
          <p className="flex h-full w-full items-center justify-center bg-[#FF014F] font-Trebuchet text-3xl text-white">
            H
          </p>

          {NavItems.map((item) => (
            <div
              key={item.id}
              className="flex h-full w-full items-center justify-center border-b-[1px] border-slate-300 hover:text-[#FF014F]"
              onMouseEnter={() => sethoverdId(item.id)}
              onMouseLeave={() => sethoverdId(null)}
            >
              <a
                className="relative flex items-center justify-center"
                href={item.idConnect}
              >
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
                    {item.name}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
