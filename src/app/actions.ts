'use server';
import { run } from 'genkit';
import { recommendProjectsFlow } from '@/ai/flows/recommendProjects';
import { projects } from '@/lib/data';
import { z } from 'zod';

// AI Recommendation Action
const recommendationSchema = z.object({
  objective: z.string().min(10, "Por favor, describe lo que buscas con más detalle."),
});

type RecommendationState = {
  message?: string;
  errors?: {
    objective?: string[];
  };
  recommendations?: { id: string; reason: string }[];
};

export async function getProjectRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = recommendationSchema.safeParse({
    objective: formData.get('objective'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await run(recommendProjectsFlow, {
      objective: validatedFields.data.objective,
      projects: projects.map(({ id, title, description, longDescription, technologies }) => ({
        id,
        title,
        description,
        longDescription,
        technologies,
      })),
    });

    return {
      message: 'Success',
      recommendations: result.recommendations,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Ocurrió un error al generar las recomendaciones. Por favor, inténtalo de nuevo.',
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
