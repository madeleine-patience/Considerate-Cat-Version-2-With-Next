import { z } from 'zod';

export const EMAIL_SELECTION = Object.freeze({
  MARKETING: 'marketingInformationOnly',
  OPENSOURCE: 'openSourceInformationOnly',
  EVERYTHING: 'allTypesOfEmails'
});

export const emailChoiceValidationSchema = z.object({
  Name: z.string().nonempty('Name is required'),
  Email: z.string().email(),
  EmailChoice: z.nativeEnum(EMAIL_SELECTION)
});

export type EmailChoiceSchema = z.infer<typeof emailChoiceValidationSchema>;
