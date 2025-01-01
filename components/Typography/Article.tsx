import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

interface ArticleProps {
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
}

const Article = ({
  imageSrc,
  imageAlt,
  children: description,
}: ArticleProps) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        mt: 3,
        alignItems: 'flex-start',
      }}
    >
      <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }} pr={2}>
        {description}
      </Grid>
      <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            'object-fit': 'cover',
            height: {
              lg: '700px',
            },
          }}
          alt={imageAlt}
          src={imageSrc}
        />
      </Grid>
    </Grid>
  );
};

export default Article;
