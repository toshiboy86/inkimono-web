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
      spacing={4}
      sx={{
        alignItems: 'center',
        mb: 4,
      }}
    >
      <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
        {description}
      </Grid>
      <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            objectFit: 'cover',
            height: {
              xs: '400px',
              md: '500px',
              lg: '600px',
            },
            borderRadius: '1.5rem',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
          alt={imageAlt}
          src={imageSrc}
        />
      </Grid>
    </Grid>
  );
};

export default Article;
