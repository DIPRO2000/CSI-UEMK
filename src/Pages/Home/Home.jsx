import React, { useRef } from "react";
import Hero from "../../components/Hero";
import Chapter from "./Chapter";
import Events from "./Events";
import Post from "./Post";
import Executive from "./Executive";
import Desk from "./Desk";
import Countdown from "../../components/Countdown/Countdown";
import EventHero from "../../components/EventHero";

const Home = () => {
    const eventsRef = useRef(null); // Reference for Events section

    return (
        <>
            {/* <EventHero eventsRef={eventsRef} />   */}
            <Desk />
            <Hero />
            <Chapter />
            <div ref={eventsRef}> {/* Attach ref to Events section */}
                <Events />
            </div>
            <Post />
            <Executive />
        </>
    );
};

export default Home;
