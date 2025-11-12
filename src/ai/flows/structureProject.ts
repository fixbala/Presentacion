import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ProjectPlanSchema = z.object({
  projectName: z.string().describe("A creative and fitting name for the project."),
  projectSummary: z.string().describe("A concise one-paragraph summary of the project's purpose and main features."),
  technologies: z.object({
    frontend: z.array(z.string()).describe("List of frontend technologies and frameworks. E.g., ['React', 'Tailwind CSS']"),
    backend: z.array(z.string()).describe("List of backend technologies and frameworks. E.g., ['Node.js', 'Express']"),
    database: z.array(z.string()).describe("List of database technologies. E.g., ['PostgreSQL', 'Redis']"),
    devops: z.array(z.string()).describe("List of DevOps and deployment technologies. E.g., ['Docker', 'AWS', 'GitHub Actions']"),
  }),
  methodology: z.object({
    name: z.string().describe("The name of the recommended development methodology. E.g., 'Scrum'"),
    description: z.string().describe("A brief explanation of why this methodology is suitable for the project."),
  }),
  team: z.array(z.object({
    role: z.string().describe("The job title for a recommended team member. E.g., 'Frontend Developer'"),
    responsibilities: z.string().describe("A summary of the key responsibilities for this role."),
  })).describe("A list of essential team members needed to build the project."),
});


export const structureProjectFlow = ai.defineFlow(
  {
    name: 'structureProjectFlow',
    inputSchema: z.object({
      projectDescription: z.string(),
      language: z.string().optional(),
    }),
    outputSchema: ProjectPlanSchema,
  },
  async ({projectDescription, language}) => {
    const llm = ai.model('googleai/gemini-2.5-flash');

    const reasoningLanguage = language === 'en' ? 'English' : 'Spanish';

    const prompt = `
      You are an expert Solution Architect and Tech Lead. A user will provide a description of a software project they want to build.
      Your task is to generate a comprehensive project plan based on this description. The plan must be detailed and practical.
      The user is ${reasoningLanguage}-speaking, so all your output must be in ${reasoningLanguage}.

      User's Project Idea: "${projectDescription}"

      Based on the user's idea, create a full project plan with the following components:
      1.  **Project Name**: A creative and descriptive name for the project.
      2.  **Project Summary**: A concise, one-paragraph summary explaining the project's purpose and key features.
      3.  **Technologies**: A recommended tech stack, broken down into:
          -   Frontend (e.g., React, Vue, Svelte, Next.js)
          -   Backend (e.g., Node.js, Python/Django, Go, Spring Boot)
          -   Database (e.g., PostgreSQL, MongoDB, Firebase Firestore)
          -   DevOps (e.g., Docker, Kubernetes, AWS/GCP, Vercel, GitHub Actions)
      4.  **Development Methodology**: Recommend a suitable methodology (e.g., Scrum, Kanban, Waterfall) and briefly explain why it's a good fit.
      5.  **Recommended Team**: A list of essential team roles required to build the project (e.g., Project Manager, UI/UX Designer, Backend Developer), including a brief description of their key responsibilities.

      Output the result in a valid, minified JSON format that strictly adheres to the provided Zod schema. Do not include any markdown formatting like \`\`\`json.
    `;

    const result = await llm.generate({
      prompt,
      output: {
        format: 'json',
        schema: ProjectPlanSchema,
      },
    });

    const output = result.output();
    if (!output) {
      throw new Error('No output from LLM');
    }
    
    return output;
  }
);
