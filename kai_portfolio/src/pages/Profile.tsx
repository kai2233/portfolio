import React from 'react';

const Profile = () => {
    return (
        <div className='flex gap-3 mt-16'>
            <img src='DSC02062.jpg' alt='Kai' className='w-auto h-44 mx-6 rounded-lg'/>
            <div>
                <p className='leading-6 text-lg font-space mt-5 dark:text-slate-100'>Recent graduated full stack developer with a B.S. degree in Computer Science. Skilled in JavaScript, TypeScript, Python, React, Node.js, Express.js and PostgreSQL</p>
            </div>
        </div>
    );
};

export default Profile;
