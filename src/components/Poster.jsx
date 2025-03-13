import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Poster=(props)=>{
    return(
        <>
            <div className="p-4 w-full flex flex-col items-center border-2 border-white  max-w-[350px] rounded-2xl bg-slate-700">
                <img src={props.post} className="max-h-96 w-full rounded-2xl"/>
                <h3 className="my-1 text-center text-2xl font-bold text-white">{props.name}</h3>
                <p className="my-1 text-center text-lg font-normal text-white">{props.text}</p>
                <Link to={props.link}><Button btn={props.btn}/></Link>
            </div>
        </>
    )
}

export default Poster