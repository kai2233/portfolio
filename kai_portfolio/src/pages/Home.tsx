import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='absolute w-2/5 h-auto bg-customWhite p-2'>
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