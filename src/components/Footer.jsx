import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-blue-300 py-8">
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl w-full px-4">
        
        {/* Section 1 */}
        <div className="p-4 w-full  sm:w-1/2 lg:w-1/5">
          <h3 className="text-4xl text-white">COMPUTER SOCIETY OF INDIA (CSI)</h3>
        </div>

        {/* Section 2 */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5">
          <h3 className="text-2xl mb-4 text-white">PERMALINKS</h3>
          <ul className="text-xl text-white space-y-2">
            <li className="hover:underline cursor-pointer">HOME</li>
            <li className="hover:underline cursor-pointer">ABOUT</li>
            <li className="hover:underline cursor-pointer">GALLERY</li>
            <li className="hover:underline cursor-pointer">CONTACT</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-2">
          <h3 className="text-2xl mb-4 text-white">CONTACT US</h3>
          <span className="text-xl text-white">+91 XXXX XXX XXX</span>
          <span className="text-xl text-white">uemkcsi@gmail.com</span>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-2 text-3xl">
            <FontAwesomeIcon className="cursor-pointer text-white hover:text-blue-600" icon={faFacebook} />
            <FontAwesomeIcon className="cursor-pointer text-white hover:text-pink-500" icon={faInstagram} />
          </div>
        </div>

        {/* Section 4: Google Maps */}
        <div className="p-4 w-full sm:w-1/2 lg:w-1/5">
          <h3 className="text-2xl mb-4 text-white">GET OUR DIRECTION</h3>
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
      <div className="py-3 w-full flex flex-col items-center border-t-2 border-t-white">
        <span className="text-xs sm:text-lg lg:text-2xl text-center text-white"><FontAwesomeIcon icon={faCopyright}/> 2025 Copyright Computer Society of India UEMK Student Chapter</span>
        <span className="text-xs sm:text-lg lg:text-xl text-center text-white">Developed by DIPRO</span>
      </div>
    </div>
  );
};

export default Footer;
