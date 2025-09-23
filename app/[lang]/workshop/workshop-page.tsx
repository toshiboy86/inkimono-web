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
    <Box sx={{ minHeight: '100vh' }}>
      <TopImage title="Workshop" />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Article
          imageSrc={images ? Object.values(images)[0] : DEFAULT_IMAGE}
          imageAlt="Stasia for the workshop"
        >
          <Grid item xs={12} md={7}>
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
              {mainDescTitle}
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Box
                sx={{
                  fontSize: 16,
                  color: 'oklch(45.3% 0.026 210)',
                  lineHeight: 1.6,
                  '& p': {
                    mb: 2,
                  },
                }}
              >
                {mainDescription && documentToReactComponents(mainDescription)}
              </Box>
            </Box>
          </Grid>
        </Article>

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
            Workshop Pricing
          </Typography>
          <Box
            sx={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            <Image
              unoptimized
              src={
                second_images
                  ? `${Object.values(second_images)[0]}?w=700&h=1000&q=75`
                  : DEFAULT_IMAGE
              }
              alt="Workshop price"
              width={700}
              height={1000}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
        </Box>

        <Box
          textAlign="center"
          sx={{
            backgroundColor: 'oklch(95.9% 0.006 210)',
            borderRadius: '2rem',
            p: { xs: 4, md: 6 },
            border: '1px solid oklch(91.9% 0.011 210)',
            boxShadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
        >
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
            {dict['translation']['general']['inquiry']}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link
              href="https://inkimono.as.me/schedule/fdfa7192/?appointmentTypeIds[]=72094965"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
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
                {dict['translation']['general']['check_schedule']}
              </Button>
            </Link>

            <Typography
              variant="body1"
              sx={{
                color: 'oklch(45.3% 0.026 210)',
                fontWeight: 500,
              }}
            >
              OR
            </Typography>

            <Link href="/inquiry" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'oklch(58.2% 0.196 30.2)',
                  color: 'oklch(58.2% 0.196 30.2)',
                  borderRadius: '1.5rem',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'oklch(58.2% 0.196 30.2)',
                    color: 'white',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 8px rgba(217, 119, 87, 0.3)',
                  },
                }}
              >
                {dict['translation']['general']['dm']}
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
