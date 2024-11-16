import React from 'react';
import { skillSet } from '../constants';
import { IconType } from 'react-icons';

type Props = {
    name: string;
    Icon: IconType;
}
const SkillCard: React.FC<Props> = ({ name,Icon }) => {

    return (
        // <div className='relative justify-center items-center w-24 h-24 rounded-lg border-0 shadow-xl hover:cursor-pointer transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]'>
        //     <Icon className='absolute w-full h-full [backface-visibility:hidden]'/>
        //     <div className='flex justify-center items-center w-full h-full rounded-lg bg-black text-white font-bold [transform:rotateY(180deg)] [backface-visibility:hidden]'>
        //         {name}
        //     </div>
        // </div>
        <div className='flex justify-center items-center w-24 h-12 rounded-lg border-0 shadow-xl gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer hover:bg-neutral-100 hover:text-amber-600 dark:text-black dark:bg-slate-100'>
            <Icon className=''/>
            <p className='text-sm'>{name}</p>
        </div>
    );
};

export default SkillCard;