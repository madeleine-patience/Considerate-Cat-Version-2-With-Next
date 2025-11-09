import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { EMAIL_SELECTION } from '../../schemas/userEmailSchema';
import { supabase } from '../../supabase';
import { Modal } from '../modal';
import { EmailFormProps, useEmailMarketingForm } from './emailSignup.form';

interface EmailSignUpModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const EmailSignUpModal = ({ isOpen, setIsOpen }: EmailSignUpModalProps) => {
  const { palette } = useTheme();
  const { control, handleSubmit, reset } = useEmailMarketingForm();

  const closeModal = () => {
    reset();
    setIsOpen();
  };

  const onSubmit = async (formData: EmailFormProps) => {
    const { Email, Name, EmailChoice } = formData;

    const { error } = await supabase
      .from('Emails')
      .insert([
        {
          customer_email: Email,
          name: Name,
          email_choice: EmailChoice
        }
      ])
      .select();

    if (error) {
      console.error('Error inserting email:', error);
    } else {
      reset();
      setIsOpen();
    }
  };

  return (
    <Modal.Root open={isOpen} setIsOpen={closeModal}>
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'inherit'
          }}
        >
          <Box
            component='img'
            src='/image/MagicHeidi.webp'
            sx={{ width: '100%', maxWidth: '400px' }}
          />
          <Modal.Title>Keep In Touch?</Modal.Title>
          <Typography sx={{ fontStyle: 'italic' }}>
            We won’t overwhelm you with emails, just send you the really
            exciting stuff!
          </Typography>
        </Box>

        <FormControl
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', gap: 4 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name='Name'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label='Name'
                  color='secondary'
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message || ''}
                />
              )}
            />

            <Controller
              name='Email'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Email'
                  color='secondary'
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message || ''}
                />
              )}
            />
          </Box>
          <Controller
            name='EmailChoice'
            control={control}
            render={({ field }) => (
              <>
                <FormLabel id='email-choice-label' sx={{ fontWeight: 'bold' }}>
                  Pick your email choice:
                </FormLabel>
                <RadioGroup aria-labelledby='email-choice-label' {...field}>
                  <FormControlLabel
                    value={EMAIL_SELECTION.MARKETING}
                    control={<Radio />}
                    label='I want information on new projects and products'
                  />
                  <FormControlLabel
                    value={EMAIL_SELECTION.OPENSOURCE}
                    control={<Radio />}
                    label='I want information on open-source projects'
                  />
                  <FormControlLabel
                    value={EMAIL_SELECTION.EVERYTHING}
                    control={<Radio />}
                    label='I want everything!'
                  />
                </RadioGroup>
              </>
            )}
          />
          <Button
            variant='contained'
            type='submit'
            sx={{
              backgroundColor: palette.pinks.dark,
              '&:hover': {
                backgroundColor: palette.pinks.dark
              }
            }}
          >
            Sign Up
          </Button>
        </FormControl>
      </>
    </Modal.Root>
  );
};

export default EmailSignUpModal;
