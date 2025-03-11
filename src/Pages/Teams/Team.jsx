import React, { useState } from "react";
import Faculty from "./Faculty";
import Member from "./Members";

const Team=()=>{
    const [teamSelector,setTeamSelector]=useState(null);
    const [backgroundClick,setbackgroundClick]=useState(null);

    const FacultyHandler=()=>{
        setTeamSelector("F");
        setbackgroundClick("F");
    }

    const MemberHandler=()=>{
        setTeamSelector("M");
        setbackgroundClick("M");
    }

    return(
        <>
            <div>
                <h1 className="mb-20 text-center text-3xl font-bold text-white">TEAM</h1>
                <div className="flex flex-row justify-center text-2xl gap-32 text-white">
                    <div onClick={FacultyHandler} className={`py-2 px-5 cursor-pointer bg-orange-600 hover:bg-green-500 transition-all duration-300 ease-in ${backgroundClick === "F" ? "bg-pink-500" : "bg-orange-600"}`}>Faculty</div>
                    <div onClick={MemberHandler} className={`py-2 px-5 cursor-pointer bg-orange-600 hover:bg-green-500 transition-all duration-300 ease-in ${backgroundClick === "M" ? "bg-pink-500" : "bg-orange-600"}`}>Members</div>
                </div>
                <div >
                    {(teamSelector==="F") ? <Faculty/> : (teamSelector==="M") ? <Member/> : ""}
                </div>
            </div>
        </>
    )
}

export default Team