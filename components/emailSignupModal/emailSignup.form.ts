import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  EmailChoiceSchema,
  emailChoiceValidationSchema
} from '../../schemas/userEmailSchema';

export function useEmailMarketingForm() {
  const form = useForm<EmailChoiceSchema>({
    defaultValues: {
      Name: '',
      Email: '',
      EmailChoice: 'marketing'
    },
    resolver: zodResolver(emailChoiceValidationSchema)
  });

  const { control, handleSubmit, formState, reset } = form;

  const handleFormSubmit = handleSubmit((values) => {
    // TODO : Remove in part two
    console.log('Form was submitted, values:', values);
  });

  return {
    control,
    handleFormSubmit,
    reset,
    formState
  };
}
