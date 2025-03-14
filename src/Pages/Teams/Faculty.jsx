import React from "react";
import Card from "./Card";
import skm from "../../assets/Faculty/skm.jpg";
import sm from "../../assets/Faculty/sm.jpg";
import ad from "../../assets/Faculty/aniruddha.jpeg";

const facultyMembers = [
    { 
        name: "Sudipto Kar Mondal", 
        designation: "Faculty Co-Ordinator", 
        image: skm, 
        words: "In the coming years, we are looking forward to making everything in proper shape. Six years ago, we started our journey. This is a place where we can correctly say 'By the Student, For the Student.' We believe that our efforts will certainly widen our capabilities and bring sustainable growth."
    },
    { 
        name: "Aniruddha Das", 
        designation: "Faculty Co-Ordinator", 
        image: ad, 
        words: "CSI at UEMK has evolved into a hub of creativity and technical brilliance. Working alongside such passionate students has reaffirmed my belief in the power of student-led innovation. It’s been a pleasure guiding them through events, hackathons, and real-world projects. I’m confident that the chapter will continue to foster a strong learning environment that empowers future tech leaders."
    },
    { 
        name: "Sanjukta Mishra", 
        designation: "Faculty Co-Ordinator", 
        image: sm, 
        words: "Being a part of the CSI Students' Chapter at UEMK has been an immensely rewarding experience. The enthusiasm and drive that our students bring to each initiative is truly inspiring. As a faculty coordinator, I take pride in mentoring this talented group and witnessing their growth as budding professionals. I look forward to seeing the chapter reach new heights through continued innovation and collaboration."
    }
    
];

const Faculty = () => {
    return (
        <>
        <div className="py-10 bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')]">
            <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white">TEAM</h1>
            <h3 className="mb-20 text-center font-rowdies text-3xl font-bold text-white">FACULTY CO-ORDINATORS</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1700px] mx-auto px-4">
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
        </div>
            
        </>
    );
};

export default Faculty;
