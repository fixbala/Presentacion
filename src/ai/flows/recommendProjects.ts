import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const recommendProjectsFlow = ai.defineFlow(
  {
    name: 'recommendProjectsFlow',
    inputSchema: z.object({
      objective: z.string(),
      projects: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          description: z.string(),
          longDescription: z.string(),
          technologies: z.array(z.string()),
        })
      ),
      language: z.string().optional(),
    }),
    outputSchema: z.object({
      recommendations: z.array(
        z.object({
          id: z.string(),
          reason: z.string(),
        })
      ),
    }),
  },
  async ({objective, projects, language}) => {
    const llm = ai.model('googleai/gemini-2.5-flash');

    const projectText = projects
      .map(
        (p) =>
          `ID: ${p.id}\nTitle: ${p.title}\nDescription: ${p.longDescription}\nTechnologies: ${p.technologies.join(', ')}`
      )
      .join('\n\n---\n\n');

    const reasoningLanguage = language === 'en' ? 'English' : 'Spanish';

    const prompt = `
      You are an expert tech recruiter and portfolio reviewer. A user will provide their objective for viewing a developer's portfolio.
      Your task is to recommend the top 2-3 most relevant projects from the developer's portfolio that align with the user's objective.
      The user is ${reasoningLanguage}-speaking, so all your reasoning must be in ${reasoningLanguage}.

      User's Objective: "${objective}"

      Available Projects:
      ${projectText}

      Based on the user's objective, analyze the available projects and provide a list of recommended project IDs along with a brief, compelling reason for each recommendation.
      The reason should be short, 1-2 sentences, and explain why that specific project is a great fit for the user's interests. The reason must be in ${reasoningLanguage}.

      Output the result in a valid JSON format with a single key "recommendations" which is an array of objects. Each object must have "id" and "reason" keys.
      Example (if in Spanish):
      {
        "recommendations": [
          { "id": "p1", "reason": "Este proyecto demuestra sólidas habilidades de frontend con React, lo cual es crucial para el rol enfocado en UI/UX que estás buscando." },
          { "id": "p2", "reason": "La implementación full-stack aquí demuestra capacidades de desarrollo de extremo a extremo, incluida la gestión de bases de datos, lo que se alinea con tu necesidad de un desarrollador versátil." }
        ]
      }
      Example (if in English):
      {
        "recommendations": [
          { "id": "p1", "reason": "This project demonstrates strong frontend skills with React, which is crucial for the UI/UX focused role you're looking for." },
          { "id": "p2", "reason": "The full-stack implementation here shows end-to-end development capabilities, including database management, aligning with your need for a versatile developer." }
        ]
      }
    `;

    const result = await llm.generate({
      prompt,
      output: {format: 'json'},
    });

    const output = result.output();
    if (!output) {
      throw new Error('No output from LLM');
    }

    const jsonString = output.replace(/```json\n?/g, '').replace(/\n?```/g, '');

    try {
      const parsed = JSON.parse(jsonString);
      const validation = z.object({
        recommendations: z.array(
          z.object({
            id: z.string(),
            reason: z.string(),
          })
        ),
      }).safeParse(parsed);

      if (!validation.success) {
        console.error("LLM output validation failed", validation.error);
        throw new Error("LLM output is not in the expected format.");
      }
      
      return validation.data;
    } catch (e) {
      console.error("Failed to parse LLM JSON output:", e);
      throw new Error("Failed to process recommendation response.");
    }
  }
);
