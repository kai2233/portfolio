import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { email_address } from '../constants';


type Props = {
    isDarkMode: boolean;
    handleDarkMode : () => void
}
const NavBar: React.FC<Props> = ({isDarkMode, handleDarkMode}) => {
    const handleEmailClick = () => {
        const emailAddress = `mailto:${email_address}`;
        window.location.href = emailAddress;
      };
    return (
        <div className='flex justify-center'>
            <nav className="fixed">
                <ul className="relative grid grid-cols-4 items-center justify-center py-2 border border-white/10 backdrop-blur-md rounded-full shadow-2xl">
                    <li className='relative z-10 px-2 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <Link to="https://www.linkedin.com/in/kaifeng-yu02/" target="_blank" className="text-black relative z-20 hover:text-gray-300 active:text-blue-500 flex justify-center items-center gap-x-1 dark:text-slate-100">
                                <FaLinkedin/>
                                <p className='text-sm'>Linkedin</p>
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                    <Link to="https://github.com/kai2233" target="_blank" className="text-black relative z-20 hover:text-gray-300 active:text-blue-500 flex justify-center items-center gap-x-1 dark:text-slate-100">
                            <div className='flex justify-center items-center gap-x-1'>
                                <SiGithub/>
                                <p className='text-sm'>Github</p>
                            </div>
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <button onClick={handleEmailClick} className="text-black relative z-20 hover:text-gray-300 active:text-blue-500 flex justify-center items-center gap-x-1 dark:text-slate-100">
                            <div className='flex justify-center items-center gap-x-1'>
                                <IoMail/>
                                <p className='text-sm'>Contact</p>
                            </div>
                        </button>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <button className='flex justify-center items-center gap-x-1 text-black relative z-20 hover:text-gray-300 active:text-blue-500 dark:text-slate-100' onClick={handleDarkMode}>
                            {isDarkMode? 
                                <>
                                    <MdDarkMode/> 
                                    <p className='text-sm'>Dark</p>
                                </>
                                : 
                                <>
                                    <MdLightMode/>
                                    <p className='text-sm'>Light</p>
                                </>
                            }
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;