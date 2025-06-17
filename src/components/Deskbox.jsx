import React from "react";

const Deskbox = (props) => {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-0 h-auto md:h-[500px] p-6">
            
            {/* Image Section */}
            <div className="flex flex-col justify-center items-center md:items-start   md:ml-16">
                <img src={props.img} alt="Deskbox" className="w-auto h-[200px] md:w-[100px]  md:h-[200px] lg:w-auto lg:h-auto rounded-md" />
                <h2 className="pt-2 text-left text-xl text-black font-bold">{props.name}</h2>
                <h2 className="pt-2 text-xl text-black">{props.desig}</h2>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center mt-10 lg:px-20">
                <p className=" text-black text-base md:text-lg italic lg:text-xl md:-translate-y-16">{props.text}</p>
            </div>
        </div>
    );
}

export default Deskbox;
