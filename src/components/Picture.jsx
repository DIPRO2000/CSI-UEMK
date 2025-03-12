import React from "react";

const Picture=(props)=>{
    return(
        <>
            <div>
                <img src={props.ig} className="w-[500px] h-[500px] max-w-full max-h-[300px] md:max-h-[500px] object-cover rounded-lg"/>
            </div>
        </>
    )
}

export default Picture