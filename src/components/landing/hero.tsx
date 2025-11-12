import { about } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-20">
          <div className="bg-accent/10 text-accent font-medium py-1 px-4 rounded-full mb-4 inline-block font-headline">
            Disponible para trabajar
          </div>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary leading-tight animate-glow">
            {about.introduction}{' '}
            <span className="text-accent animate-glow-accent">{about.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80">
            Un apasionado {about.title} con experiencia en la creación de aplicaciones web modernas y funcionales.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                Contáctame
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                Ver Proyectos
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 z-0">
         <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary to-transparent"></div>
         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/5 rounded-full filter blur-3xl animate-[spin_25s_linear_infinite_reverse]"></div>
      </div>
    </section>
  );
}
