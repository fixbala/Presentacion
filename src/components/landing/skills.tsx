import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Habilidades y Tecnologías
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Estas son algunas de las tecnologías con las que he trabajado en mis proyectos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                <skill.icon className="h-10 w-10 md:h-12 md:w-12 text-primary transition-colors duration-300 group-hover:text-accent" />
                <p className="mt-4 text-sm md:text-base font-medium text-center text-foreground group-hover:text-primary">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
