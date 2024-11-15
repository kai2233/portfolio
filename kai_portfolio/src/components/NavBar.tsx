import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const NavBar = () => {
    return (
        <div className='flex justify-center'>
            <nav className="fixed">
                <ul className="relative grid grid-cols-3 items-center justify-center py-2 border border-white/10 backdrop-blur-md rounded-full shadow-2xl">
                    <li className='relative z-10 px-2 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <Link to="https://www.linkedin.com/in/kaifeng-yu02/" target="_blank" className="text-black relative z-20 hover:text-gray-300 active:text-blue-500 flex justify-center items-center gap-x-1">
                                <FaLinkedin/>
                                <p className='text-sm'>Linkedin</p>
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                    <Link to="https://github.com/kai2233" target="_blank" className="text-black relative z-20 hover:text-gray-300 active:text-blue-500 flex justify-center items-center gap-x-1">
                            <div className='flex justify-center items-center gap-x-1'>
                                <SiGithub/>
                                <p className='text-sm'>Github</p>
                            </div>
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <Link to="/contact" className="text-black relative z-20 hover:text-gray-300">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;