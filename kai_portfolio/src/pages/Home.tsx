import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';
import Profile from './Profile';
import Experience from './Experience';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='absolute w-2/5 h-full bg-customWhite p-2'>
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
            </div>
        </div>
    );
};

export default Home;