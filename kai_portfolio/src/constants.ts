import { IconType } from "react-icons";
import { IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BiLogoJavascript, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiRedux, SiTailwindcss, SiGit, SiPostman, SiSwift, SiGithub} from "react-icons/si";


export const skillSet: Record<string, IconType> = {
    'JavaScript': BiLogoJavascript,
    'TypeScript': BiLogoTypescript,
    'Python': IoLogoPython,
    'React': IoLogoReact,
    'Redux': SiRedux,
    'TailwindCSS': SiTailwindcss,
    'Node.js': IoLogoNodejs,
    'Express.js': SiExpress,
    'Swift': SiSwift,
    'PostgreSQL': BiLogoPostgresql,
    'Git': SiGit,
    'Github': SiGithub,
    'Postman': SiPostman

}

export const email_address:string = 'kaifeng.yu02@gmail.com'

type Project = {
    title: string;
    image: string;
    description: string;
    skills: string[];
    github: {
        [key: string]: string | undefined;
        frontend?: string;
        backend?: string;
    };
    deployment?: string;
}

export const projects: Project[] = [
    {
        title: 'Portfolio',
        image: 'portfolio.png',
        description: 'A personal portfolio that presents my projects and skills.',
        skills: ['TypeScript','React.js', 'TailwindCSS','Shadcn/ui', 'React-Icons'],
        github: {
            frontend: 'https://github.com/kai2233/portfolio',
        },
        deployment: 'https://kaifeng02-portfolio.netlify.app/'
    },
    {
        title: 'FocusEureka',
        image: 'focusEureka.png',
        description: 'A mobile app of a social platform where user can discovery interesting spot or amazing events within their city.',
        skills: ['Swift','SwiftUI', 'UIkit', 'Firebase', 'Node.js', 'Express.js', 'Sequelize.js', 'PostgreSQL'],
        github: {
            frontend: 'https://github.com/yuzchen7/FocusEureka_frontend',
            backend: 'https://github.com/yuzchen7/FocusEureka_backend'
        }
    },
    {
        title: 'Repo Analytics',
        image: 'repoAnalytics.png',
        description: 'A website that measures the performance of project development process on Github.',
        skills: ['Javascript','React.js', 'Node.js', 'Octokit.js', 'Chart.js', 'Express.js', 'Axios'],
        github: {
            frontend: 'https://github.com/karechob/Capstone-II-frontend',
            backend: 'https://github.com/karechob/Capstone-II-backend'
        },
        deployment: 'https://repoanalytics.vercel.app/'

    },
    {
        title: 'Ticket Wingman',
        image: 'ticketWingman.png',
        description: 'A websites that allows for a more user-friendly flight search experience through travel advice and guidance.',
        skills: ['Javascript','React.js', 'Node.js', 'Express.js', 'Redux', 'Sequelize.js','PostgreSQL', 'Axios', 'Chart.js'],
        github: {
            frontend: 'https://github.com/9Mohamedismail/TicketWingman',
            backend: 'https://github.com/kai2233/TicketWingMan_backend'
        },
        deployment: 'https://ticket-wingman.netlify.app/'
    },
]