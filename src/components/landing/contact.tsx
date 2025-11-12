'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Mail } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Éxito",
          description: state.message,
        });
        formRef.current?.reset();
      } else if (state.errors) {
        toast({
          title: "Error",
          description: state.message || "Por favor, corrige los errores.",
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Contáctame
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? Déjame un mensaje.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto mt-12 p-6 md:p-8">
          <CardContent className="p-0">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" type="text" placeholder="Tu nombre" />
                {state?.errors?.name && (
                  <p className="text-sm text-destructive">{state.errors.name[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" />
                {state?.errors?.email && (
                  <p className="text-sm text-destructive">{state.errors.email[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Tu mensaje aquí..." className="min-h-[120px]" />
                {state?.errors?.message && (
                  <p className="text-sm text-destructive">{state.errors.message[0]}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
