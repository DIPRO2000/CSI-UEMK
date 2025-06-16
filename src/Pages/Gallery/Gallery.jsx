import React from "react";
import img1 from  "../../assets/gallery/pic1.jpeg";
import img2 from  "../../assets/gallery/pic2.jpeg";
import img3 from  "../../assets/gallery/pic3.jpeg";
import img4 from  "../../assets/gallery/pic4.jpeg";
import img5 from  "../../assets/gallery/pic5.jpeg";
import img6 from  "../../assets/gallery/pic6.jpeg";
import img7 from "../../assets/gallery/priyabrata.jpg";
import img8 from "../../assets/gallery/pic7.jpg";
import img9 from "../../assets/gallery/pic8.jpg";
import img10 from "../../assets/gallery/img10.jpg";
import img11 from "../../assets/gallery/img11.jpg";
import img12 from "../../assets/gallery/img12.jpg";
import img13 from "../../assets/gallery/img13.jpg";
import img14 from "../../assets/gallery/img14.jpg";
import img15 from "../../assets/gallery/img15.jpg";
import img16 from "../../assets/gallery/img16.jpg";
import img17 from "../../assets/gallery/img17.jpg";
import img18 from "../../assets/gallery/img18.jpg";
import img19 from "../../assets/gallery/img19.jpg";
import img20 from "../../assets/gallery/img20.jpg";
import img21 from "../../assets/gallery/img21.jpg";
import img22 from "../../assets/gallery/img22.jpg";
import img23 from "../../assets/gallery/img23.jpg";
import Picture from "../../components/Picture";

const Gallery=()=>{
    const image=[img1,img2,img3,img4,img5,img6];

    return(
        <>
            <div className="py-10 bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')] bg-cover bg-no-repeat">
                <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white" >GALLERY</h1>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                    <Picture ig={img10}/>
                    <Picture ig={img11}/>
                    <Picture ig={img12}/>
                    <Picture ig={img13}/>
                    <Picture ig={img14}/>
                    <Picture ig={img15}/>
                    <Picture ig={img16}/>
                    <Picture ig={img17}/>
                    <Picture ig={img18}/>
                    <Picture ig={img19}/>
                    <Picture ig={img20}/>
                    <Picture ig={img21}/>
                    <Picture ig={img22}/>
                    <Picture ig={img23}/>
                    <Picture ig={img1}/>
                    <Picture ig={img2}/>
                    <Picture ig={img3}/>
                    <Picture ig={img4}/>
                    <Picture ig={img5}/>
                    <Picture ig={img6}/>
                    <Picture ig={img7}/>
                    <Picture ig={img8}/>
                    <Picture ig={img9}/>
                </div>
            </div>
            
        </>
    )
}

export default Gallery