import React from "react";
import img1 from "../../assets/Review/img1.jpg";
import img2 from "../../assets/Review/img2.jpg";
import img3 from "../../assets/Review/img3.jpg";


// Card component to reuse for each person
function Card({ photo, name, role, text }) {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-72">
      <p className="mb-4 text-gray-500">{text}</p>
      <div className="flex flex-col items-center sm:items-start">
        <img src={photo} alt={name} className="rounded-full w-28 h-28 mb-4" />
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-700 font-bold">{role}</p>
      </div>
    </div>
  )
}

export default function Review() {
  const people = [
    {
      photo: img1, // Update with actual path
      name: "Nivedita Sen",
      role: "PySprint Winner",
      text: "PySprint was truly a memorable experience — a perfect blend of learning, mentorship, and fun. It was inspiring to engage with our seniors who were always approachable and ready to guide us through any doubts. The real-time mentorship sessions, insightful discussions about pursuing education abroad, and the relaxing music JAM made the day stand out. Hoping to be part of more events like this in the future!"
    },
    {
      photo: img2,
      name: "Shlok Gupta",
      role: "PySprint 1st Runner up",
      text: "It was an amazing event to remember, to be able to learn from your seniors, make connections and increase your knowledge. The event was ideal in all aspect; we had our seniors whom we could share with our problems as freely as we could. The live mentorship, career guidance for studies at abroad and music JAM were the hits of the day. Looking forward to more such wonderful events soon."
    },
    {
      photo: img3,
      name: "Swaraj De",
      role: "PySprint 2nd Runner up",
      text: "PySprint was a fantastic experience — from the well-structured challenges to the collaborative atmosphere, everything was top-notch. Kudos to Team CSI for pulling off such a smooth and engaging event!"
    }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl text-center text-white font-semibold mb-10">
        WORD OF MOUTH
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-16">
        {people.map((person, idx) => (
          <Card
            key={idx}
            photo={person.photo}
            name={person.name}
            role={person.role}
            text={person.text}
          />
        ))}
      </div>
    </div>
  )
}
