import { projects } from '@/lib/data';
import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Mis Proyectos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Aquí hay una selección de proyectos en los que he trabajado.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
