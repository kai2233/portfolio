import React from 'react';
import Skills from './Skills'
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative w-2/5 h-full bg-slate-50 p-2 opacity-80'>
                <NavBar/>
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