import React, { useState } from "react";
import TeamBox from "../../components/TeamBox";

const Team = () => {

    return (
        <>
            <div className="py-10 bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')] bg-cover h-screen bg-no-repeat">
                <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white" >TEAM</h1>
                <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                    <TeamBox name={"FACULTY CO-ORDIATORS"} intro={"Faculty Coordinators provide invaluable guidance and support, ensuring the academic and organizational success of GFG initiatives."}  link="/faculty" />
                    <TeamBox name={"MEMBERS"} intro={"Members provide invaluable guidance and support, ensuring the academic and organizational success of GFG initiatives."} link="/member" />
                </div>
            </div>
        </>
    );
};

export default Team;
