'use client';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';

const INSTAGRAM_URL = 'https://www.instagram.com/inkimono';

export default function InstagramButton({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      component="a"
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      sx={{
        color: 'oklch(45.3% 0.026 210)',
        '&:hover': {
          color: 'oklch(58.2% 0.196 30.2)',
          backgroundColor: 'oklch(95.9% 0.006 210)',
        },
        ...sx,
      }}
      {...props}
    >
      <InstagramIcon />
    </IconButton>
  );
}
