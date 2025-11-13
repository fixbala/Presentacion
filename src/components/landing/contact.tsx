'use client';
import { socialLinks } from '@/lib/data';
import { Card, CardContent } from '../ui/card';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { WhatsappIcon } from '../icons';
import { useTranslation } from '@/context/language-context';

export function Contact() {
  const { t } = useTranslation();
  const email = socialLinks.find(link => link.name === 'Email');
  const github = socialLinks.find(link => link.name === 'GitHub');
  const linkedin = socialLinks.find(link => link.name === 'LinkedIn');
  const whatsapp = socialLinks.find(link => link.name === 'WhatsApp');

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-glow-primary">
            {t('contact.title_section')}
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            {t('contact.description')}
          </p>
        </div>
        <Card className="max-w-md mx-auto mt-12 p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <CardContent className="p-0">
            <div className="space-y-6">
              {email && (
                <a href={email.href} className="group flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-primary/5">
                  <Mail className="w-6 h-6 text-accent transition-transform group-hover:scale-110 icon-glow" />
                  <span className="text-lg text-foreground/90 group-hover:text-primary group-hover:font-medium">
                    ipfixbala@gmail.com
                  </span>
                </a>
              )}
              {whatsapp && (
                <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-primary/5">
                  <WhatsappIcon className="w-6 h-6 text-accent transition-transform group-hover:scale-110 icon-glow" />
                  <span className="text-lg text-foreground/90 group-hover:text-primary group-hover:font-medium">(+57) 3043990600</span>
                </a>
              )}
              
              <div className="flex justify-center gap-4 pt-4 border-t border-border">
                {github && (
                  <Button variant="outline" size="icon" asChild className="transform transition-transform hover:scale-110 hover:bg-accent/10">
                    <a href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5 text-foreground/80 group-hover:text-accent" />
                    </a>
                  </Button>
                )}
                 {linkedin && (
                  <Button variant="outline" size="icon" asChild className="transform transition-transform hover:scale-110 hover:bg-accent/10">
                    <a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 text-foreground/80 group-hover:text-accent" />
                    </a>
                  </Button>
                )}
                {whatsapp && (
                    <Button variant="outline" size="icon" asChild className="transform transition-transform hover:scale-110 hover:bg-accent/10">
                        <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsappIcon className="h-5 w-5 text-foreground/80 group-hover:text-accent" />
                        </a>
                    </Button>
                )}
              </div>

               <Button asChild size="lg" className="w-full transition-transform hover:scale-105">
                <a href="/CV.pdf" download="CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  {t('contact.download_cv')}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
