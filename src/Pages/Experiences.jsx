import React from "react";

const Experiences = () => {
  return (
    <div className="flex items-center justify-center gap-x-20">
      <div className="w-[40%]">
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Name</p>
          <p className="absolute right-0 text-xl text-slate-400">
            Hamim Hossain
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Age</p>
          <p className="absolute right-0 text-xl text-slate-400">27</p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Email</p>
          <p className="absolute right-0 text-xl text-slate-400">
            hamimhossain.inbox@outlook.com
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">WhatsApp</p>
          <p className="absolute right-0 text-xl text-slate-400">
            +8801904-486467
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
      </div>
      <div className="w-[40%]">
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Birthday</p>
          <p className="absolute right-0 text-xl text-slate-400">
            23 August,1997
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Address</p>
          <p className="absolute right-0 text-xl text-slate-400">
            Mirpur DOHS, Dhaka
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Phone</p>
          <p className="absolute right-0 text-xl text-slate-400">
            +8801842-685145
          </p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
        <div className="relative flex">
          <p className="mb-8 text-2xl font-bold">Freelance</p>
          <p className="absolute right-0 text-xl text-slate-400">Available</p>
        </div>
        <hr className="mb-2 border-b-2 text-slate-600" />
      </div>
    </div>
  );
};

export default Experiences;
