import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

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

  return (
    <div ref={navRef} className="fixed z-50 w-full h-[174px] top-0 transform translate-x-full transition-transform duration-500">
      <div className="w-full h-full bg-[#376096] rounded-bl-[45px] rounded-br-[45px] shadow-xl flex items-center">
        <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-8">
          <Link 
            to="homepage"
            smooth={true}
            duration={500}
            className="z-10 text-blue-100 text-7xl font-medium font-['HighlandGothicFLF'] cursor-pointer">
            ZVA
          </Link>
          <div className="flex space-x-12 text-blue-100 text-[40px] font-normal font-['Eurostile']">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              00 ABOUT
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              01 PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              02 CONTACT
            </Link>
            <Link
              to="personal"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              03 PERSONAL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
