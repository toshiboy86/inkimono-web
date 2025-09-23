// In your theme configuration file
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'oklch(58.2% 0.196 30.2)', // accent-500
      light: 'oklch(65.6% 0.165 30.2)', // accent-400
      dark: 'oklch(51.4% 0.176 30.2)', // accent-600
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: 'oklch(71.8% 0.022 210)', // neutral-400
      light: 'oklch(87.4% 0.015 210)', // neutral-300
      dark: 'oklch(56.5% 0.027 210)', // neutral-500
      contrastText: 'oklch(35.9% 0.023 210)',
    },
    background: {
      default: 'oklch(98.0% 0.003 210)', // neutral-50
      paper: 'oklch(100% 0 0)', // white
    },
    text: {
      primary: 'oklch(35.9% 0.023 210)', // neutral-700
      secondary: 'oklch(45.3% 0.026 210)', // neutral-600
    },
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans JP", "Hiragino Kaku Gothic Pro", "Meiryo", system-ui, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      '@media (max-width:600px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.00714em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1.5rem',
          textTransform: 'none',
          padding: '10px 24px',
          fontWeight: 500,
          fontSize: '0.875rem',
          lineHeight: 1.5,
          transition: 'all 200ms ease-out',
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        contained: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transform: 'translateY(-1px)',
          },
          '&:focus': {
            boxShadow: '0 0 0 2px oklch(58.2% 0.196 30.2), 0 0 0 4px rgba(217, 119, 87, 0.12)',
          },
        },
        outlined: {
          borderColor: 'oklch(87.4% 0.015 210)',
          '&:hover': {
            backgroundColor: 'oklch(95.9% 0.006 210)',
            borderColor: 'oklch(71.8% 0.022 210)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          border: '1px solid oklch(91.9% 0.011 210)',
          transition: 'all 200ms ease-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          '@media (min-width:600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width:1024px)': {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '1rem',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'oklch(71.8% 0.022 210)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'oklch(58.2% 0.196 30.2)',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
