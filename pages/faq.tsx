import Head from 'next/head'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Inquiry from '../components/Inquiry'
import TopImage from '../components/TopImage'
import { fetch2QuestionAndAnswer } from '../src/repositories'
import { useLocale } from '../src/hooks/useLocale'

type TQnA = {
  fields: {
    question_ja: string,
    question_en: string,
    answer_en: string,
    answer_ja: string,
  }
}

export async function getServerSideProps() {
  const faq = await fetch2QuestionAndAnswer()  
  return {
    props: {
      faq
    }
  }
  
}

const Service = (props: {
  faq: {
    fields: {
      question_ja: string,
      question_en: string,
      answer_en: string,
      answer_ja: string,
    }
  }[],
}) => {
  const { getCurrentLocale, getWordsOnLocale, wi18n } = useLocale()

  return (
    <div>
      <Head>
        <title>{wi18n().t('meta.faq_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.faq_title')} />
        <meta property="og:description" content={wi18n().t('meta.faq_description')} />
        <meta property="og:image" content='/wrapper-img.jpg' />
        <meta name="twitter:card" content={wi18n().t('meta.faq_description')}/>
      </Head>
      <TopImage title={wi18n().t('general.faq')} />
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
        {
          props.faq.map((e: TQnA) => {
            if ((getCurrentLocale() === 'en' && e.fields.question_en) || getCurrentLocale() === 'ja' && e.fields.question_ja)
            return (
              <>
                <Accordion
                  sx={{
                    width: 'inherit'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{getWordsOnLocale(e.fields, 'question')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography dangerouslySetInnerHTML={{__html: getWordsOnLocale(e.fields, 'answer').replace('/n', '<br>')}} />
                  </AccordionDetails>
                </Accordion>
              </>
            )
          })
        }
        </Grid>
      </Container>
      <Box
        mt={8}
        sx={{
          backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
          backgroundColor: 'rgba(48, 37, 37,0.9)',
          backgroundBlendMode: 'multiply',
          'object-fit': 'cover',
          'height': {
            lg: '300px',
          }
        }}>
        <Inquiry></Inquiry>
      </Box>
    </div>
  )
}
export default Service