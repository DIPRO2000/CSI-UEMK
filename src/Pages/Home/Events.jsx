import React from "react";
import Poster from "../../components/Poster";
import pysprint from "../../assets/Posters/poster.jpg";
import dsaworkshop from "../../assets/Posters/dsa_poster.jpeg"; 

const Events=()=>{
    

    return(
        <>
            <div className="relative bg-[url('https://i.imgur.com/3dYZjZn.jpeg')] text-white px-8 py-10">
                {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
                <h1 className="text-6xl font-rowdies py-4 text-center">EXPLORE OUR EVENTS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className=" p-4 md:border-r-2 border-white rounded-2xl">
                        <h1 className="text-center text-3xl my-10 font-semibold">Ongoing Events</h1>
                        <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
                            <Poster
                                name={"PYSPRINT"}
                                text={"DATE: 22nd March,2025"}
                                btn={"REGISTER"}
                                post={pysprint}
                                link={"https://forms.gle/rJb1S3RJsLHPzJ139"} 
                            />    
                        </div>
                    </div>
                    
                    <div className="k p-4 md:border-l-2 border-white rounded-2xl">
                        <h1 className="text-center text-3xl my-10 font-semibold">Past Events</h1>
                        <div className="flex flex-row justify-center flex-wrap gap-x-5 gap-y-5">
                            <Poster
                                name={"DSA WORKSHOP"}
                                text={"DATE: 28th September,2024"}
                                btn={"VIEW"}
                                post={dsaworkshop}
                                link={"/gallery"}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events




