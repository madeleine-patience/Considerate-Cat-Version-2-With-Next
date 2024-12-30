import {
  Box,
  Button,
  ClickAwayListener,
  Dialog,
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
import { useEmailMarketingForm } from './emailSignup.form';
import MagicCatAnimation from '../magicCatAnimation/magicCatAnimation/MagicCatAnimation';

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
    <Dialog open={isOpen} PaperProps={{ sx: { borderRadius: 4 } }}>
      <ClickAwayListener onClickAway={closeModal}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: palette.greens.light,
            p: 5,
            gap: 4
          }}
        >
          <MagicCatAnimation />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2
            }}
          >
            <Typography variant='h6'>Thanks for signing up!</Typography>
            <Typography sx={{ fontStyle: 'italic' }}>
              We wont overwhelm you with emails, just send you the really
              exciting stuff!
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
                  <FormLabel sx={{ fontWeight: 'bold' }}>
                    Pick your email choice:
                  </FormLabel>
                  <RadioGroup
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
                      label='I want info on contributing to the project'
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
        </Box>
      </ClickAwayListener>
    </Dialog>
  );
};

export default EmailSignUpModal;
