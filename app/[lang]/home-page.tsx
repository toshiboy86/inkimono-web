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
    <Box sx={{ minHeight: '100vh' }}>
      <TopHeader i18n={dict['translation']} />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <TopIntroduction
          description={description[0]}
          lang={locale}
          i18n={dict['translation']}
        />

        <Box sx={{ mt: 12, mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              color: 'oklch(35.9% 0.023 210)',
              mb: 4,
              textAlign: 'center',
            }}
          >
            {dict['translation']['general']['portfolio']}
          </Typography>
          <Box
            sx={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              mb: 4,
            }}
          >
            <ImageGrid
              images={urls}
              props={{ sx: { backgroundColor: 'oklch(21.8% 0.014 210)' } }}
              isModal={false}
            />
          </Box>
          <Box textAlign={'center'}>
            <Link href="/portfolio">
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
                {dict['translation']['general']['see_portfolio']}
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ mt: 12, mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              color: 'oklch(35.9% 0.023 210)',
              mb: 4,
              textAlign: 'center',
            }}
          >
            {dict['translation']['index']['about_media']}
          </Typography>
          <Box
            sx={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              mb: 4,
            }}
          >
            <ImageGrid
              images={tempMediaImages}
              props={{ sx: { backgroundColor: 'oklch(21.8% 0.014 210)' } }}
              isModal={false}
              height={400}
            />
          </Box>
          <Box textAlign={'center'}>
            <Link href="/service">
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
                {dict['translation']['general']['view_service']}
              </Button>
            </Link>
          </Box>
        </Box>
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
