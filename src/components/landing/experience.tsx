'use client';
import { ExperienceTimeline } from './experience-timeline';
import { useTranslation } from '@/context/language-context';

export function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-12 text-center text-glow-primary">
                {t('experience.title_section')}
            </h2>
            <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
