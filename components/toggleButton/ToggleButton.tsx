import {
  FormGroup,
  Stack,
  styled,
  Switch,
  SxProps,
  Typography,
  useTheme
} from '@mui/material';
export interface ToggleProps {
  onChange: any;
  sx?: SxProps;
}
const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 36,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    backgroundColor: theme.palette.purples.contrastLightAAA,
    margin: 2,
    padding: 0,
    transform: 'translateX(4px)',
    '&.Mui-checked': {
      backgroundSize: '60%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transform: 'translateX(23px)',
      '& .MuiSwitch-thumb:before': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundImage: `url('data:image/svg+xml,%3Csvg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m21%204c0-.478-.379-1-1-1h-16c-.62%200-1%20.519-1%201v16c0%20.621.52%201%201%201h16c.478%200%201-.379%201-1zm-12.5%2015.5h-4v-4h4zm1.5-4h4v4h-4zm9.5%200v4h-4v-4zm-15-5.5h4v4h-4zm5.5%200h4v4h-4zm5.5%200h4v4h-4zm-11-5.5h4v4h-4zm5.5%200h4v4h-4zm5.5%200h4v4h-4z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22nonzero%22/%3E%3C/svg%3E')`,
        backgroundOrigin: 'content-box',
        backgroundSize: '70%'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.purples.main,
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundOrigin: 'content-box',
      backgroundSize: '70%',
      backgroundImage: `url('data:image/svg+xml,%3Csvg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m10.5%2017.25c0-.414.336-.75.75-.75h10c.414%200%20.75.336.75.75s-.336.75-.75.75h-10c-.414%200-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53%200-1%20.47-1%201v4.3c0%20.53.47%201%201%201h5c.53%200%201-.47%201-1zm-5.5.5h4v3.3h-4zm7-2.2c0-.414.336-.75.75-.75h10c.414%200%20.75.336.75.75s-.336.75-.75.75h-10c-.414%200-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53%200-1%20.47-1%201v4.3c0%20.53.47%201%201%201h5c.53%200%201-.47%201-1zm-5.5.5h4v3.3h-4zm7%20.25c0-.414.336-.75.75-.75h10c.414%200%20.75.336.75.75s-.336.75-.75.75h-10c-.414%200-.75-.336-.75-.75z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22nonzero%22/%3E%3C/svg%3E')`
    }
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.purples.contrastLightAAA
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.purples.contrastLightAAA
  }
}));

export const ToggleButton = ({ onChange, sx }: ToggleProps) => {
  const theme = useTheme();

  return (
    <FormGroup>
      <Stack
        direction='row'
        spacing={1}
        sx={{
          width: 'fit-content',
          backgroundColor: theme.palette.pinks.main,
          alignItems: 'center',
          p: 2,
          borderRadius: 2,
          ...sx
        }}
      >
        <Typography>List</Typography>
        <StyledSwitch
          disableRipple
          onChange={onChange}
          defaultChecked
          inputProps={{ 'aria-label': 'Card View Toggle' }}
        />
        <Typography>Grid</Typography>
      </Stack>
    </FormGroup>
  );
};

export default ToggleButton;
