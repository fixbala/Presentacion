'use client';
import { certifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, GraduationCap } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

export function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-glow-primary">
            {t('certifications.title_section')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            {t('certifications.description')}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          {t('certifications.items', { returnObjects: true }).map((cert: {source: string, courses: string[]}) => (
            <Card key={cert.source} className="group w-full max-w-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/80 hover:border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="text-accent transition-transform duration-300 group-hover:scale-110 icon-glow" />
                  <span className="font-headline text-primary">{cert.source}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cert.courses.map((course: string) => (
                    <li key={course} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent/80 mt-1 shrink-0 icon-glow" />
                      <span className="text-foreground/90">{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
