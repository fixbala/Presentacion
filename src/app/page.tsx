'use client';
import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';
import { Hero } from '@/components/landing/hero';
import { Projects } from '@/components/landing/projects';
import { Skills } from '@/components/landing/skills';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Recommendation } from '@/components/landing/recommendation';
import { Toaster } from '@/components/ui/toaster';
import { Certifications } from '@/components/landing/certifications';
import { Experience } from '@/components/landing/experience';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.2] dark:bg-grid-white/[0.05] z-0">
      </div>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Recommendation />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
