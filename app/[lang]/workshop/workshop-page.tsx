import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Inquiry from '../../../components/Inquiry';
import * as repositories from '../../../src/repositories';
import { getDictionary } from '../dictionaries';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { TLocale } from '../../../src/entities';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid } from '@mui/material';
import Article from '../../../components/Typography/Article';
import TopImage from '../../../components/TopImage';
import { fetchPortfolioImagesById2 } from '../../../src/repositories';
import { DEFAULT_IMAGE } from '../../../src/const';

export default async function WorkshopPage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);
  const [workshop] = await repositories.fetchPageByPageType('workshop');

  const mainDescription = workshop.fields[`description_${locale}_1`];
  const mainDescTitle = workshop.fields[`desc_title_${locale}_1`];
  const mainDescImage = workshop.fields.image_1;

  const images = mainDescImage?.sys.id
    ? await fetchPortfolioImagesById2(mainDescImage?.sys.id as string)
    : null;

  const second_images = workshop.fields.image_2?.sys.id
    ? await fetchPortfolioImagesById2(workshop.fields.image_2?.sys.id as string)
    : null;

  return (
    <div>
      <TopImage title="Workshop" />
      <Container maxWidth="lg">
        <Article
          imageSrc={images ? Object.values(images)[0] : DEFAULT_IMAGE}
          imageAlt="Stasia for the workshop"
        >
          <Grid item xs={12} md={7}>
            <Typography variant="h4">{mainDescTitle}</Typography>
            <Box sx={{ pt: 3 }}>
              <Box fontSize={16} color="text.secondary">
                {mainDescription && documentToReactComponents(mainDescription)}
              </Box>
            </Box>
          </Grid>
        </Article>
        <Grid xs={12}>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" mb={2}>
              Price
            </Typography>
            <Image
              unoptimized
              src={
                second_images
                  ? `${Object.values(second_images)[0]}?w=700&h=1000&q=75`
                  : DEFAULT_IMAGE
              }
              alt={`Workshop price`}
              width={700}
              height={1000}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Box textAlign={'center'} pt={3}>
          <Typography variant="h4">
            {dict['translation']['general']['inquiry']}
          </Typography>
          <Box mt={2} textAlign={'center'}>
            <Link
              href="https://inkimono.as.me/schedule/fdfa7192/?appointmentTypeIds[]=72094965"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained">
                {dict['translation']['general']['check_schedule']}
              </Button>
            </Link>
          </Box>
          <Typography variant="body1" mt={2}>
            OR
          </Typography>
          <Box mt={2} textAlign={'center'}>
            <Link href="/inquiry">
              <Button variant="contained" color="secondary">
                {dict['translation']['general']['dm']}
              </Button>
            </Link>
          </Box>
        </Box>
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
