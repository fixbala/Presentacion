import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';
import { Hero } from '@/components/landing/hero';
import { Projects } from '@/components/landing/projects';
import { Skills } from '@/components/landing/skills';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Recommendation } from '@/components/landing/recommendation';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Recommendation />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
