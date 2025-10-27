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
import { Modal } from '../modal';
import { useEmailMarketingForm } from './emailSignup.form';

interface EmailSignUpModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const EmailSignUpModal = ({ isOpen, setIsOpen }: EmailSignUpModalProps) => {
  const { palette } = useTheme();
  const { control, handleFormSubmit, reset } = useEmailMarketingForm();

  const closeModal = () => {
    reset();
    setIsOpen();
  };

  return (
    <Modal.Root open={isOpen} setIsOpen={closeModal}>
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
          We wont overwhelm you with emails, just send you the really exciting
          stuff!
        </Typography>
      </Box>
      <FormControl sx={{ display: 'flex', gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Controller
            name='Name'
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value);
                }}
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
                value={field.value}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value);
                }}
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
              <RadioGroup
                aria-labelledby='email-choice-label'
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              >
                <FormControlLabel
                  value='marketing'
                  control={<Radio />}
                  label='I want information on new projects and products'
                />
                <FormControlLabel
                  value='open_source'
                  control={<Radio />}
                  label='I want information on open-source projects'
                />
                <FormControlLabel
                  value='everything'
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
          onClick={handleFormSubmit}
          sx={{
            backgroundColor: palette.pinks.dark,
            '&:hover': {
              backgroundColor: palette.pinks.dark
            }
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Modal.Root>
  );
};

export default EmailSignUpModal;
