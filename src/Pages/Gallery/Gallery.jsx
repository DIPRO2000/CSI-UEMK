import React from "react";
import img1 from  "../../assets/gallery/pic1.jpeg";
import img2 from  "../../assets/gallery/pic2.jpeg";
import img3 from  "../../assets/gallery/pic3.jpeg";
import img4 from  "../../assets/gallery/pic4.jpeg";
import img5 from  "../../assets/gallery/pic5.jpeg";
import img6 from  "../../assets/gallery/pic6.jpeg";
import Picture from "../../components/Picture";

const Gallery=()=>{
    const image=[img1,img2,img3,img4,img5,img6];

    return(
        <>
            <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white" >GALLERY</h1>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                <Picture ig={img1}/>
                <Picture ig={img2}/>
                <Picture ig={img3}/>
                <Picture ig={img4}/>
                <Picture ig={img5}/>
                <Picture ig={img6}/>
            </div>
        </>
    )
}

export default Gallery