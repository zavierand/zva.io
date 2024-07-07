// homepage
import React from 'react';
import { Link } from 'react-scroll'

export default function Homepage() {
    return(
        // wrapper for homepage
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#161a25] to-[#12171d] text-[#be475c] shadow-xl shadow-[#fefff9]" id="homepage">
            { /* homepage navbar */ }
            <div>
            <div className="flex text-9xl font-['HighlandGothicFLF'] cursor-pointer transition duration-700 hover:scale-125">
                ZVA
            </div>
                <div className="flex grid grid-row-4 font-['Eurostile'] text-4xl p-12">
                    <Link 
                        to="about"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                        00 ABOUT
                    </Link>
                    <Link 
                        to="projects"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                        01 PROJECTS
                    </Link>
                    <Link 
                        to="contact"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                        02 CONTACT
                    </Link>
                    <Link 
                        to="personal"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer transition duration-700 hover:scale-125 transition duration-700 hover:font-bold">
                        03 PERSONAL
                    </Link>
                </div>
            </div>
        </div>
    );
};
