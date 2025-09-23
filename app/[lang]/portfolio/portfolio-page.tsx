import { Container, Box, Typography } from '@mui/material';
import ImageGrid from '../../../components/ImageGrid';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import { fetchPortfolioImages } from '../../../src/repositories';
import { getDictionary } from '../dictionaries';

export default async function PortfolioPage(params: { lang: TLocale }) {
  const urls = await fetchPortfolioImages();
  const dict = await getDictionary(params.lang);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <TopImage title="Portfolio" />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              color: 'oklch(35.9% 0.023 210)',
              mb: 4,
            }}
          >
            My Work
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'oklch(45.3% 0.026 210)',
              lineHeight: 1.6,
              fontSize: '1rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our collection of professional photography and styling work.
            Each image tells a story of elegance, tradition, and modern
            sophistication.
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            backgroundColor: 'oklch(21.8% 0.014 210)',
          }}
        >
          <ImageGrid
            props={{ sx: { backgroundColor: 'oklch(21.8% 0.014 210)' } }}
            images={urls}
            isModal={true}
          />
        </Box>
      </Container>
    </Box>
  );
}
