import React from "react";
import Poster from "../../components/Poster";

const Events=()=>{
    return(
        <>
            <div className="bg-[#6c63ff] text-white px-8">
                <h1 className="text-4xl py-4 text-center">EXPLORE OUR EVENTS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="border-2 border-black p-4 rounded-2xl">
                        <h1 className="text-center text-xl font-semibold">Ongoing Events</h1>
                        <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
                            <Poster/>
                            
                        </div>
                    </div>
                    
                    <div className="border-2 border-black p-4 rounded-2xl">
                        <h1 className="text-center text-xl font-semibold">Past Events</h1>
                        <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
                            <Poster/>
                            <Poster/>
                            <Poster/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events




