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
        <div className={`flex justify-center dark:bg-gray-900 ${isDarkMode && 'dark'}`}>
            <div className='w-2/5 h-auto font-space bg-customWhite p-2 dark:bg-gray-800'>
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
                <section>
                    <div className='w-full border-2'/>
                    <div className='mx-8 my-3'>
                        <h1 className='font-semibold text-xl dark:text-slate-100'>Contact:</h1>
                        <div className='flex flex-col gap-2 mt-1 dark:text-slate-100'>
                            <p>Email: kaifeng.yu02@gmail.com</p>
                            <p>Phone: 347-205-7129</p>
                        </div>
                    </div>
                </section>
                <footer className='flex justify-center items-center dark:text-slate-100'>
                    <p>© 2024 Kaifeng Yu.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;