import react from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/card';
import { projects } from '../constants';

const Projects = () => {

    return (
        <div className='my-16 mx-8'>
            <h1 className='font-semibold text-2xl text-center dark:text-slate-100'>Projects:</h1>
            <div className='columns-2 gap-1'>
                {projects.map((project) => {
                    return (
                        <Card className='break-inside-avoid dark:border-slate-100 mt-1'>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>
                                    {project.deployment ? (
                                        <a
                                            href={project.deployment}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='block overflow-hidden group'
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='w-full aspect-square object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                                        />
                                    )}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>{project.description}</CardContent>
                            <CardContent className='flex flex-wrap gap-2 mt-0'>{project.skills.map((skill) => {
                                return (
                                    <span className='bg-gray-200 dark:bg-slate-700 dark:text-white px-2 py-1 rounded-full text-sm'>{skill}</span>
                                );
                            })}</CardContent>
                            <CardFooter className='gap-2'>
                                {/* {Object.keys(project.github).map((link) => {
                                    return (
                                        <a href={project.github[link]} target='_blank' rel='noreferrer' className='border-2 rounded-lg'>{link}</a>
                                    );
                                })
                                } */}
                                {/* {project.deployment &&
                                    <a
                                        href={project.deployment}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='w-full border-2 rounded-lg'
                                    >
                                        Visit
                                    </a>
                                } */}
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );

};

export default Projects;