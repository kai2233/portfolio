import React from 'react';
import { skillSet } from '../constants';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    // const Icon = skillSet['javascript'];

    return (
        <div className='grid grid-cols-5 gap-6 my-10 mx-8'>
            {
                Object.keys(skillSet).map((skill) => {
                    return <SkillCard name={skill} Icon={skillSet[skill]}/>
                })
            }
        </div>
    );
};

export default Skills;