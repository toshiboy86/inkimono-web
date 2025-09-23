import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Grid, Typography, Box, CardContent } from '@mui/material';
import Inquiry from '../../../components/Inquiry';
import ServiceCard from '../../../components/ServiceCard';
import TopImage from '../../../components/TopImage';
import { TLocale } from '../../../src/entities';
import { TService } from '../../../src/entities/repositories';
import {
  makeServiceFactory,
  makeServiceCategoryFactory,
  makeServiceDetailsFactory,
} from '../../../src/factories';
import {
  fetchServices,
  fetchPortfolioImagesById,
  fetchServiceCategories,
  fetchServiceOptions,
  fetchDescriptions,
  fetchServiceDetails,
} from '../../../src/repositories';
import { getDictionary } from '../dictionaries';

export default async function ServicePage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  const services = await fetchServices();
  const serviceDto = makeServiceFactory(services);

  const images = await fetchPortfolioImagesById();

  let group_service: Record<string, TService[]> = {};
  serviceDto.forEach((e: TService) => {
    const catId = e.serviceCategory?.sys.id;
    if (catId === undefined) console.error('serviceCategory Id is not defined');

    if (!group_service[catId!]) {
      group_service = { ...group_service, [catId!]: [e] };
    } else {
      group_service[catId!].push(e);
    }
  });

  const categoriesRepo = await fetchServiceCategories();
  const categories = await makeServiceCategoryFactory(categoriesRepo);
  // const options = await fetchServiceOptions() TODO: remove it later.
  const description = await fetchDescriptions();
  const serviceDetails = await fetchServiceDetails(); // here end today!
  const serviceDetailsDto = makeServiceDetailsFactory(serviceDetails);
  const yourPlan = description[0].fields[`chooseYourPlan_${locale}`];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <TopImage title="Plans & Pricing" />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.025em',
                color: 'oklch(35.9% 0.023 210)',
                mb: 3,
              }}
            >
              {dict['translation']['general']['about_my_service']}
            </Typography>
            <Box sx={{ pt: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'oklch(45.3% 0.026 210)',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                  mb: 2,
                }}
              >
                {dict['translation']['service']['about_1']}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'oklch(45.3% 0.026 210)',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                }}
              >
                {dict['translation']['service']['about_2']}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              sx={{
                width: '100%',
                objectFit: 'cover',
                height: {
                  xs: '400px',
                  md: '500px',
                  lg: '600px',
                },
                borderRadius: '1.5rem',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              }}
              src="https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Ftop.JPG?alt=media&token=21f80381-71eb-4fd5-bda8-b13e578d7986"
              alt="Service overview image"
            />
          </Grid>
        </Grid>

        <Box textAlign="center" sx={{ mt: 8, mb: 6 }}>
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
            {dict['translation']['service']['plan_top_1']}
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
            {yourPlan &&
              // TODO: fix any
              documentToReactComponents(yourPlan as any)}
          </Box>
        </Box>
        {categories.map((cat) => {
          return (
            <Box key={cat.id} sx={{ mb: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  mt: 8,
                  mb: 6,
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: 'oklch(35.9% 0.023 210)',
                  letterSpacing: '-0.025em',
                }}
              >
                {cat.title}
              </Typography>
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {group_service[cat.id].map((service) => {
                  return (
                    <Grid item xs={12} md={4} key={service.id + cat.id}>
                      {/* @ts-expect-error Server Component */}
                      <ServiceCard
                        service={service}
                        serviceDetails={serviceDetailsDto}
                        images={images}
                        locale={locale}
                        i18n={dict['translation']}
                        key={cat.id}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
      </Container>

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
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(1px)',
          },
        }}
      >
        {/* @ts-expect-error Server Component */}
        <Inquiry lang={params.lang} />
      </Box>
    </Box>
  );
}
