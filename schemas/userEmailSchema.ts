import { z } from 'zod';

export const EMAIL_SELECTION = {
  MARKETING: 'marketingInformationOnly',
  OPENSOURCE: 'openSourceInformationOnly',
  EVERYTHING: 'allTypesOfEmails'
} as const; // as const = need the actual strings

export type EmailChoiceType =
  (typeof EMAIL_SELECTION)[keyof typeof EMAIL_SELECTION];

export const emailChoiceValidationSchema = z.object({
  Name: z.string().min(1, 'Name is required'),
  Email: z.string().email(),
  EmailChoice: z.enum([
    EMAIL_SELECTION.MARKETING,
    EMAIL_SELECTION.OPENSOURCE,
    EMAIL_SELECTION.EVERYTHING
  ])
});

export type EmailChoiceSchema = z.infer<typeof emailChoiceValidationSchema>;
