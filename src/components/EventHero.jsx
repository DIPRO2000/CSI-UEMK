import React from "react";
import bg_pic from "../assets/background_pic.jpg";
import web_banner from "../assets/Posters/websitebanner.png"
import Countdown from "./Countdown/Countdown";
import Button from "./UI/Button";
import { Link } from "react-router-dom";


const EventHero = () => {
  return (
    <div
      className="relative  bg-center bg-fixed bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${web_banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        <div className="relative my-10 sm:scale-150">
            <div className="absolute inset-0 bg-blue-950 opacity-35 rounded-2xl"></div>
            <Countdown/>
        </div>
        <div className="sm:mt-10">
        <Link to="https://forms.gle/rJb1S3RJsLHPzJ139"><Button btn={"REGISTER"}/></Link>
        </div>
      </div>
    </div>
  );
};

export default EventHero;