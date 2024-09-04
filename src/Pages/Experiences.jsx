import React from "react";

const Experiences = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%]">
        <div className="flex">
          <p>Name</p>
          <p className="text-">Hamim Hossain</p>
        </div>
        <div className="flex">
          <p>Age</p>
          <p className="text-">27</p>
        </div>
        <div className="flex">
          <p>Email</p>
          <p className="text-">hamimhossain.inbox@outlook.com</p>
        </div>
        <div className="flex">
          <p>WhatsApp</p>
          <p className="text-">+8801904486467</p>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="flex">
          <p>Birthday</p>
          <p className="text-">23 August,1997</p>
        </div>
        <div className="flex">
          <p>Address</p>
          <p className="text-">Mirpur DOHS, Dhaka</p>
        </div>
        <div className="flex">
          <p>Phone</p>
          <p className="text-">+8801842685145</p>
        </div>
        <div className="flex">
          <p>Freelance</p>
          <p className="text-">Available</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
