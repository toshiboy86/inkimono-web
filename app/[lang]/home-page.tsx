import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Inquiry from '../../components/Inquiry';
import ImageGrid from '../../components/ImageGrid';
import TopHeader from '../../components/TopHeader';
import TopIntroduction from '../../components/TopIntroduction';
import * as repositories from '../../src/repositories';
import { generateRandomImages } from '../../src/utils';
import { getDictionary } from './dictionaries';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { TLocale } from '../../src/entities';

export default async function HomePage(params: { lang: TLocale }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);
  const images = await repositories.fetchPortfolioImages();
  const urls = await generateRandomImages(images, 3);
  const description = await repositories.fetchDescriptions();

  const tempMediaImages = [
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.50.56.png?alt=media&token=f52baaf4-6710-4aa3-a16a-94e11c4f36d9?w=700&h=1000',
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.51.32.png?alt=media&token=ce54f899-10f8-4fd8-b7b1-20025f5bed71?w=700&h=1000',
    'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.53.07.png?alt=media&token=6888132e-76b1-4812-9c6f-89176fa206cb?w=700&h=1000',
  ];

  return (
    <div>
      <TopHeader i18n={dict['translation']} />
      <Container maxWidth="lg">
        <TopIntroduction
          description={description[0]}
          lang={locale}
          i18n={dict['translation']}
        />
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            {dict['translation']['general']['portfolio']}
          </Typography>
          <ImageGrid
            images={urls}
            props={{ sx: { backgroundColor: 'black' } }}
            isModal={false}
          />
          <Box mt={2} textAlign={'center'}>
            <Link href="/portfolio">
              <Button variant="contained">
                {dict['translation']['general']['see_portfolio']}
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            {dict['translation']['index']['about_media']}
          </Typography>
          <ImageGrid
            images={tempMediaImages}
            props={{ sx: { backgroundColor: 'black', heigh: '180px' } }}
            isModal={false}
            height={400}
          />
          <Box mt={2} textAlign={'center'}>
            <Link href="/service">
              <Button variant="contained">
                {dict['translation']['general']['view_service']}
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
