import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='flex justify-center dark'>
            <div className='absolute w-2/5 h-auto font-space bg-customWhite p-2 drak:'>
                <NavBar/>
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