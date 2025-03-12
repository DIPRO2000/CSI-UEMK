import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link,NavLink } from "react-router-dom";
import csi from "../assets/CSI_logo.png"

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#00396c] py-8">
      <div className="flex flex-wrap gap-6 justify-center max-w-7xl w-full px-4">
        
        {/* Section 1 */}
        <div className="p-4 w-full flex flex-col sm:w-1/2 lg:w-1/5">
          <h3 className="text-3xl mb-3 font-rowdies text-white">COMPUTER SOCIETY OF INDIA (CSI)</h3>
          <Link to="https://csiindia.org/home"><img src={csi} className="h-[100px] w-[170px] translate-x-2"/></Link>
        </div>

        {/* Section 2 */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5">
          <h3 className="text-2xl mb-4 font-rowdies text-white">PERMALINKS</h3>
          <ul className="text-xl text-white space-y-2">
            <li className="hover:underline cursor-pointer"><NavLink to="/">HOME</NavLink></li>
            <li className="hover:underline cursor-pointer"><NavLink to="/about">ABOUT</NavLink></li>
            <li className="hover:underline cursor-pointer"><NavLink to="/team">TEAM</NavLink></li>
            <li className="hover:underline cursor-pointer"><NavLink to="/gallery">GALLERY</NavLink></li>
            <li className="hover:underline cursor-pointer"><NavLink to="/">CONTACT</NavLink></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-2">
          <h3 className="text-2xl mb-4 font-rowdies text-white">CONTACT US</h3>
          <span className="text-md text-white"><h3 className="font-bold text-lg inline-block">Priyanshu:</h3>+91 84206 88671</span>
          <span className="text-md text-white"><h3 className="font-bold text-lg inline-block">Manjima:</h3>+91 96740 63935</span>
          <span className="text-md text-white"><h3 className="font-bold text-lg inline-block">Priyabrata:</h3>+91 81167 65002</span>
          <span className="text-md text-white"><h3 className="font-bold text-lg inline-block">Ipsita:</h3>+91 70442 22721</span>
          <span className="text-xl text-white font-bold">csi.uemk.01@gmail.com</span>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-2 text-2xl">
            <FontAwesomeIcon className="cursor-pointer text-white hover:text-blue-600" icon={faFacebook} />
            <FontAwesomeIcon className="cursor-pointer text-white hover:text-pink-500" icon={faInstagram} />
          </div>
        </div>

        {/* Section 4: Google Maps */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5">
          <h3 className="text-2xl mb-4 font-rowdies text-white">GET OUR DIRECTION</h3>
          <div className="w-full border-2 border-black rounded-xl overflow-hidden">
            <iframe
              className="w-full h-40 sm:h-48 lg:h-48 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.512563514144!2d88.48732647405897!3d22.55992513343716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1741365147908!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="pt-10 w-full flex flex-col border-t-2 border-t-white">
        <span className="text-xs sm:text-lg lg:text-2xl text-center text-white"><FontAwesomeIcon icon={faCopyright}/> 2025 Copyright Computer Society of India UEMK Student Chapter</span>
        <span className="text-xs sm:text-lg lg:text-xl text-center text-white">Developed by DIPRO</span>
      </div>
    </div>
  );
};

export default Footer;
