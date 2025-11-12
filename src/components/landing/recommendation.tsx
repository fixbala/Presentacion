'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { BotMessageSquare, Sparkles, Lightbulb, Users, Wrench, GitMerge } from 'lucide-react';
import { getProjectStructure, type ProjectStructureState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useTranslation } from '@/context/language-context';

const initialState: ProjectStructureState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? t('architect.button_pending') : t('architect.button_cta')}
      <Sparkles className="ml-2 h-5 w-5" />
    </Button>
  );
}

export function Recommendation() {
  const [state, formAction] = useActionState(getProjectStructure, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { t, language } = useTranslation();

  return (
    <section id="recommendation" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3 text-glow-primary">
            <BotMessageSquare className="w-10 h-10 text-accent icon-glow" />
            {t('architect.title_section')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            {t('architect.description')}
          </p>
        </div>

        <Card className="mt-12 max-w-3xl mx-auto p-6 md:p-8">
          <CardContent className="p-0">
            <form ref={formRef} action={formAction} className="space-y-4">
              <input type="hidden" name="language" value={language} />
              <div>
                <Label htmlFor="projectDescription" className="text-lg font-medium">{t('architect.form_label')}</Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder={t('architect.form_placeholder')}
                  className="mt-2 min-h-[100px]"
                  required
                />
                {state?.errors?.projectDescription && (
                  <p className="mt-1 text-sm text-destructive">{state.errors.projectDescription[0]}</p>
                )}
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
        
        {state?.message && state.message !== 'Success' && (
          <p className="mt-4 text-center text-destructive">{state.message}</p>
        )}
        
        {state?.projectPlan && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary text-center text-glow-primary">{state.projectPlan.projectName}</h3>
            <p className="mt-2 text-center text-lg text-muted-foreground">{state.projectPlan.projectSummary}</p>

            <div className="mt-8 space-y-8">
              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Wrench className="text-accent"/> {t('architect.results_technologies')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Frontend</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {state.projectPlan.technologies.frontend.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  </div>
                   <div>
                    <h4 className="font-semibold">Backend</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {state.projectPlan.technologies.backend.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  </div>
                   <div>
                    <h4 className="font-semibold">{t('architect.results_database')}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {state.projectPlan.technologies.database.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  </div>
                   <div>
                    <h4 className="font-semibold">DevOps</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {state.projectPlan.technologies.devops.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Methodology */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><GitMerge className="text-accent"/> {t('architect.results_methodology')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-primary">{state.projectPlan.methodology.name}</h4>
                  <p className="mt-1 text-muted-foreground">{state.projectPlan.methodology.description}</p>
                </CardContent>
              </Card>
              
              {/* Team */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Users className="text-accent"/> {t('architect.results_team')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.projectPlan.team.map(member => (
                    <div key={member.role}>
                      <h4 className="font-semibold text-primary">{member.role}</h4>
                      <p className="mt-1 text-muted-foreground">{member.responsibilities}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
