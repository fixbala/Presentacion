'use client';
import { socialLinks } from '@/lib/data';
import { Card, CardContent } from '../ui/card';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '../ui/button';

export function Contact() {
  const email = socialLinks.find(link => link.name === 'Email');

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Ponte en contacto conmigo a través de los siguientes medios.
          </p>
        </div>
        <Card className="max-w-md mx-auto mt-12 p-6 md:p-8">
          <CardContent className="p-0">
            <div className="space-y-6">
              {email && (
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <a href={email.href} className="text-lg hover:underline">
                    {email.href.replace('mailto:', '')}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg">(+57) 3043990600</span>
              </div>
              
              <div className="flex justify-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>

               <Button asChild size="lg" className="w-full">
                <a href="/santiago-martinez-cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}