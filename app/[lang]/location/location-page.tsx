import { Box, Container, Grid } from '@mui/material';
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
    <div>
      <TopImage title="Location" />
      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign="center" sx={{ mt: 3 }}>
          <Grid item>
            <Box sx={{ pt: 3 }}>
              <Box fontSize={16} color="text.secondary">
                {getWordsOnLocale(location[0].fields, 'description', locale)
                  .content.map((f: any) =>
                    f.content.map((e: any) => e.value).map((e: any) => e)
                  )
                  .join('')}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 3 }}>
          {locations.map((loc: any) => {
            return (
              <>
                <Grid item xs={12} md={6}>
                  <LocationCard
                    images={images}
                    location={loc}
                    locale={locale}
                    key={loc.sys.id}
                  ></LocationCard>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
