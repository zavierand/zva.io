// homepage
import React from 'react';
import { Link } from 'react-scroll'

export default function Homepage() {
    return(
        // wrapper for homepage
        <div className="w-screen h-screen flex items-center justify-center bg-[#CDE3F4] text-[#376096]" id="homepage">
            { /* homepage navbar */ }
            <div>
            <div className="flex text-9xl font-['HighlandGothicFLF']">
                ZVA
            </div>
                <div className="flex grid grid-row-4 font-['Eurostile'] text-4xl p-12">
                    <Link 
                        to="about"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer">
                        00 ABOUT
                    </Link>
                    <Link 
                        to="projects"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer">
                        01 PROJECTS
                    </Link>
                    <Link 
                        to="contact"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer">
                        02 CONTACT
                    </Link>
                    <Link 
                        to="personal"
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer">
                        03 PERSONAL
                    </Link>
                </div>
            </div>
        </div>
    );
};
