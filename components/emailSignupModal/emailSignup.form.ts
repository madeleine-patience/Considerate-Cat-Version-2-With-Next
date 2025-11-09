import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  EMAIL_SELECTION,
  EmailChoiceSchema,
  emailChoiceValidationSchema
} from '../../schemas/userEmailSchema';

type EmailMarketingType =
  | 'marketingInformationOnly'
  | 'openSourceInformationOnly'
  | 'allTypesOfEmails';
export interface EmailFormProps {
  Email: string;
  Name: string;
  EmailChoice: EmailMarketingType;
}

export function useEmailMarketingForm() {
  const form = useForm<EmailChoiceSchema>({
    defaultValues: {
      Name: '',
      Email: '',
      EmailChoice: EMAIL_SELECTION.MARKETING
    },
    resolver: zodResolver(emailChoiceValidationSchema)
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = form;

  return {
    control,
    handleSubmit,
    reset,
    isSubmitSuccessful
  };
}
