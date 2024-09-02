import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="ml-[102px] w-screen bg-gradient-to-r from-[#FDF1BF] via-[#E1EBE0] to-[#F4FDFF] pl-16"
    >
      <div className="h-cover shadow-right w-[90%] bg-gradient-to-r from-[#FBF6E6] via-[#F3F6F3] to-[#F2FBFC] px-4 pt-20 font-Trebuchet">
        <h3 className="mb-6 text-center">
          <span className="bg-gradient-to-r from-[#22A6E7] via-[#8E569E] to-[#FF014F] bg-clip-text font-Trebuchet text-2xl font-bold text-transparent">
            MY EXPERTISE
          </span>
        </h3>
        <h2 className="relative text-center text-5xl font-extrabold text-[#040836]">
          What I Do
        </h2>
        <div className="relative mt-10 flex h-[600px] w-full gap-x-10 px-10">
          <div className="h-[450px] w-3/4 cursor-pointer border-r-[1px] border-slate-200 bg-transparent px-5 py-5 hover:shadow-2xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/1.webp" alt="1" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              Web Design
            </h3>
            <p className="text-justify text-slate-500">
              As a web designer, I create visually appealing, user-friendly
              website designs, ensuring responsive layouts, consistency, and
              functionality while collaborating with developers and
              incorporating client feedback.
            </p>
          </div>

          <div className="h-[450px] w-3/4 cursor-pointer border-r-[1px] border-slate-200 bg-transparent px-5 py-5 hover:shadow-2xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/2.webp" alt="1" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              Web Development
            </h3>
            <p className="text-justify text-slate-500">
              I build and maintain functional websites by writing clean,
              efficient code, developing responsive layouts, integrating
              systems, and ensuring cross-browser compatibility while optimizing
              performance and staying updated on the latest technologies.
            </p>
          </div>

          <div className="h-[450px] w-3/4 cursor-pointer bg-transparent px-5 py-5 hover:shadow-2xl">
            <div className="h-32">
              <img className="w-20" src="../../public/images/4.webp" alt="4" />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-[#040836]">
              UI/UX Designer
            </h3>
            <p className="text-justify text-slate-500">
              As a UI/UX designer, I craft intuitive, engaging user interfaces
              by conducting research, creating prototypes, and ensuring seamless
              experiences, while collaborating with developers and staying
              updated on design trends.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 top-[580px]">
            <img className="w-52" src="../../public/images/arrow.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
