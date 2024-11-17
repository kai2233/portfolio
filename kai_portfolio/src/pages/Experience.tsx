import {useState} from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../components/card';

type displayType = 'work' | 'education';
const Experience = () => {

    const [display, setDisplay] = useState<displayType>('work');
    return (
        <div className='my-16 mx-8'>
            <div className='flex justify-evenly border-2 border-stone-300 rounded-full'>
                <button className={`font-semibold text-xl w-full rounded-l-full max-lg:text-sm ${display === 'work' ? 'bg-slate-700 text-white dark:bg-white dark:text-slate-700' : 'hover:bg-gray-200'} dark:bg-gray-800 dark:text-gray-100`} onClick={()=>setDisplay('work')}>Work Experience</button>
                <button className={`font-semibold text-xl w-full rounded-r-full max-lg:text-sm ${display === 'education' ? 'bg-slate-700 text-white dark:bg-white dark:text-slate-700' : 'hover:bg-gray-200'} dark:bg-gray-800 dark:text-gray-100`} onClick={()=>setDisplay('education')}>Education</button>
            </div>
            {display === 'work' &&
                <div className="mt-5">
                    <Card className='flex flex-col dark:border-slate-100'>
                        <div className='flex items-center'>
                            <div className='border-r-2 h-32 w-11 dark:border-r-slate-100 max-lg:border-0'></div>
                            <img src="https://media.licdn.com/dms/image/v2/D4E0BAQG1trCAY9ECHg/company-logo_200_200/company-logo_200_200/0/1711629947813/10clear_logo?e=1740009600&v=beta&t=AEuTvYcWsgXgbgW1BVFluAiOBFGur3hbkypGRcRxLgE" alt='' className='absolute w-16 h-16 rounded-full border-2 ml-3'/>
                            <CardHeader className='ml-16 p-0'>
                                <CardTitle className='text-lg'>Backend Developer</CardTitle>
                                <CardDescription className='text-sm'>10Clear · Internship </CardDescription>
                                <CardDescription className='text-sm'>Jun 2024 - Aug 2024 · 3 mos</CardDescription>
                            </CardHeader>
                        </div>
                    </Card>
                </div>
            }
            {display === 'education' &&
                <div className="mt-5 rounded-full" >
                    <Card className='flex flex-col dark:border-slate-100'>
                        <div className='flex items-center max-lg:border-b-2'>
                            <div className='border-r-2 h-32 w-11 dark:border-r-slate-100 max-lg:border-0'></div>
                            <img src="https://media.licdn.com/dms/image/v2/C4E0BAQHs5Y_uvrC-IA/company-logo_200_200/company-logo_200_200/0/1631354516819?e=1740009600&v=beta&t=MlvWrDQlNiyLj8RcdM03Sw-26z-XHB6NlFHGZC4ipdY" alt='' className='absolute w-16 h-16 rounded-full border-2 ml-3'/>
                            <CardHeader className='ml-16 p-0'>
                                <CardTitle className='text-lg'>Resident</CardTitle>
                                <CardDescription className='text-sm'>NYC Tech Talent Pipeline · Apprenticeship</CardDescription>
                                <CardDescription className='text-sm'>Jun 2023 - Sep 2023 · 4 mos</CardDescription>
                            </CardHeader>
                        </div>
                        <div className='flex items-center'>
                            <div className='border-r-2 h-32 w-11 dark:border-r-slate-100 max-lg:border-0'></div>
                            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQF7TXqENvVRCw/company-logo_100_100/company-logo_100_100/0/1648048020312/brooklyn_college_logo?e=1740009600&v=beta&t=x4FJ_E_EJ6BXMQAQB2GoOIVSzqmBj9Wp7_sXYonsgzw" alt='' className='absolute w-16 h-16 rounded-full border-2 ml-3'/>
                            <CardHeader className='ml-16 p-0'>
                                <CardTitle className='text-lg'>Brooklyn College</CardTitle>
                                <CardDescription className='text-sm'>Bachelor's Degree · Computer Science</CardDescription>
                                <CardDescription className='text-sm'>Aug 2020 - May 2024</CardDescription>
                            </CardHeader>
                        </div>
                    </Card>
                </div>
            }
        </div>

    );
};

export default Experience;
