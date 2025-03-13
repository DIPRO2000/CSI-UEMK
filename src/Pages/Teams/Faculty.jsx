import React from "react";
import Card from "./Card";
import skm from "../../assets/skm.jpg";
import sm from "../../assets/sm.jpg";

const facultyMembers = [
    { 
        name: "Sudipto Kar Mondal", 
        designation: "Faculty Co-Ordinator", 
        image: skm, 
        words: "'In the coming years, we are looking forward to making everything in proper shape. Six years ago, we started our journey. This is a place where we can correctly say 'By the Student, For the Student.' We believe that our efforts will certainly widen our capabilities and bring sustainable growth.'"
    },
    { 
        name: "Sanjukta Mishra", 
        designation: "Faculty Co-Ordinator", 
        image: sm, 
        words: ""
    }
];

const Faculty = () => {
    return (
        <>
            <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white">TEAM</h1>
            <h3 className="mb-20 text-center font-rowdies text-3xl font-bold text-white">FACULTY CO-ORDINATORS</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                {facultyMembers.map((faculty, index) => (
                    <Card 
                        key={index}
                        image={faculty.image} 
                        nm={faculty.name} 
                        desig={faculty.designation} 
                        word={faculty.words} 
                    />
                ))}
            </div>
        </>
    );
};

export default Faculty;
