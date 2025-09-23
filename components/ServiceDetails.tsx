'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PortraitIcon from '@mui/icons-material/Portrait';
import { TService } from '../src/entities/repositories';
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';

interface IExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: IExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: 'oklch(58.2% 0.196 30.2)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    backgroundColor: 'oklch(95.9% 0.006 210)',
  },
}));

const ServiceDetails = (props: {
  service: TService;
  serviceDetails: Record<string, IServiceDetailFields>;
  images: Record<string, string>;
  locale: TLocale;
  i18n: TI18n;
}) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const { locale, i18n } = props;

  return (
    <>
      <CardActions
        disableSpacing
        sx={{
          px: 2,
          pb: 2,
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 1,
        }}
      >
        <Box
          textAlign={'center'}
          display={props.service.reservation_url ? 'block' : 'none'}
          sx={{ mb: 1 }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={props.service.reservation_url || '/'}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'oklch(58.2% 0.196 30.2)',
                color: 'white',
                borderRadius: '1rem',
                px: 3,
                py: 1,
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: 'oklch(51.4% 0.176 30.2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {i18n['general']['reserve']}
            </Button>
          </a>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Box textAlign={'center'}>
            <Link
              href="/portfolio"
              locale={locale}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'oklch(95.9% 0.006 210)',
                color: 'oklch(58.2% 0.196 30.2)',
                textDecoration: 'none',
                transition: 'all 200ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  'oklch(58.2% 0.196 30.2)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  'oklch(95.9% 0.006 210)';
                e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <PortraitIcon fontSize="medium" />
            </Link>
          </Box>

          <ExpandMore
            expand={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label="show more"
            sx={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </CardActions>

      {props.service.serviceDetails && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: 0, pb: 2 }}>
            {props.service.serviceDetails.map((e) => {
              return (
                <Typography
                  paragraph
                  sx={{
                    borderBottom: '1px solid oklch(91.9% 0.011 210)',
                    pb: 1,
                    mb: 2,
                    color: 'oklch(45.3% 0.026 210)',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                  key={e.sys.id}
                >
                  {getWordsOnLocale(
                    props.serviceDetails[e.sys.id],
                    'title',
                    locale
                  )}
                </Typography>
              );
            })}
          </CardContent>
        </Collapse>
      )}
    </>
  );
};
export default ServiceDetails;
