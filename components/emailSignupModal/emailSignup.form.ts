import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  EMAIL_SELECTION,
  EmailChoiceSchema,
  EmailChoiceType,
  emailChoiceValidationSchema
} from '../../schemas/userEmailSchema';

export interface EmailFormProps {
  Email: string;
  Name: string;
  EmailChoice: EmailChoiceType;
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

  const { control, handleSubmit, reset } = form;

  return {
    control,
    handleSubmit,
    reset
  };
}
