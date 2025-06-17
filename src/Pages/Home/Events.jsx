import React, { useState } from "react";
import Poster from "../../components/Poster";
import pysprint from "../../assets/Posters/poster.jpg";
import dsaworkshop from "../../assets/Posters/dsa_poster.jpeg";

const Events = () => {
  // Ongoing events array
  const ongoingEvents = [
    //{ name: "PYSPRINT", text: "DATE: 22nd March,2025", btn: "REGISTER", post: pysprint, link: "https://forms.gle/rJb1S3RJsLHPzJ139" },
    //{ name: "DSA WORKSHOP", text: "DATE: 28th September,2024", btn: "VIEW", post: dsaworkshop, link: "/gallery" }
  ];

  // Past events array
  const pastEvents = [
    { name: "DSA WORKSHOP", text: "DATE: 28th September,2024", btn: "VIEW", post: dsaworkshop, link: "/gallery" },
    { name: "PYSPRINT", text: "DATE: 22nd March,2025", btn: "VIEW", post: pysprint, link: "/gallery" }
  ];

  // Separate state for ongoing and past
  const [currentOngoing, setCurrentOngoing] = useState(0);
  const [currentPast, setCurrentPast] = useState(0);

  // Handlers for ongoing
  const handlePreviousOngoing = () => {
    setCurrentOngoing((prev) => (prev <= 0 ? ongoingEvents.length - 1 : prev - 1)); 
  };
  
  const handleNextOngoing = () => {
    setCurrentOngoing((prev) => (prev >= ongoingEvents.length - 1 ? 0 : prev + 1)); 
  };
  
  // Handlers for past
  const handlePreviousPast = () => {
    setCurrentPast((prev) => (prev <= 0 ? pastEvents.length - 1 : prev - 1)); 
  };
  
  const handleNextPast = () => {
    setCurrentPast((prev) => (prev >= pastEvents.length - 1 ? 0 : prev + 1)); 
  };
  
  return (
    <>
      <div className="relative bg-[url('https://i.imgur.com/3dYZjZn.jpeg')] text-white px-8 py-10">
        {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
        <h1 className="text-6xl font-rowdies py-4 text-center">
          EXPLORE OUR EVENTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Ongoing Section */}
          <div className=" p-4 md:border-r-2 border-white rounded-2xl">
            <h1 className="text-center text-3xl my-10 font-semibold">
              Ongoing Events
            </h1>
            {/* <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
              <Poster
                name={ongoingEvents[currentOngoing].name}
                text={ongoingEvents[currentOngoing].text}
                btn={ongoingEvents[currentOngoing].btn}
                post={ongoingEvents[currentOngoing].post}
                link={ongoingEvents[currentOngoing].link}
              />
            </div> */}
            {/* Previous/Next Buttons */}
            {/* <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePreviousOngoing}
                className="px-4 py-2 bg-gray-700 text-gray-100 font-semibold rounded"
              >
                Previous
              </button>
              <button
                onClick={handleNextOngoing}
                className="px-4 py-2 bg-gray-700 text-gray-100 font-semibold rounded"
              >
                Next
              </button>
            </div> */}
            <div className="flex flex-col justify-center items-center h-36 sm:h-[550px]">
                <span className="text-4xl">COMING SOON</span>
                <span className="text-2xl">STAY TUNNED!!!</span>
            </div>
          </div>

          {/* Past Section */}
          <div className=" p-4 md:border-l-2 border-white rounded-2xl">
            <h1 className="text-center text-3xl my-10 font-semibold">
              Past Events
            </h1>
            <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
              {/* Display only the current poster */}
              <Poster
                name={pastEvents[currentPast].name}
                text={pastEvents[currentPast].text}
                btn={pastEvents[currentPast].btn}
                post={pastEvents[currentPast].post}
                link={pastEvents[currentPast].link}
              />
            </div>
            {/* Previous/Next Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePreviousPast}
                className="px-4 py-2 bg-gray-700 text-gray-100 font-semibold rounded"
              >
                Previous
              </button>
              <button
                onClick={handleNextPast}
                className="px-4 py-2 bg-gray-700 text-gray-100 font-semibold rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Events;
