import { IconType } from "react-icons";
import { IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BiLogoJavascript, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";


export const skillSet: Record<string, IconType> = {
    'JavaScript': BiLogoJavascript,
    'TypeScript': BiLogoTypescript,
    'Python': IoLogoPython,
    'React': IoLogoReact,
    'Redux': SiRedux,
    'TailwindCSS': SiTailwindcss,
    'Node.js': IoLogoNodejs,
    'Express.js': SiExpress,
    'PostgreSQL': BiLogoPostgresql,

}