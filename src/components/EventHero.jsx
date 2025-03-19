import React, { useState, useEffect } from "react";
import web_banner from "../assets/Posters/websitebanner.png";
import web_banner_mobile from "../assets/Posters/websitebannermobile.png";
import Countdown from "./Countdown/Countdown";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const EventHero = () => {
  const [bgImage, setBgImage] = useState(web_banner);
  const [bgPosition, setBgPosition] = useState("center bottom"); // Default for PC

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(web_banner_mobile);
        setBgPosition("right center"); // Shift right for mobile
      } else {
        setBgImage(web_banner);
        setBgPosition("center bottom"); // Shift bottom for PC
      }
    };

    handleResize(); // Set on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative bg-fixed bg-no-repeat h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: bgPosition
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        <div className="relative my-10 sm:scale-150">
          <div className="absolute inset-0 bg-blue-950 opacity-35 rounded-2xl"></div>
          <Countdown />
        </div>
        <div className="sm:mt-10">
          <Link to="https://forms.gle/rJb1S3RJsLHPzJ139">
            <Button btn={"REGISTER"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
