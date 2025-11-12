'use server';

/**
 * @fileOverview Implements an AI-powered project recommendation flow.
 *
 * This flow takes a user's description of their interests or professional
 * background and recommends the most relevant projects from the portfolio.
 *
 * @exported recommendProjects - The function to trigger the project recommendation flow.
 * @exported RecommendProjectsInput - The input type for the recommendProjects function.
 * @exported RecommendProjectsOutput - The output type for the recommendProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the recommendation flow
const RecommendProjectsInputSchema = z.object({
  userDescription: z
    .string()
    .describe(
      'A description of the user\'s interests, professional background, or needs.'
    ),
  projects: z
    .array(z.string())
    .describe('Array of available projects in the portfolio'),
});
export type RecommendProjectsInput = z.infer<typeof RecommendProjectsInputSchema>;

// Define the output schema for the recommendation flow
const RecommendProjectsOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe(
      'An array of the most relevant projects from the portfolio, based on the user description.'
    ),
  reasoning: z
    .string()
    .describe('Explanation of why these projects were recommended.'),
});
export type RecommendProjectsOutput = z.infer<typeof RecommendProjectsOutputSchema>;

// Exported function to trigger the recommendation flow
export async function recommendProjects(
  input: RecommendProjectsInput
): Promise<RecommendProjectsOutput> {
  return recommendProjectsFlow(input);
}

// Define the prompt for the AI model
const recommendProjectsPrompt = ai.definePrompt({
  name: 'recommendProjectsPrompt',
  input: {schema: RecommendProjectsInputSchema},
  output: {schema: RecommendProjectsOutputSchema},
  prompt: `Based on the following user description:\n\n{{userDescription}}\n\nAnd the following list of available projects:\n\n{{#each projects}}- {{this}}\n{{/each}}\n\nRecommend the most relevant projects and explain your reasoning for each recommendation.\n\nEnsure that the output is a JSON object that adheres to the RecommendProjectsOutputSchema schema, which requires a 'recommendedProjects' field (array of string) and a 'reasoning' field (string).`,
});

// Define the Genkit flow
const recommendProjectsFlow = ai.defineFlow(
  {
    name: 'recommendProjectsFlow',
    inputSchema: RecommendProjectsInputSchema,
    outputSchema: RecommendProjectsOutputSchema,
  },
  async input => {
    const {output} = await recommendProjectsPrompt(input);
    return output!;
  }
);
