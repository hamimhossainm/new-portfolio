import React from "react";
import skillsItemsOne from "../Components/SkillItemOne";
import skillsItemsTwo from "../Components/SkillItemTwo";

const Skills = () => {
  return (
    <div className="flex items-center justify-center gap-x-20">
      <div className="w-[40%]">
        {skillsItemsOne.map((item) => (
          <div key={item.id} className="flex items-center gap-x-10">
            <div>
              <img className="w-20" src={item.image} alt="" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-xl text-slate-400">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[40%]">
        {skillsItemsTwo.map((item) => (
          <div key={item.id} className="flex items-center gap-x-10">
            <div>
              <img className="w-20" src={item.image} alt="" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-xl text-slate-400">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
