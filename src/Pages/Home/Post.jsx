import React, { useState, useEffect } from "react";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";

const Post = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

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
        <h1 className="text-2xl font-bold mb-4">Our Recent Posts</h1>

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
                  className="w-[500px] h-[500px] max-w-full max-h-[300px] md:max-h-[500px] object-cover rounded-lg"
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

        <div className="py-6 px-6 my-6 inline-block bg-orange-700">SEE ALL POSTS</div>
      </div>
    </>
  );
};

export default Post;
