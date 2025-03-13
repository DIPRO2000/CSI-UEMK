import React from "react";
import { Link } from "react-router-dom";

const TeamBox = (props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start w-full h-[400px] max-w-[350px] border-2 border-black rounded-2xl bg-blue-950 overflow-hidden">
                <h1 className="text-white text-2xl text-center py-10">{props.name}</h1>
                <p className="text-xl text-center text-white">{props.intro}</p>
                <div className="my-16 py-2 px-6 border-2 border-green-500 bg-green-500 cursor-pointer">
                    <Link to={props.link}>View</Link>
                </div>
            </div>
        </>
    );
};

export default TeamBox;
