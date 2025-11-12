'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { about, navigation } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import { LanguageToggle } from '../language-toggle';
import { useTranslation } from '@/context/language-context';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 md:flex-none">
            <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-accent transition-colors text-glow-primary glow-on-hover-accent rounded-md p-2">
              SMA
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {t('navigation', { returnObjects: true }).map((item: {name: string, href: string}) => (
              <Button variant="ghost" asChild key={item.name} className="glow-on-hover-accent">
                <a
                  href={item.href}
                  className="font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              </Button>
            ))}
            <div className="glow-on-hover-accent rounded-md">
              <ThemeToggle />
            </div>
            <div className="glow-on-hover-accent rounded-md">
              <LanguageToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-background p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl font-bold text-primary">Menu</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4">
            {t('navigation', { returnObjects: true }).map((item: {name: string, href: string}) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
