import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[url('https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-fixed h-screen flex items-center justify-center">
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to CSI</h1>
        <p className="text-xl mt-4">Empowering students with technology</p>
      </div>
    </div>
  );
};

export default Hero;
