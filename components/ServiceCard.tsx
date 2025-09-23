'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TService } from '../src/entities/repositories';
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';
import ServiceDetails from './ServiceDetails';

interface IServices {
  content: [{ value: string[] }];
}

export default async function ServiceCard(props: {
  service: TService;
  serviceDetails: Record<string, IServiceDetailFields>;
  images: Record<string, string>;
  locale: TLocale;
  i18n: TI18n;
  key: string;
}) {
  const { locale, i18n, key } = props;

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showReservationIcon = (url?: string) => {
    if (!url) return;
    return (
      <Box
        sx={{
          mt: 1,
          ml: 3,
          '& a': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'oklch(58.2% 0.196 30.2)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 200ms ease-out',
            '&:hover': {
              backgroundColor: 'oklch(51.4% 0.176 30.2)',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(217, 119, 87, 0.3)',
            },
          },
        }}
      >
        <a target="_blank" rel="noreferrer" href={url}>
          <CalendarMonthIcon fontSize="medium" />
        </a>
      </Box>
    );
  };

  const imageUrl =
    props.images[props.service.mainImage!.sys.id] ||
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';
  return (
    <Card
      key={key}
      sx={{
        borderRadius: '1.5rem',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid oklch(91.9% 0.011 210)',
        transition: 'all 200ms ease-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: '1.125rem',
              color: 'oklch(35.9% 0.023 210)',
              lineHeight: 1.3,
            }}
          >
            {getWordsOnLocale(props.service, 'title', locale)}
          </Typography>
        }
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'oklch(58.2% 0.196 30.2)',
              fontSize: '1.5rem',
              mt: 1,
            }}
          >
            ¥{props.service.price}
          </Typography>
        }
        action={showReservationIcon(props.service.reservation_url)}
        sx={{
          pb: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0 0 1.5rem 1.5rem',
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt="Service image"
          sx={{
            objectFit: 'cover',
            transition: 'transform 200ms ease-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
      <CardContent sx={{ pt: 3, pb: 2 }}>
        {getWordsOnLocale(props.service, 'description', locale).content.map(
          (e: IServices, i: number) => {
            return (
              <Box key={i} mt={i > 0 ? 2 : 0}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'oklch(45.3% 0.026 210)',
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {e.content.map((f) => f.value).join('')}
                </Typography>
              </Box>
            );
          }
        )}
      </CardContent>
      <ServiceDetails
        service={props.service}
        serviceDetails={props.serviceDetails}
        images={props.images}
        locale={locale}
        i18n={i18n}
      />
    </Card>
  );
}
