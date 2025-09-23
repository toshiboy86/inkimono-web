import { Box, Container, Grid, Typography } from '@mui/material';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import {
  fetchLocations,
  fetchLocation,
  fetchPortfolioImagesById,
} from '../../../src/repositories';
import LocationCard from '../../../components/LocationCard';
import { getWordsOnLocale } from '../../../src/utils';

export default async function LocationPage(params: { lang: TLocale }) {
  const locale = params.lang;
  const locations = await fetchLocations();
  const location = await fetchLocation();
  const images = await fetchPortfolioImagesById();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <TopImage title="Location" />
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
            Studio Locations
          </Typography>
          <Box
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1rem',
              color: 'oklch(45.3% 0.026 210)',
              lineHeight: 1.6,
            }}
          >
            {getWordsOnLocale(location[0].fields, 'description', locale)
              .content.map((f: any) =>
                f.content.map((e: any) => e.value).map((e: any) => e)
              )
              .join('')}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {locations.map((loc: any) => {
            return (
              <Grid item xs={12} md={6} key={loc.sys.id}>
                <LocationCard images={images} location={loc} locale={locale} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
