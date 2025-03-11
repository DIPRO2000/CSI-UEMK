import React from "react";
import Hero from "../../components/Hero";
import Chapter from "./Chapter";
import Events from "./Events";
import Post from "./Post";
import Executive from "./Executive";

const Home=()=>{
    return(
        <>
            <Hero/>
            <Chapter/>
            <Events/>
            <Post/>
            <Executive/>
        </>
    )
}

export default Home