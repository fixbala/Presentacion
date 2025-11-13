import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslation } from '@/context/language-context';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-transparent border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-headline font-bold text-primary">{t('about.name')}</h3>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {t('footer.rights')}</p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.filter(link => link.name !== 'Email').map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
