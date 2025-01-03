// In your theme configuration file
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h2' },
          style: {
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
          },
        },
      ],
    },
  },
});
