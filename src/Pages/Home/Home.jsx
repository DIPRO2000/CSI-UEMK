import React from "react";
import Hero from "../../components/Hero";
import Chapter from "./Chapter";
import Events from "./Events";
import Post from "./Post";
import Executive from "./Executive";
import Desk from "./Desk";

const Home=()=>{
    return(
        <>
            <Hero/>
            <Chapter/>
            <Desk/>
            <Events/>
            <Post/>
            <Executive/>
        </>
    )
}

export default Home