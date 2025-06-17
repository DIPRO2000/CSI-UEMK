import React from "react";
import Deskbox from "../../components/Deskbox";
import skg from "../../assets/DESK/skg.jpeg"

const Desk=()=>{
    return(
        <>
            <div className="bg-white">
                <h1 className="text-4xl  pt-16 font-rowdies text-center">From the Registrar's desk</h1>
                <div className=" sm:my-0 ">
                    <Deskbox
                        img={skg}
                        name={"Prof. (Dr.) Sukalyan Goswami"}
                        desig={"Registrar, UEMK"}
                        text={"The CSI UEMK Students' Chapter is a commendable initiative that reflects the growing spirit of innovation and technical curiosity among our students. It provides a platform where young minds can engage with real-world technologies, sharpen their coding and analytical skills, and work collaboratively on forward-thinking ideas. I believe this chapter will not only inspire students to go beyond academics but also prepare them to become capable, confident professionals in the ever-evolving world of technology."}
                    />
                </div>
                
            </div>
        </>
    )
}

export default Desk;