import React from "react";
import Logo from "../assets/image/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="sm:w-full md:w-[60rem] lg:w-[63rem] mx-auto p-0.5">
          <div className="flex justify-start flex-col sm:flex-col md:flex-row lg:flex-row h-40 md:h-16 lg:h-16  py-4
           items-center">
            <div className="logo">
              <img src={Logo} alt="Takeco Logo" />
            </div>
            <div className="Takeco ">
              <h1 className="">ㅤTAKECO ENGINEERING THAILAND</h1>
            </div>
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ                                             
            
            <ul className="menus flex justify-end">
              <li className="ml-2">
                <a href="#" className="text-sm">HOME</a>
              </li>
              <li className="ml-2">
                <a href="#" className="text-sm">ABOUT</a>
              </li>
              <li className="ml-2">
                <a href="#" className="text-sm">PROIUCTS</a>
              </li>
              <li className="ml-2">
                <a href="#" className="text-sm">SERVICES</a>
              </li>
              <li className="ml-2">
                <a href="#" className="text-sm">BLOG & NEWS</a>
              </li>
              <li className="ml-2">
                <a href="#" className="text-sm">CONTACT</a>
              </li>
            </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
