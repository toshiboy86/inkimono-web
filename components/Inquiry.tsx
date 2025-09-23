import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { getDictionary } from '../app/[lang]/dictionaries';
import { TLocale } from '../src/entities';

const Inquiry = async (params: { lang: TLocale }) => {
  const dict = await getDictionary(params.lang);
  return (
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
            p: { xs: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              fontFamily: 'Inter, Noto Sans JP, system-ui, sans-serif',
              mb: 3,
            }}
          >
            {dict['translation']['general']['inquiry']}
          </Typography>
          <Box
            sx={{
              mb: 4,
              fontSize: '1rem',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            {dict['translation']['index']['inquiry_body_1']}
            {dict['translation']['index']['inquiry_body_2']}
          </Box>
          <Link href="/inquiry">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'oklch(58.2% 0.196 30.2)',
                color: 'white',
                borderRadius: '1.5rem',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  backgroundColor: 'oklch(51.4% 0.176 30.2)',
                  transform: 'translateY(-1px)',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              {dict['translation']['general']['inquiry']}
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Inquiry;
