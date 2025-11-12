'use client';
import { about } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-20">
          <div className="bg-accent/10 text-accent font-medium py-1 px-4 rounded-full mb-4 inline-block font-headline">
            {t('hero.availability')}
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight animate-glow">
            {t('about.introduction')}{' '}
            <span className="text-accent animate-glow-accent">{t('about.name')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                {t('hero.contact_button')}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                {t('hero.projects_button')}
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
