import React from "react";


const Card=(props)=>{
    return(
        <>
            <div className="flex flex-col items-center w-full  max-w-[300px] border-2 border-black rounded-2xl bg-blue-950 overflow-hidden">
                <img src={props.image} className=" h-[270px] w-[270px] "/>
                <h1 className="text-2xl text-white py-10 text-center font-bold">{props.nm}</h1>
                <span className="text-2xl text-white py-3 text-center font-bold">{props.desig}</span>
                <span className="text-lg text-white py-3 text-center font-black">{props.word}</span>
            </div>
        </>
    )
}

export default Card