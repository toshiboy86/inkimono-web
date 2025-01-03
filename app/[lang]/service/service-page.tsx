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
    <div>
      <TopImage title="Plans & Pricing" />
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
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
            <Typography variant="h2">
              {dict['translation']['general']['about_my_service']}
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" color="text.secondary">
                {dict['translation']['service']['about_1']}
                <br />
                <br />
                {dict['translation']['service']['about_2']}
              </Typography>
              <br />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              sx={{
                width: '100%',
                'object-fit': 'cover',
                height: {
                  lg: '700px',
                },
              }}
              src="https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Ftop.JPG?alt=media&token=21f80381-71eb-4fd5-bda8-b13e578d7986"
            ></Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} textAlign="center" sx={{ mt: 3 }}>
          <Grid item>
            <Typography variant="h4">
              {dict['translation']['service']['plan_top_1']}
              {/* {wi18n().t('service.plan_top_1')} */}
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Box fontSize={16} color="text.secondary">
                {yourPlan &&
                  // TODO: fix any
                  documentToReactComponents(yourPlan as any)}
              </Box>
            </Box>
          </Grid>
        </Grid>
        {categories.map((cat) => {
          return (
            <div key={cat.id}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', mt: 8, mb: 6 }}
              >
                {cat.title}
              </Typography>
              <Grid container spacing={1} sx={{ mt: 3 }} key={cat.id}>
                {group_service[cat.id].map((service) => {
                  return (
                    <>
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
                    </>
                  );
                })}
              </Grid>
            </div>
          );
        })}
      </Container>
      <Box
        mt={8}
        sx={{
          backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
          backgroundColor: 'rgba(48, 37, 37,0.9)',
          backgroundBlendMode: 'multiply',
          'object-fit': 'cover',
          height: {
            lg: '300px',
          },
        }}
      >
        {/* @ts-expect-error Server Component */}
        <Inquiry lang={params.lang} />
      </Box>
    </div>
  );
}
