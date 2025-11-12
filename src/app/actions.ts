'use server';
import { run } from 'genkit';
import { structureProjectFlow } from '@/ai/flows/structureProject';
import { z } from 'zod';
import { translations } from '@/lib/locales';

// AI Project Structuring Action
const structureProjectSchema = z.object({
  projectDescription: z.string().min(10, "Por favor, describe tu idea de proyecto con más detalle."),
  language: z.string().optional(),
});

export type ProjectStructureState = {
  message?: string;
  errors?: {
    projectDescription?: string[];
  };
  projectPlan?: {
    projectName: string;
    projectSummary: string;
    technologies: {
      frontend: string[];
      backend: string[];
      database: string[];
      devops: string[];
    };
    methodology: {
      name: string;
      description: string;
    };
    team: {
      role: string;
      responsibilities: string;
    }[];
  };
};

export async function getProjectStructure(
  prevState: ProjectStructureState,
  formData: FormData
): Promise<ProjectStructureState> {

  const lang = formData.get('language') === 'en' ? 'en' : 'es';

  const validatedFields = structureProjectSchema.safeParse({
    projectDescription: formData.get('projectDescription'),
    language: lang,
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await run(structureProjectFlow, {
      projectDescription: validatedFields.data.projectDescription,
      language: lang,
    });

    return {
      message: 'Success',
      projectPlan: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Ocurrió un error al generar la estructura del proyecto. Por favor, inténtalo de nuevo.',
    };
  }
}

// Contact Form Action
const contactSchema = z.object({
    name: z.string().min(2, "El nombre es requerido."),
    email: z.string().email("Por favor, introduce un correo electrónico válido."),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type ContactState = {
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success?: boolean;
}

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Por favor, corrige los errores en el formulario.",
        };
    }
    
    // Here you would typically send an email or save to a database.
    // For this example, we'll just simulate a successful submission.
    console.log('Contact form submitted:', validatedFields.data);

    return {
        message: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
        success: true,
    };
}
