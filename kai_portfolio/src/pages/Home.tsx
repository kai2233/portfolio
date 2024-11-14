import React from 'react';
import Skills from './Skills';
const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative w-2/5 h-full bg-slate-50 p-2 opacity-80'>
                <section className='flex gap-3 mt-16'>
                    <img src='https://avatars.githubusercontent.com/u/77445921?v=4' alt='Kai' className='w-14 h-14 rounded-full mx-6'/>
                    <p className='leading-6 text-lg font-space'>Recent graduated full stack developer with a B.S. degree in Computer Science. Skilled in JavaScript, TypeScript, Python, React, Node.js, Express.js and PostgreSQL</p>
                </section>
                <section>
                    <Skills/>
                </section>
            </div>
        </div>
    );
};

export default Home;