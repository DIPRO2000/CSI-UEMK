import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Progressbar from "./Progressbar";

const Layout=()=>{
    return(
        <>
        <Progressbar/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout