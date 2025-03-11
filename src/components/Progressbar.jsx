import React from "react";
import { motion, useScroll } from "framer-motion";

const Progressbar = () => {
    const { scrollYProgress } = useScroll(); // ✅ Correctly destructured

    return (
        <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="bg-red-600 origin-left w-full h-2 z-30 fixed top-0 left-0"
        />
    );
}

export default Progressbar;
