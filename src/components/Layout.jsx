import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Progressbar from "./Progressbar";
import ScrollToTop from "./ScrollToTop";

const Layout=()=>{
    return(
        <>
        <ScrollToTop/>
        <Progressbar/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout