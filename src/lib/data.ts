import type { Project, Skill, Certification, Experience } from './types';
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
  Soy una persona proactiva, organizado y responsable, con buenas relaciones interpersonales. Siempre tengo la mejor disposición para la realización de mis labores.`
};

export const experiences: Experience[] = [
    {
        company: 'SC SOLUTIONS',
        role: 'Ingeniero de Sistemas',
        period: 'Octubre 2024 - Actualidad',
        description: 'Instalacion y manejo de infraestrucutra TI. Brindar soporte y transferencia de conocimiento al personal en el uso de aplicaciones y herramientas tecnológicas.'
    },
    {
        company: 'LOGOSOFT SOLUTIONS S.A.',
        role: 'Desarrollador de Software',
        period: 'Abril 2024 - Octubre 2024',
        description: 'Desarrollé y mantuve software crítico para transacciones bancarias. Levanté requerimientos para la integración de nuevas funciones transaccionales. Gestioné y administré plataformas transaccionales con alta disponibilidad.'
    },
    {
        company: 'CULTIVARTECH',
        role: 'Desarrollador Backend',
        period: 'Enero 2023 - Abril 2024',
        description: 'Desarrollé y optimicé la estructura del backend, levanté y documenté requerimientos funcionales, asegurando el cumplimiento de los objetivos del proyecto. Implementé microservicios escalables y desarrollé la estructura del frontend con Angular.'
    }
];

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
    title: 'Dashboard de Análisis de Datos en Tiempo Real',
    description: 'Dashboard interactivo para la visualización de datos en tiempo real.',
    longDescription: 'Desarrollo de un dashboard interactivo para la visualización de datos en tiempo real, utilizando WebSockets para una comunicación bidireccional eficiente.',
    technologies: ['Angular', 'Spring Boot', 'WebSocket', 'Kafka'],
    link: 'https://github.com/santiagomartinez12',
    image: getImage('project-dashboard'),
  },
  {
    id: 'p2',
    title: 'Sistema de Autenticación y Autorización',
    description: 'Sistema de autenticación y autorización basado en roles.',
    longDescription: 'Implementación de un sistema de autenticación y autorización basado en roles para una aplicación empresarial, asegurando el acceso a los recursos de la aplicación.',
    technologies: ['Spring Security', 'OAuth 2.0', 'JWT'],
    link: 'https://github.com/santiagomartinez12',
    image: getImage('project-auth'),
  },
  {
    id: 'p3',
    title: 'API Gateway para Arquitectura de Microservicios',
    description: 'API Gateway para una arquitectura de microservicios.',
    longDescription: 'Desarrollo de un API Gateway para una arquitectura de microservicios, centralizando el enrutamiento de solicitudes, la autenticación y el monitoreo de servicios.',
    technologies: ['Spring Cloud Gateway', 'Netflix Eureka'],
    link: 'https://github.com/santiagomartinez12',
    image: getImage('project-gateway'),
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
