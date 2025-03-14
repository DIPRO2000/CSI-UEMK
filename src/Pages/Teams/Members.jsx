import React from "react";
import Card from "./Card";
import img1 from "../../assets/img1.jpeg";   // Priyanshu
import img2 from "../../assets/img2.jpg";   // Diprojit
import img3 from "../../assets/img3.jpg";   // Ipsita
import img4 from "../../assets/img4.jpg";   // Ujan
import img5 from "../../assets/img5.jpg";   // Manjima
import img6 from "../../assets/img6.jpg";   // Deepjyoti
import img7 from "../../assets/img7.png";   // Mehul
import img8 from "../../assets/img8.jpg";   // Priyabrata
import img9 from "../../assets/img9.jpeg";  // Jojo
import img10 from "../../assets/img10.png"; // Madhuparna
import img11 from "../../assets/img11.png"; // Anwesha
import img12 from "../../assets/img12.jpg"; // Ankita
import img13 from "../../assets/img13.jpg"; // Subhojit

const members = [
    { name: "Priyanshu", designation: "President", image: img1 },
    { name: "Manjima Dutta", designation: "Vice President", image: img5 },
    { name: "Priyabrata Choudhury", designation: "Manager", image: img8 },
    { name: "Ipshita Das", designation: "Manager", image: img3 },
    { name: "Diprajit Chakraborty", designation: "Event Co-ordinator and Web-Dev", image: img2 },
    { name: "Ujan Sarkar", designation: "Event Co-ordinator", image: img4 },
    { name: "Anwesha Sinha", designation: "Event Co-ordinator", image: img11 },
    { name: "Mehul Bhattacharji", designation: "Content and Graphics", image: img7 },
    { name: "Madhuparna Das", designation: "Content", image: img10 },
    { name: "Deepjyoti Bhattacharya", designation: "Graphics", image: img6 },
    { name: "Vedanta", designation: "Graphics", image: img13 },
    { name: "Ankita Chakraborty", designation: "Finance", image: img12 },
    { name: "Samaraho Mukherjee", designation: "Web-Dev", image: img9 },
];

const Member = () => {
    return (
        <>
            <div className="py-10 bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')] ">
                <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white">TEAM</h1>
                <h3 className="mb-20 text-center font-rowdies text-3xl font-bold text-white">MEMBERS</h3>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1700px] mx-auto px-4">
                    {members.map((member, index) => (
                        <Card key={index} image={member.image} nm={member.name} desig={member.designation} />
                    ))}
                </div>
            </div>
            
        </>
    );
};

export default Member;
