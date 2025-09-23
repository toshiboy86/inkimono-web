import type { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const TopImage: FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: {
          xs: '400px',
          md: '500px',
          lg: '600px',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(1px)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          textAlign={'center'}
          sx={{
            color: 'white',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              p: { xs: 3, md: 4 },
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                fontFamily: 'Inter, Noto Sans JP, system-ui, sans-serif',
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopImage;
