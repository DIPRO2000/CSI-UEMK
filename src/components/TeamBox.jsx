import React from "react";
import { Link } from "react-router-dom";
import Postbtn from "./UI/Postbtn";

const TeamBox = (props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start relative w-full h-[500px] max-w-[350px] border-2 border-black rounded-2xl bg-blue-950 overflow-hidden hover:scale-105 transition-all duration-200 ease-in">
                <h1 className="text-white text-2xl text-center font-rowdies py-10">{props.name}</h1>
                <p className="text-xl px-3 text-center text-white">{props.intro}</p>
                <div className="absolute bottom-7 cursor-pointer">
                    <Link to={props.link}><Postbtn text={"View"}/></Link>
                </div>
            </div>
        </>
    );
};

export default TeamBox;
