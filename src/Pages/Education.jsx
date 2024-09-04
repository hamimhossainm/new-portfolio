import React from "react";
import expItem from "../Components/ExperienceItem";
import eduItem from "../Components/EducationItem";

const Education = () => {
  return (
    <div className="flex items-center justify-center gap-x-32">
      <div className="w-[40%]">
        <div className="bg-transparent p-6">
          {expItem.map((item) => (
            <div key={item.id} className="relative mb-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#FF014F]"></div>
              <div className="absolute left-[-6px] top-0 h-1 w-3 rounded-full bg-[#FF014F] p-2"></div>
              <div className="ml-8 border-l-2 border-transparent pl-4">
                <div className="mb-4">
                  <h3 className="mb-3 text-2xl font-bold">{item.desig}</h3>
                  <p className="mb-6 text-[18px] font-bold text-gray-600">
                    {item.office}
                  </p>
                  <span className="inline-block bg-[#FF014F] px-3 py-1 text-xl font-bold text-white">
                    {item.time}
                  </span>
                </div>
                <p className="text-[18px] text-gray-500">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[40%]">
        <div className="bg-transparent p-6">
          {eduItem.map((item) => (
            <div key={item.id} className="relative mb-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#FF014F]"></div>
              <div className="absolute left-[-6px] top-0 h-1 w-3 rounded-full bg-[#FF014F] p-2"></div>
              <div className="ml-8 border-l-2 border-transparent pl-4">
                <div className="mb-4">
                  <h3 className="mb-3 text-2xl font-bold">{item.desig}</h3>
                  <p className="mb-6 text-[18px] font-bold text-gray-600">
                    {item.office}
                  </p>
                  <span className="inline-block bg-[#FF014F] px-3 py-1 text-xl font-bold text-white">
                    {item.time}
                  </span>
                </div>
                <p className="text-[18px] text-gray-500">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
