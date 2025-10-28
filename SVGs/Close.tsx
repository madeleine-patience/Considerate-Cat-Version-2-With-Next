import { SvgIcon, SxProps } from '@mui/material';

interface SvgIconProps {
  fillColor?: string;
  size?: string;
  sx?: SxProps;
  'aria-label'?: string;
}

export const CloseSvg = ({
  fillColor = 'white',
  size = '24px',
  sx,
  'aria-label': ariaLabel
}: SvgIconProps) => {
  return (
    <SvgIcon sx={{ fontSize: size, ...sx }} aria-label={ariaLabel}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke={fillColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <line x1='18' y1='6' x2='6' y2='18' />
        <line x1='6' y1='6' x2='18' y2='18' />
      </svg>
    </SvgIcon>
  );
};
