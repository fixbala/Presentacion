'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { BotMessageSquare, Sparkles } from 'lucide-react';
import { getProjectRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './project-card';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/types';
import { Card, CardContent } from '../ui/card';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Analizando...' : 'Obtener Recomendación'}
      <Sparkles className="ml-2 h-5 w-5" />
    </Button>
  );
}

export function Recommendation() {
  const [state, formAction] = useActionState(getProjectRecommendations, initialState);
  const [recommendedProjects, setRecommendedProjects] = useState<Project[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.recommendations) {
      const recommended = state.recommendations.map(rec => {
        const project = projects.find(p => p.id === rec.id);
        return { ...project, reason: rec.reason };
      }).filter(Boolean) as (Project & { reason: string })[];
      setRecommendedProjects(recommended);
    }
  }, [state.recommendations]);

  return (
    <section id="recommendation" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3">
            <BotMessageSquare className="w-10 h-10 text-accent" />
            Recomendador de Proyectos con IA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            ¿No estás seguro de qué proyecto ver? Describe lo que buscas (por ejemplo, "un proyecto con un backend robusto" o "una app con una gran UI") y la IA te sugerirá los más relevantes.
          </p>
        </div>

        <Card className="mt-12 max-w-3xl mx-auto p-6 md:p-8">
          <CardContent className="p-0">
            <form ref={formRef} action={formAction} className="space-y-4">
              <div>
                <Label htmlFor="objective" className="text-lg font-medium">Tu objetivo</Label>
                <Textarea
                  id="objective"
                  name="objective"
                  placeholder="Ej: Busco un desarrollador con experiencia en React y manejo de APIs externas..."
                  className="mt-2 min-h-[100px]"
                  required
                />
                {state?.errors?.objective && (
                  <p className="mt-1 text-sm text-destructive">{state.errors.objective[0]}</p>
                )}
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
        
        {state.message && state.message !== 'Success' && (
          <p className="mt-4 text-center text-destructive">{state.message}</p>
        )}
        
        {recommendedProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary text-center">Proyectos Recomendados para ti</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  highlighted={true}
                  reason={(project as any).reason}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
