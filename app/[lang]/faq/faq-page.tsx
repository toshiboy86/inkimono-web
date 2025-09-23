import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TLocale } from '../../../src/entities';
import { fetchQuestionAndAnswer } from '../../../src/repositories';
import { getDictionary } from '../dictionaries';
import TopImage from '../../../components/TopImage';
import Inquiry from '../../../components/Inquiry';
import { IQuestionFields } from '../../../@types/generated/contentful';

export default async function FAQPage(params: { lang: TLocale }) {
  const faq = await fetchQuestionAndAnswer();
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <TopImage title="FAQ" />
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
            Frequently Asked Questions
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
            Find answers to common questions about our services, booking
            process, and studio policies.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faq.map((e: { fields: IQuestionFields }, index: number) => {
            if (
              (params.lang === 'en' && e.fields.question_en) ||
              (params.lang === 'ja' && e.fields.question_ja)
            )
              return (
                <Accordion
                  key={e.fields.question_en || e.fields.question_ja}
                  sx={{
                    mb: 2,
                    borderRadius: '1rem !important',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    border: '1px solid oklch(91.9% 0.011 210)',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                      boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: 'oklch(58.2% 0.196 30.2)',
                          transition: 'transform 200ms ease-out',
                        }}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      borderRadius: '1rem',
                      px: 3,
                      py: 2,
                      '&.Mui-expanded': {
                        borderRadius: '1rem 1rem 0 0',
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '12px 0',
                        '&.Mui-expanded': {
                          margin: '12px 0',
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: 'oklch(35.9% 0.023 210)',
                        lineHeight: 1.4,
                      }}
                    >
                      {e.fields.question_en || e.fields.question_ja}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                      pt: 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'oklch(45.3% 0.026 210)',
                        lineHeight: 1.6,
                        fontSize: '0.875rem',
                      }}
                    >
                      {e.fields.answer_en || e.fields.answer_ja}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
          })}
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
