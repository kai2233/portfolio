import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';
import { useState } from 'react';
const Home = () => {
    const[isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={`flex justify-center ${isDarkMode && 'dark'}`}>
            <div className='absolute w-2/5 h-auto font-space bg-customWhite p-2 dark:bg-gray-800'>
                    <NavBar isDarkMode ={isDarkMode} handleDarkMode = {handleDarkMode}/>
                <section>
                    <Profile/>
                </section>
                <section>
                    <Skills/>
                </section>
                <section>
                    <Experience/>
                </section>
                <section>
                    <Projects/>
                </section>
            </div>
        </div>
    );
};

export default Home;