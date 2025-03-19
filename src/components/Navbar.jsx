import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import csi_logo from "../assets/CSI_logo.png";
import uem_logo from "../assets/UEM_logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu
import Hover from "./UI/Hover";

const Navbar = () => {
    const [ScrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
    const location=useLocation();
    const Pathname=location.pathname;

    const LogoClick=()=>{
        (Pathname==="/") ? window.scrollTo(0,0) : "";
    }

    const menuClick = (event) => {
        let element = event.target.innerText.toLowerCase(); // Convert text to lowercase
        let menuItem = element === "home" ? "/" : `/${element}`; // Handle home separately
    
        if (Pathname === menuItem) {
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`flex items-center justify-between px-6 md:px-10 h-[15vh] sticky top-0 z-20 text-white 
            ${(Pathname==="/")?(ScrollY > 50 )? "bg-[#023047]" : "bg-gradient-to-r from-[#a933f2] to-[#8277fe]" : "bg-[#023047]"} transition-all duration-300 ease-in-out`}>

            {/* Logo and Title */}
            <div className="flex items-center gap-4">
                <NavLink to="/">
                    <h2 className="text-3xl font-rowdies md:text-5xl" onClick={LogoClick}>CSI UEMK</h2>
                </NavLink>
                <Link to="https://csiindia.org/home">
                    <img src={csi_logo} alt="CSI Logo" className="h-[30px] w-[60px] md:h-[50px] md:w-[90px]"/>
                </Link>
                <Link to="https://uem.edu.in/">
                    <img src={uem_logo} alt="UEM Logo" className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]"/>
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                {menuOpen ? (
                    <FiX size={30} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                ) : (
                    <FiMenu size={30} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                )}
            </div>

            {/* Navigation Links */}
            <div className={`md:flex flex-col md:flex-row items-center gap-6 text-lg absolute md:static top-[12vh] left-0 w-full 
                md:w-auto bg-blue-500 md:bg-transparent transition-transform ${menuOpen ? "translate-y-0" : "-translate-y-[150%]"} md:translate-y-0`}>
                <ul className="flex flex-col md:flex-row items-center gap-6 py-4 md:py-0">
                    <li  onClick={LogoClick}><NavLink to="/" onClick={() => setMenuOpen(false)}><Hover text={"HOME"}/></NavLink></li>
                    {/* <li ><NavLink to="/about" onClick={() => setMenuOpen(false)}><Hover text={"ABOUT"}/></NavLink></li> */}
                    <li onClick={menuClick}><NavLink to="/team" onClick={() => setMenuOpen(false)}><Hover text={"TEAM"}/></NavLink></li>
                    <li onClick={menuClick}><NavLink to="/gallery" onClick={() => setMenuOpen(false)}><Hover text={"GALLERY"}/></NavLink></li>
                    <li onClick={menuClick}><NavLink to="/contact" onClick={() => setMenuOpen(false)}><Hover text={"CONTACT"}/></NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
