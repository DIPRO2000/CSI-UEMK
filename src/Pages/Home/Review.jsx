import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Postbtn from "../../components/UI/Postbtn";
import img1 from "../../assets/Review/img1.jpg";
import img2 from "../../assets/Review/img2.jpg";
import img3 from "../../assets/Review/img3.jpg";

const Review = () => {
  const members = [
    { name: "Nivedita Sen", img: img1, designation: "PySprint Winner" },
    { name: "Shlok Gupta", img: img2, designation: "PySprint 1st Runner up" },
    { name: "Swaraj De", img: img3, designation: "PySprint 2nd Runner up" },
  ];

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  // Update the width on resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group members into pairs or singles based on window size
  const groupedMembers = [];

  const groupSize = innerWidth < 470 ? 1 : 2;

  for (let i = 0; i < members.length; i += groupSize) {
    groupedMembers.push(members.slice(i, i + groupSize)); 
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % groupedMembers.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + groupedMembers.length) % groupedMembers.length
    );
  };

  // Automatic slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://i.imgur.com/3dYZjZn.jpeg')] bg-cover h-screen bg-no-repeat">
      <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white">
        WORD OF MOUTH
      </h1>

      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedMembers.map((pair, index) => (
            <div
              key={index}
              className="flex w-full justify-around items-center flex-shrink-0"
            >
              {pair.map((member, idx) => (
                <div key={idx} className="text-center flex flex-col items-center">
                   <img
                    src={member.img}
                    alt={member.name}
                    className="w-[170px] h-[170px] object-cover rounded-lg"
                   />
                   <h3 className="text-white font-bold">{member.name}</h3>
                   <span className="text-gray-300 font-extrabold">
                     {member.designation}
                   </span>
                 </div>
               ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`absolute ${
            innerWidth < 470 ? "hidden" : ""
          } top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-105`}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className={`absolute ${
            innerWidth < 470 ? "hidden" : ""
          } top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-105`}
        >
          &#10095;
        </button>
      </div>

      <div className="py-10">
        <NavLink to="/review">
          <Postbtn text={"SEE OUR WINNERS"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Review;
