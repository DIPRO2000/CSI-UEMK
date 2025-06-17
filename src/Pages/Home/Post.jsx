import React, { useState, useEffect } from "react";
import Postbtn from "../../components/UI/Postbtn";
import { NavLink } from "react-router-dom";
import img1 from  "../../assets/gallery/img10.jpg";
import img2 from  "../../assets/gallery/img14.jpg";
import img3 from  "../../assets/gallery/img13.jpg";
import img4 from  "../../assets/gallery/img27.jpg";
import img5 from  "../../assets/gallery/img25.jpg";
import img6 from  "../../assets/gallery/img26.jpg";
import img7 from  "../../assets/gallery/img19.jpg";

const Post = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2); // Default to 2 images per slide

  // Function to check screen size and update slidesPerView
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Show 1 image on mobile
      } else {
        setSlidesPerView(2); // Show 2 images on larger screens
      }
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for screen resizing

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    if (currentIndex >= images.length - slidesPerView) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - slidesPerView);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-20 mt-10 mx-20 font-rowdies text-center text-6xl font-bold text-black">Our Recent Posts</h1>

        <div className="relative w-full max-w-4xl overflow-hidden">
          {/* Carousel Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`flex ${slidesPerView === 1 ? "w-full" : "w-1/2"} justify-center items-center flex-shrink-0 px-4`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-[700px] h-[400px] max-w-full max-h-[300px] md:max-h-[500px] sm:max-h-[700px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
          >
            &#10095;
          </button> */}
        </div>

        <div className="my-7"><NavLink to="/gallery"><Postbtn text={"SEE ALL POSTS"}/></NavLink></div>
      </div>
    </>
  );
};

export default Post;
