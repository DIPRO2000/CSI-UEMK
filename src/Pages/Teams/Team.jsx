import React, { useState } from "react";
import TeamBox from "../../components/TeamBox";

const Team = () => {

    return (
        <>
            <div className="py-10 bg-[url('https://i.imgur.com/2X6BRTJ.jpeg')] bg-cover bg-no-repeat">
                <h1 className="mb-20 text-center font-rowdies text-6xl font-bold text-white" >TEAM</h1>
                <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1200px] mx-auto px-4">
                    <TeamBox name={"FACULTY CO-ORDIATORS"} intro={"The Faculty Coordinators of UEMK at CSI play a pivotal role in guiding the chapter’s vision and initiatives. Their mentorship ensures that all activities align with academic goals while fostering a culture of innovation, collaboration, and professional growth."}  link="/faculty" />
                    <TeamBox name={"MEMBERS"} intro={"The Student Members of UEMK at CSI form the dynamic core of the chapter, bringing creativity, energy, and technical skills to the forefront. They lead event planning, project development, and community engagement, turning ideas into impactful actions under the mentorship of the faculty."} link="/member" />
                </div>
            </div>
        </>
    );
};

export default Team;
