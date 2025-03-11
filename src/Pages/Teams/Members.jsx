import React from "react";
import Card from "./Card";
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


const Member=()=>{
    const name=["Priyanshu","Manjima Dutta","Priyabrata Choudhury","Ipshita Das","Diprajit Chakraborty","Ujan Sarkar","Anwesha Sinha","Mehul Bhattacharji","Madhuparna Das","Deepjyoti Bhattacharya","Subhojit","Ankita Chakraborty","Samaraho Mukherjee"];

    const designation=["President","Vice President","Manager","Manager","Event Co-ordinator and Web-Dev","Event Co-ordinator","Event Co-ordinator","Content","Content","Graphics","Graphics","Finance","Web-Dev"];

    const images=[img1,img5,img8,img3,img2,img4,img11,img7,img10,img6,img13,img12,img9];

    return(
        <>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                <Card
                    image={images[0]}
                    nm={name[0]}
                    desig={designation[0]}
                />
                <Card
                    image={images[1]}
                    nm={name[1]}
                    desig={designation[1]}
                />
                <Card
                    image={images[2]}
                    nm={name[2]}
                    desig={designation[2]}
                />
                <Card
                    image={images[3]}
                    nm={name[3]}
                    desig={designation[3]}
                />
                <Card
                    image={images[4]}
                    nm={name[4]}
                    desig={designation[4]}
                />
                <Card
                    image={images[5]}
                    nm={name[5]}
                    desig={designation[5]}
                />
                <Card
                    image={images[6]}
                    nm={name[6]}
                    desig={designation[6]}
                />
                <Card
                    image={images[7]}
                    nm={name[7]}
                    desig={designation[7]}
                />
                <Card
                    image={images[8]}
                    nm={name[8]}
                    desig={designation[8]}
                />
                <Card
                    image={images[9]}
                    nm={name[9]}
                    desig={designation[9]}
                />
                <Card
                    image={images[10]}
                    nm={name[10]}
                    desig={designation[10]}
                />
                <Card
                    image={images[11]}
                    nm={name[11]}
                    desig={designation[11]}
                />
                <Card
                    image={images[12]}
                    nm={name[12]}
                    desig={designation[12]}
                />
                
            </div>
        </>
    )
}

export default Member