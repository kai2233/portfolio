import { IconType } from "react-icons";
import { IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BiLogoJavascript, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";


export const skillSet: Record<string, IconType> = {
    'javascript': BiLogoJavascript,
    'typescript': BiLogoTypescript,
    'python': IoLogoPython,
    'react': IoLogoReact,
    'redux': SiRedux,
    'tailwindcss': SiTailwindcss,
    'node.js': IoLogoNodejs,
    'express.js': SiExpress,
    'postgresql': BiLogoPostgresql,

}