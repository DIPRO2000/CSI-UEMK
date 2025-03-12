import React from "react";
import bg_pic from "../assets/background_pic.jpg";

const Hero = () => {
  return (
    <div
      className="relative bottom-[97px] bg-cover bg-center bg-fixed h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_pic})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-6xl font-rowdies font-bold">Welcome to CSI</h1>
        <p className="text-xl mt-4">Empowering students with technology</p>
      </div>
    </div>
  );
};

export default Hero;
