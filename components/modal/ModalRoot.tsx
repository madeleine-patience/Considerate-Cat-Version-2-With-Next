import { Box, ClickAwayListener, Dialog, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

type modalColors = 'green' | 'pink';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  setIsOpen: () => void;
  color?: modalColors;
}

const ModalRoot = ({
  open,
  setIsOpen,
  children,
  color = 'green'
}: ModalProps) => {
  const { palette } = useTheme();

  const getBackgroundColor = () => {
    if (color === 'pink') {
      return palette.pinks.main;
    }
    return palette.greens.light;
  };

  const getBorderColor = () => {
    if (color === 'pink') {
      return palette.pinks.dark;
    }
    return palette.greens.dark;
  };

  const closeModal = () => {
    setIsOpen();
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: { borderRadius: 4, border: `7px solid ${getBorderColor()}` }
      }}
    >
      <ClickAwayListener onClickAway={closeModal}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: getBackgroundColor(),
            p: 6,
            gap: 4
          }}
        >
          {children}
        </Box>
      </ClickAwayListener>
    </Dialog>
  );
};

export default ModalRoot;
