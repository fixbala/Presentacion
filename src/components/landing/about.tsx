'use client';
import Image from 'next/image';
import { about } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Briefcase } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

export function About() {
  const profileImage = placeholderImages.find(p => p.id === 'profile-picture');
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square w-full max-w-sm mx-auto">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={t('about.image_alt')}
                  width={profileImage.width}
                  height={profileImage.height}
                  className="rounded-lg object-cover shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
               <div className="absolute -bottom-4 -right-4 bg-primary rounded-lg p-4 text-primary-foreground shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-glow-primary">
              {t('about.title_section')}
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
