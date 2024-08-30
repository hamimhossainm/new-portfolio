import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="h-cover ml-[102px] w-[94%] bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#F4FDFF] pl-16"
    >
      <div className="bg-gradient-to-r from-[#FBF6E6] via-[#F3F6F3] to-[#FAF5F6] px-4 py-20 font-Trebuchet">
        <h3 className="mb-6 text-center">
          <span className="bg-gradient-to-r from-[#22A6E7] via-[#8E569E] to-[#FF014F] bg-clip-text text-2xl font-bold text-transparent">
            MY EXPERTISE
          </span>
        </h3>
        <h2 className="relative text-center text-5xl font-extrabold text-[#040836]">
          What I Do
        </h2>
        <div className="mt-10 flex h-[600px] w-full gap-x-10 px-10">
          <div className="h-[570px] w-3/4 border-r-[1px] border-slate-200 bg-transparent px-5 py-5 shadow-xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/1.webp" alt="1" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              Web Design
            </h3>
            <p className="text-justify text-slate-500">
              As a web designer, I am responsible for creating visually
              appealing and user-friendly website designs. I conceptualize
              ideas, design layouts, ensure responsive design, and collaborate
              with developers. Maintaining consistency and incorporating client
              feedback are key tasks, along with staying updated on design
              trends, testing for functionality, and managing project timelines
              efficiently. I also handle adjustments and revisions to meet
              evolving project requirements.
            </p>
          </div>

          <div className="h-[570px] w-3/4 border-r-[1px] border-slate-200 bg-transparent px-5 py-5 shadow-xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/2.webp" alt="1" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              Web Development
            </h3>
            <p className="text-justify text-slate-500">
              Responsible for building and maintaining functional websites, I
              focus on writing clean, efficient code, developing responsive
              layouts, and integrating front-end and back-end systems. Key tasks
              include debugging and testing for functionality, optimizing site
              performance, collaborating with designers, ensuring cross-browser
              compatibility, and staying updated on the latest technologies and
              best practices.
            </p>
          </div>

          <div className="h-[570px] w-3/4 border-r-[1px] border-slate-200 bg-transparent px-5 py-5 shadow-xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/4.webp" alt="4" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              UI/UX Designer
            </h3>
            <p className="text-justify text-slate-500">
              I am responsible for crafting intuitive and engaging user
              interfaces as a UI/UX designer. My key tasks include conducting
              user research, creating wireframes and prototypes, designing
              visually appealing interfaces, and ensuring seamless user
              experiences. I collaborate with developers, gather and implement
              user feedback, and stay updated on design trends to optimize both
              the look and functionality of digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
