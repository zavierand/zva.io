import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        // Adjust the scrollTop value according to the height of your homepage
        if (scrollTop > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`hidden lg:flex fixed flex-col top-[35%] left-0 font-['Eurostile'] transition-transform duration-300 z-50 ${isVisible ? 'transform-none' : '-translate-x-full'}`}>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="https://www.linkedin.com/in/zavierand/">
                        <span className="ml-4">LINKEDIN</span> 
                        <FaLinkedin size={30} className="mr-4" />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="https://github.com/zavierand/">
                        <span className="ml-4">GITHUB</span> 
                        <FaGithub size={30} className="mr-4" />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#999999] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="/">
                        <span className="ml-4">EMAIL</span> 
                        <HiOutlineMail size={30} className="mr-4" />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9CDAF1] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="/">
                        <span className="ml-4">RESUME</span> 
                        <BsFillPersonLinesFill size={30} className="mr-4" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
