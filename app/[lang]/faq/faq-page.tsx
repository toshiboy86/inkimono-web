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

// TODO: Under migration.
export default async function FAQPage(params: { lang: TLocale }) {
  const faq = await fetchQuestionAndAnswer();
  const locale = params.lang;

  return (
    <div>
      <h1>Under Preparation</h1>
      <TopImage title="FAQ" />
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
          {faq.map((e: { fields: IQuestionFields }) => {
            if (
              (params.lang === 'en' && e.fields.question_en) ||
              (params.lang === 'ja' && e.fields.question_ja)
            )
              return (
                <>
                  <Accordion
                    sx={{
                      width: 'inherit',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {e.fields.question_en || e.fields.question_ja}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {e.fields.answer_en || e.fields.answer_ja}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
          })}
        </Grid>
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
