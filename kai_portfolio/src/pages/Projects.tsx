import react from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/card';

const Projects = () => {

    return (
        <div className='my-16 mx-8'>
            <h1 className='font-semibold text-2xl text-center'>Projects:</h1>
            <div className='grid grid-cols-2 gap-4 mt-7'>
                <div className='bg-customWhite p-2 border-2 shadow-lg'>
                    <h1 className='text-2xl font-bold'>Project 1</h1>
                    <p className='text-lg'>Description</p>
                </div>
                <div className='bg-customWhite p-2 border-2 shadow-lg'>
                    <h1 className='text-2xl font-bold'>Project 2</h1>
                    <p className='text-lg'>Description</p>
                </div>
                <div className='bg-customWhite p-2'>
                    <h1 className='text-2xl font-bold'>Project 3</h1>
                    <p className='text-lg'>Description</p>
                </div>
            </div>
        </div>
    );

};

export default Projects;