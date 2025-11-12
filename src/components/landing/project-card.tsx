'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

interface ProjectCardProps {
  project: Project;
  highlighted?: boolean;
  reason?: string;
}

export function ProjectCard({ project, highlighted = false, reason }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card className={`flex flex-col h-full transition-all duration-300 group glow-on-hover-accent ${highlighted ? 'border-accent shadow-lg ring-2 ring-accent' : 'hover:-translate-y-1'}`}>
      {reason && (
        <div className="p-3 bg-accent/10 text-accent-foreground text-sm border-b border-accent/20">
            <p className='text-accent'>{reason}</p>
        </div>
      )}
      <CardHeader>
        <div className="aspect-[3/2] w-full overflow-hidden rounded-md mb-4">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.image.hint}
          />
        </div>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
