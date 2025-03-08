import React from "react";

const Navbar=()=>{
    return(
        <>
            <div className="flex flex-row items-center justify-between px-10 h-[15vh] text-white bg-blue-500 overflow-hidden">
                <h2 className="text-6xl ">CSI UEMK</h2>
                <div className="text-2xl ">
                    <ul className="flex flex-row items-center gap-10">
                        <li className="cursor-pointer hover:text-black hover:scale-110">HOME</li>
                        <li className="cursor-pointer hover:text-black hover:scale-110">ABOUT</li>
                        <li className="cursor-pointer hover:text-black hover:scale-110">GALLERY</li>
                        <li className="cursor-pointer hover:text-black hover:scale-110">CONTACT</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Navbar