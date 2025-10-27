import {
  FormGroup,
  Stack,
  styled,
  Switch,
  SxProps,
  Tooltip,
  Typography
} from '@mui/material';
import React from 'react';

export interface ToggleProps {
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,

  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    color: theme.palette.purples.contrastLightAAA,

    '&.Mui-checked': {
      color: theme.palette.purples.contrastLightAAA,
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundColor: theme.palette.common.white,
        mask: "url('/SVGs/cat-solid-full.svg') center / contain no-repeat",
        WebkitMask:
          "url('/SVGs/cat-solid-full.svg') center / contain no-repeat",
        transform: 'none'
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.purples.main
      }
    }
  },

  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.purples.contrastLightAAA,
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundColor: theme.palette.common.white,
      mask: "url('/SVGs/cat-solid-full.svg') center / contain no-repeat",
      WebkitMask: "url('/SVGs/cat-solid-full.svg') center / contain no-repeat",
      transform: 'scaleX(-1)'
    }
  },

  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.pinks.dark,
    borderRadius: 20 / 2
  }
}));

export const ToggleButton = ({ onChange, sx }: ToggleProps) => {
  return (
    <FormGroup>
      <Stack
        direction='row'
        spacing={1}
        sx={{
          width: 'fit-content',
          alignItems: 'center',
          p: 2,
          borderRadius: 2,
          ...sx
        }}
      >
        <Typography>Grid</Typography>
        <Tooltip title='Click me to switch tarot card views. Meow!'>
          <StyledSwitch
            disableRipple
            defaultChecked
            inputProps={{ 'aria-label': 'Card View Toggle' }}
            onChange={onChange}
          />
        </Tooltip>
        <Typography>List</Typography>
      </Stack>
    </FormGroup>
  );
};

export default ToggleButton;
