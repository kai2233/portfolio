import React from 'react';
import { skillSet } from '../constants';
import { IconType } from 'react-icons';

type Props = {
    name: string;
    Icon: IconType;
}
const SkillCard: React.FC<Props> = ({ name,Icon }) => {

    return (
        <div className='relative justify-center items-center w-24 h-24 rounded-lg border-0 shadow-xl hover:cursor-pointer transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>
            <Icon className='absolute w-full h-full [backface-visibility:hidden]'/>
            <div className='flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                {/* <p className='text-sm'>{name}</p> */}
                {name}
            </div>

        </div>
    );
};

export default SkillCard;