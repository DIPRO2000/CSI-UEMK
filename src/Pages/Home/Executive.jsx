import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Postbtn from "../../components/UI/Postbtn";
import img1 from "../../assets/img1.jpeg";   //PRIYANSHU
import img2 from "../../assets/img2.jpg";   //DIPRO
import img3 from "../../assets/img3.jpg";   //IPSITA
import img4 from "../../assets/img4.jpg";   //UJJAN
import img5 from "../../assets/img5.jpg";   //Manjima
import img6 from "../../assets/img6.jpg";   //DEEPJYOTI
import img7 from "../../assets/img7.png";   //Mehul
import img8 from "../../assets/img8.jpg";   //Priyabrata
import img9 from "../../assets/img9.jpeg";  //Jojo
import img10 from "../../assets/img10.png"; //Madhuparna
import img11 from "../../assets/img11.png"; //Anwesha
import img12 from "../../assets/img12.jpg"; //Ankita
import img13 from "../../assets/img13.jpg"; //subhojit
import skm from "../../assets/Faculty/skm.jpg"; //SKM Sir
import sm from "../../assets/Faculty/sm.jpg";   //Aniruddha Sir
import ad from "../../assets/Faculty/aniruddha.jpeg";  //Sanjukta Ma'am

const Executive = () => {
  const members = [
    { name: "Sudipto Kar Mondal", img: skm, designation: "Faculty Co-Ordinator"},
    { name: "Aniruddha Das", img: ad, designation: "Faculty Co-Ordinator" },
    { name: "Sanjukta Mishra", img: sm, designation: "Faculty Co-Ordinator" },
    { name: "Priyanshu", img: img1, designation: "President" },
    { name: "Manjima Dutta", img: img5, designation: "Vice President" },
    { name: "Priyabrata Choudhury", img: img8, designation: "Manager" },
    { name: "Ipshita Das", img: img3, designation: "Manager" },
    { name: "Diprajit Chakraborty", img: img2, designation: "Event Co-ordinator and Web-Dev" },
    { name: "Ujan Sarkar", img: img4, designation: "Event Co-ordinator" },
    { name: "Anwesha Sinha", img: img11, designation: "Event Co-ordinator" },
    { name: "Mehul Bhattacharji", img: img7, designation: "Content" },
    { name: "Madhuparna Das", img: img10, designation: "Content" },
    { name: "Deepjyoti Bhattacharya", img: img6, designation: "Graphics" },
    { name: "Subhojit", img: img13, designation: "Graphics" },
    { name: "Ankita Chakraborty", img: img12, designation: "Finance" },
    { name: "Samaraho Mukherjee", img: img9, designation: "Web-Dev" },
  ];

  const [innerWidth,setInnerWidth]=useState(1205);

  const sizeHandler=()=>{
      setInnerWidth(window.innerWidth);
  }

  // Group members into pairs for the slider
  const groupedMembers = [];
  for (let i = 0; i < members.length; i += 2) {
    groupedMembers.push(members.slice(i, i + 2));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + groupedMembers.length) % groupedMembers.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(()=>{
    window.addEventListener("resize", sizeHandler);
    return () => window.removeEventListener("resize", sizeHandler);
  },[]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')] bg-cover h-screen bg-no-repeat">
      <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white" >EXECUTIVE BOARD</h1>

      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedMembers.map((pair, index) => (
            <div key={index} className="flex w-full justify-around items-center flex-shrink-0">
              {pair.map((member, idx) => (
                <div key={idx} className="text-center flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                  />
                  <h3 className="text-white font-bold">{member.name}</h3>
                  <span className="text-gray-300 font-extrabold">{member.designation}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`absolute ${innerWidth < 470 ? "hidden" : ""}  top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-105`}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className={`absolute ${innerWidth < 470 ? "hidden" : ""} top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-105`}
        >
          &#10095;
        </button>
      </div>

      <div className="py-10"><NavLink to="/team"><Postbtn text={"SEE TEAM"}/></NavLink></div>
    </div>
  );
};

export default Executive;
