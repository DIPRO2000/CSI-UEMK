import React from "react";
import Hero from "../../components/Hero";
import Chapter from "./Chapter";
import Events from "./Events";
import Post from "./Post";
import Executive from "./Executive";
import Desk from "./Desk";
import Countdown from "../../components/Countdown/Countdown";
import EventHero from "../../components/EventHero";

const Home=()=>{
    return(
        <>
            <EventHero/>
            <Desk/>
            <Hero/>
            <Chapter/>
            <Events/>
            <Post/>
            <Executive/>
        </>
    )
}

export default Home