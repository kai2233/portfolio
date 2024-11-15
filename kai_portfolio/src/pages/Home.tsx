import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';
import Profile from './Profile';
const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative w-2/5 h-full bg-slate-50 p-2 opacity-80'>
                <NavBar/>
                <section>
                    <Profile/>
                </section>
                <section>
                    <Skills/>
                </section>
                <section>
                </section>
            </div>
        </div>
    );
};

export default Home;