import { Button, ButtonProps, Typography, useTheme } from '@mui/material';

interface RaisedButtonProps extends ButtonProps {
  width?: number;
  buttonLabel: string;
  disabled?: boolean;
}

const RaisedButton = ({
  buttonLabel,
  onClick,
  disabled
}: RaisedButtonProps) => {
  const { palette } = useTheme();

  return (
    <Button
      disableRipple
      sx={{
        marginTop: 4,
        cursor: 'pointer',
        visibility: disabled ? 'hidden' : 'visible',
        borderRadius: 2,
        border: `2px solid ${palette.pinks.dark}`,
        boxShadow: `4px 4px 0px 4px ${palette.pinks.dark}`,
        color: 'black',
        '&:hover, &:focus': {
          backgroundColor: palette.pinks.light
        },
        '&:active': {
          backgroundColor: palette.pinks.dark
        }
      }}
      onClick={onClick}
    >
      <Typography variant='button'>{buttonLabel}</Typography>
    </Button>
  );
};

export default RaisedButton;
