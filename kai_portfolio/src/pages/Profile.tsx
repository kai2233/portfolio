import { IoLocation } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

const Profile = () => {
    return (
        <div className='flex gap-3 mt-16 max-lg:flex-col max-lg:items-center'>
            <img src='DSC02062.jpg' alt='Kai' className='w-auto h-44 mx-6 rounded-lg max-lg:w-32'/>
            <div>
                <h1 className='font-bold text-2xl dark:text-slate-100 max-lg:text-center'>Kaifeng Yu</h1>
                <div className='flex items-center mt-2 dark:text-slate-100 max-lg:justify-center'>
                    <IoLocation className=''/>
                    <h2 className='font-semibold text-sm opacity-65'>Based in New York, NY</h2>
                </div>
                <div className='flex items-center dark:text-slate-100 max-lg:justify-center'>
                    <MdLanguage className=''/>
                    <p className='font-semibold text-sm opacity-65'>Speak English & Mandarin</p>
                </div>
                <p className='leading-6 text-lg font-space dark:text-slate-100 mt-2 max-lg:text-center'>Recent graduated <span className='font-bold'>Full-Stack Developer</span> with a B.S. degree in Computer Science. Skilled in JavaScript, TypeScript, Python, React, Node.js, Express.js and PostgreSQL</p>
            </div>
        </div>
    );
};

export default Profile;
