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
    description: 'Un dashboard interactivo y dinámico para la visualización y monitoreo de datos en tiempo real.',
    longDescription: 'Este proyecto consistió en el desarrollo de un dashboard interactivo que permite la visualización y monitoreo de flujos de datos en tiempo real. Utilizando WebSockets para una comunicación bidireccional eficiente, la aplicación está respaldada por una infraestructura robusta con Spring Boot y Kafka, lo que garantiza un procesamiento de eventos de alto rendimiento y baja latencia. La interfaz, desarrollada en Angular, ofrece una experiencia de usuario fluida y responsiva.',
    technologies: ['Angular', 'Spring Boot', 'WebSocket', 'Kafka'],
    link: 'https://github.com/santiagomartinez12',
    image: getImage('project-dashboard'),
  },
  {
    id: 'p2',
    title: 'Sistema de Autenticación y Autorización',
    description: 'Una solución de seguridad integral basada en roles para aplicaciones empresariales.',
    longDescription: 'Implementación de un sistema de seguridad completo para una aplicación empresarial. Se utilizó Spring Security para gestionar la autenticación y autorización basada en roles, protegiendo los recursos de la aplicación de accesos no autorizados. La solución integra estándares como OAuth 2.0 y JSON Web Tokens (JWT) para asegurar las comunicaciones y el acceso a las APIs.',
    technologies: ['Spring Security', 'OAuth 2.0', 'JWT', 'PostgreSQL'],
    link: 'https://github.com/santiagomartinez12',
    image: getImage('project-auth'),
  },
  {
    id: 'p3',
    title: 'API Gateway para Arquitectura de Microservicios',
    description: 'Un punto de entrada centralizado para gestionar una arquitectura de microservicios.',
    longDescription: 'Desarrollo de un API Gateway que actúa como punto de entrada único para una arquitectura de microservicios. Este componente centraliza el enrutamiento de solicitudes, la autenticación y el monitoreo de los diferentes servicios, simplificando la comunicación y mejorando la seguridad y escalabilidad del sistema. Se implementó utilizando Spring Cloud Gateway y se integró con Netflix Eureka para el descubrimiento de servicios.',
    technologies: ['Spring Cloud Gateway', 'Netflix Eureka', 'Docker'],
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
