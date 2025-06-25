import React, { useState, useEffect } from "react";
import web_banner from "../assets/Posters/HackBerryPiLargeScreen.jpg";
import web_banner_mobile from "../assets/Posters/HackBerryPiMobileScreen.jpg";
import Countdown from "./Countdown/Countdown";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import Postbtn from "./UI/Postbtn";

const EventHero = ({ eventsRef }) => {
  const [bgImage, setBgImage] = useState(web_banner);
  const [bgPosition, setBgPosition] = useState("center bottom"); // Default for PC

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(web_banner_mobile);
        // setBgPosition("top center"); // Shift right for mobile
      } else {
        setBgImage(web_banner);
        setBgPosition("center"); // Shift bottom for PC
      }
    };

    handleResize(); // Set on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToEvents = () => {
    if (eventsRef?.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-fixed bg-no-repeat h-screen flex items-center justify-center bg-center"
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
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScrDiiwDfUMUdgAhCjvOcI-8NdKZOSricKs4ogVTPBk5zkL7Q/viewform">
            <Button btn={"REGISTER"} />
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <Postbtn text={"VIEW DETAILS"} onClick={handleScrollToEvents} />
        </div>
      </div>
    </div>
  );
};

export default EventHero;

