import { Box, ClickAwayListener, Dialog, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  setIsOpen: () => void;
}

const ModalRoot = ({ open, setIsOpen, children }: ModalProps) => {
  const { palette } = useTheme();

  const closeModal = () => {
    setIsOpen();
  };

  return (
    <Dialog open={open} PaperProps={{ sx: { borderRadius: 4 } }}>
      <ClickAwayListener onClickAway={closeModal}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: palette.greens.light,
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
