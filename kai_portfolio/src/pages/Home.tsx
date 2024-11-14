import React from 'react';
import Skills from './Skills'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative w-2/5 h-full bg-slate-50 p-2 opacity-80'>
                <div className='flex justify-center'>
                <nav className="fixed">
                    <ul className="relative grid grid-cols-3 items-center justify-center py-2 border border-white/10 backdrop-blur-md rounded-full shadow-2xl">
                    <li className='relative z-10 px-2 text-center py-2 rounded-full cursor-pointer text-neutral-300'>
                        <Link to="" className="text-black relative z-20 hover:text-gray-300">
                        Home
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 text-neutral-300'>
                        <Link to="/profile" className="text-black relative z-20 hover:text-gray-300">
                        Profile
                        </Link>
                    </li>
                    <li className='relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 text-neutral-300'>
                        <Link to="/contact" className="text-black relative z-20 hover:text-gray-300">
                        Contact Me
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
                <section className='flex gap-3 mt-16'>
                    <img src='DSC02062.jpg' alt='Kai' className='w-auto h-44 mx-6 rounded-lg'/>
                    <div>
                    <p className='leading-6 text-lg font-space'>Recent graduated full stack developer with a B.S. degree in Computer Science. Skilled in JavaScript, TypeScript, Python, React, Node.js, Express.js and PostgreSQL</p>
                    </div>
                </section>
                <section>
                    <Skills/>
                </section>
                <div className='h-96 '></div>
            </div>
        </div>
    );
};

export default Home;