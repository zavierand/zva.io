import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = ({ slideOut }) => {
    const navRef = useRef(null);

    useEffect(() => {
      if (slideOut) {
        navRef.current.classList.remove('slide-in-from-left');
        navRef.current.classList.add('slide-out-to-right');
      } else {
        navRef.current.classList.remove('slide-out-to-right');
        navRef.current.classList.add('slide-in-from-left');
      }
    }, [slideOut]);

    // toggle hamburger menu on different viewports
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(prevToggle => !prevToggle);
    };

    return (
      <div ref={navRef} className="fixed z-50 w-full h-[174px] top-0 transform translate-x-full transition-transform duration-500">
        <div className="w-full h-full bg-[#6f3542] rounded-bl-[45px] rounded-br-[45px] shadow-xl flex items-center justify-between px-4">
          <Link 
            to="homepage"
            smooth={true}
            duration={500}
            className="pl-32 z-10 text-[#f1ecea] text-7xl font-medium font-['HighlandGothicFLF'] cursor-pointer transition duration-700 hover:scale-125">
            ZVA
          </Link>
          <div className="flex items-center justify-end w-full">
            <div className="hidden md:flex space-x-12 text-[#f1ecea] text-[40px] font-normal font-['Eurostile']">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                00 ABOUT
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                01 PROJECTS
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                02 CONTACT
              </Link>
              <Link
                to="personal"
                smooth={true}
                duration={500}
                className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                03 PERSONAL
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={handleToggle} className="text-white text-3xl">
                {toggle ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="md:hidden bg-[#6f3542] w-full flex flex-col items-center space-y-6 py-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={handleToggle}
              className="cursor-pointer text-[#f1ecea] text-[40px] font-normal font-['Eurostile'] transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
              00 ABOUT
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleToggle}
              className="cursor-pointer text-[#f1ecea] text-[40px] font-normal font-['Eurostile'] transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
              01 PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleToggle}
              className="cursor-pointer text-[#f1ecea] text-[40px] font-normal font-['Eurostile'] transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
              02 CONTACT
            </Link>
            <Link
              to="personal"
              smooth={true}
              duration={500}
              onClick={handleToggle}
              className="cursor-pointer text-[#f1ecea] text-[40px] font-normal font-['Eurostile'] transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
              03 PERSONAL
            </Link>
          </div>
        )}
      </div>
    );
};

export default NavBar;

