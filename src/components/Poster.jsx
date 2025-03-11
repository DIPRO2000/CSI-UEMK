import React from "react";
import { Link } from "react-router-dom";
import poster1 from "../assets/poster.jpg"

const Poster=()=>{
    return(
        <>
            <div className="p-4 w-full flex flex-col items-center sm:w-[48%] rounded-2xl bg-slate-700">
                <img src={poster1}/>
                <h3 className="my-3 text-center text-3xl font-bold text-white">CSI STUDENT CHAPTER</h3>
                <p className="my-3 text-center text-xl font-normal text-white">Onboarding to the activities in the world of Cutting-edge technologies</p>
                <div className="py-6 px-6 my-6 inline-block cursor-pointer bg-orange-700"><Link to="https://forms.gle/rJb1S3RJsLHPzJ139">REGISTER</Link></div>
            </div>
        </>
    )
}

export default Poster