import React from 'react';
import { skillSet } from '../constants';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    // const Icon = skillSet['javascript'];

    return (
        <div className='my-10 mx-8'>
            <h1 className='font-semibold text-xl'>Tech Stack:</h1>
            {/* <div className='grid grid-cols-5 gap-6 mt-4'> */}
            <div className='flex flex-wrap gap-6 mt-4'>
                {
                    Object.keys(skillSet).map((skill) => {
                        return <SkillCard name={skill} Icon={skillSet[skill]}/>
                    })
                }
            </div>
        </div>
    );
};

export default Skills;