'use client';
import { experiences } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Briefcase } from "lucide-react";
import { useTranslation } from "@/context/language-context";

export function ExperienceTimeline() {
    const { t } = useTranslation();
    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/70">
            {t('experiences', { returnObjects: true }).map((exp: any, index: number) => (
                <div key={index} className="relative flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <Card className="transform transition-transform duration-300 hover:-translate-y-1 glow-on-hover-accent">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <CardTitle className="font-headline text-lg text-primary">{exp.role}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{exp.period}</p>
                                </div>
                                <CardDescription>{exp.company}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80">{exp.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
}
