import { skillsByCategory } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Habilidades y Tecnologías
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Mi conjunto de herramientas técnicas para construir soluciones robustas y escalables.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {skillsByCategory.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-headline text-primary hover:text-accent transition-colors data-[state=open]:text-accent">
                  <div className="flex items-center gap-4">
                    <category.icon className="h-6 w-6" />
                    <span>{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {category.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-base px-4 py-2 transition-transform hover:scale-105">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
