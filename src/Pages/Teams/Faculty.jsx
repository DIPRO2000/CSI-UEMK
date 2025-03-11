import React from "react";
import Card from "./Card";
import skm from "../../assets/skm.jpg";
import sm from "../../assets/sm.jpg";

const Faculty=()=>{
    const name=["Sudipto Kar Mondal","Sanjukta Mishra"];
    const designation=["Faculty Co-Ordinator"];
    const words=["'In the comming years, we are looking forward to make everything in a proper shape.Six years ago we started our jouney.This is a place where correctly we can say By the Student, For the student... We believe that our efforts will certainly widen our Capabilities and that will bring sustainable growth.'",""];

    return(
        <>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">

                <Card
                    image={skm}
                    nm={name[0]}
                    desig={designation[0]}
                    word={words[0]}
                />
                <Card
                    image={sm}
                    nm={name[1]}
                    desig={designation[0]}
                    word={words[0]}
                />
            </div>
            
        </>
    )
}

export default Faculty