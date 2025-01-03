import { Container, Box, Typography } from '@mui/material';
import { TI18n } from '../src/entities';

const TopHeader = (props: { i18n: TI18n }) => {
  const { i18n } = props;
  return (
    <Box
      sx={{
        backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
        'object-fit': 'cover',
        height: {
          xs: 'auto',
          lg: '300px',
        },
      }}
    >
      <Container>
        <Box>
          <Box
            textAlign={'center'}
            pt={9}
            sx={{
              display: 'table-cell',
              verticalAlign: 'middle',
              color: '#f8fffc',
              fontWeight: '900',
            }}
          >
            <Box
              p={1}
              mt={4}
              mb={4}
              sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}
            >
              <Typography
                variant="h1"
                sx={{ fontWeight: 400, fontSize: '2.125rem' }}
              >
                {i18n['index']['top_title']}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
