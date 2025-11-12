import type { Project, Skill, Certification } from './types';
import { Database, FileCode, Server, BotMessageSquare, Link as LinkIcon, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { ReactIcon, ReduxIcon, WhatsappIcon } from '@/components/icons';
import { placeholderImages } from './placeholder-images.json';

const getImage = (id: string) => {
    const image = placeholderImages.find((img) => img.id === id);
    if (!image) {
      return {
        src: 'https://picsum.photos/seed/placeholder/600/400',
        width: 600,
        height: 400,
        alt: 'Placeholder Image',
        hint: 'abstract',
      };
    }
    return {
        src: image.imageUrl,
        width: image.width,
        height: image.height,
        alt: image.description,
        hint: image.imageHint,
    };
  };

export const about = {
  name: 'Santiago Martínez Ayala',
  title: 'Desarrollador de Software',
  introduction: "Hola, Soy Santiago",
  description: `Soy un desarrollador de Software de 25 años, con solidos conocimientos en el desarrollo de aplicaciones web, he trabajado con tecnologias como React, Redux, Node.js, Express, PostgreSQL, Sequelize.
  Soy una persona proactiva, organizado y responsable, con buenas relaciones interpersonales. Siempre tengo la mejor disposición para la realización de mis labores.`,
  experience: {
    title: "Experiencia Profesional",
    company: "No Country",
    role: "FullStack Developer",
    period: "Noviembre 2023 - Diciembre 2023",
    description: "Participe en la simulación de un proyecto de una aplicación web de un e-commerce donde teniamos que hacerla en un periodo de 3 semanas, en donde desarrolle la parte del Back-end, el Login, la base de datos, los modelos y controladores de los mismos."
  }
};

export const skills: Skill[] = [
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: FileCode },
  { name: 'JavaScript', icon: FileCode },
  { name: 'React', icon: ReactIcon },
  { name: 'Redux', icon: ReduxIcon },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Sequelize', icon: Database },
];

export const certifications: Certification[] = [
    {
      source: 'UDEMY',
      courses: [
        'Spring Framework y Spring Boot',
        'Base de Datos MySQL Server',
        'C# y SQL Server',
        'C# y Microsoft SQL Server',
        'Universidad Angular',
      ],
    },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Henry Videogames',
    description: 'Página de Videojuegos con temática de la Api de Rawg.io.',
    longDescription: 'Una Single Page Application (SPA) que consume la API de videogames rawg.io. Permite a los usuarios buscar, filtrar y ordenar videojuegos, así como ver detalles y crear nuevos registros en la base de datos. Demuestra un manejo completo del stack PERN (PostgreSQL, Express, React, Node.js).',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    link: 'https://github.com/santiagomartinez12/PI-Videogames-main',
    image: getImage('project-videogames'),
  },
  {
    id: 'p2',
    title: 'Food App',
    description: 'Single Page Aplication de comidas.',
    longDescription: 'Aplicación de página única (SPA) sobre recetas de comida. Los usuarios pueden buscar recetas, filtrarlas por tipo de dieta, ordenarlas alfabéticamente o por puntuación de salud. También incluye un formulario controlado para crear nuevas recetas. El proyecto está construido con React para el frontend y Node.js con Express para el backend.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/santiagomartinez12/PI-Food-main',
    image: getImage('project-food'),
  },
  {
    id: 'p3',
    title: 'Pokemon App',
    description: 'Pagina de Pokemones, proyecto individual de Henry.',
    longDescription: 'Proyecto individual desarrollado durante el bootcamp de Henry. Es una Single Page Application (SPA) que permite a los usuarios explorar una lista de Pokémons, ver sus detalles, buscarlos y crear nuevos Pokémons que se almacenan en una base de datos. Es un proyecto que integra frontend y backend.',
    technologies: ['React', 'Redux', 'CSS', 'Node.js', 'Express'],
    link: 'https://github.com/santiagomartinez12/PI-Pokemon-main',
    image: getImage('project-pokemon'),
  },
  {
    id: 'p4',
    title: 'Rick and Morty App',
    description: 'Aplicación de Rick And Morty con login y favoritos.',
    longDescription: 'Una aplicación interactiva basada en la popular serie "Rick and Morty". Permite a los usuarios explorar personajes de la serie. Incluye funcionalidades de autenticación de usuarios y la capacidad de guardar personajes en una lista de favoritos. Es un excelente ejemplo de una aplicación cliente-servidor con estado persistente.',
    technologies: ['React', 'CSS', 'Express', 'Node.js'],
    link: 'https://github.com/santiagomartinez12/Rick_and_Morty',
    image: getImage('project-rick-morty'),
  },
  {
    id: 'p5',
    title: 'Weather App',
    description: 'App del clima para buscar la temperatura de ciudades.',
    longDescription: 'Una aplicación del clima simple pero funcional. Permite a los usuarios buscar cualquier ciudad del mundo y obtener información meteorológica actualizada en tiempo real, como la temperatura, la humedad y las condiciones del cielo. La aplicación se conecta a una API externa de clima y presenta los datos de una manera clara y fácil de entender.',
    technologies: ['React', 'CSS', 'API'],
    link: 'https://github.com/santiagomartinez12/Weather-App',
    image: getImage('project-weather'),
  },
];

export const navigation = [
    { name: 'Sobre mi', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Recomendador AI', href: '#recommendation' },
    { name: 'Contacto', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/santiagomartinez12', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-mart%C3%ADnez-ayala-42790823a/', icon: Linkedin },
    { name: 'Email', href: 'mailto:santiago.martinez1537@gmail.com', icon: Mail },
    { name: 'WhatsApp', href: 'https://wa.me/573043990600', icon: WhatsappIcon },
];
