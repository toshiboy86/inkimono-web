'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TLocationsRepository } from '../src/entities/repositories';
import { getWordsOnLocale } from '../src/utils';
import { TLocale } from '../src/entities';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function LocationCard(props: {
  location: TLocationsRepository;
  images: Record<string, string>;
  locale: TLocale;
}) {
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

  const imageId = props.location.fields.main_image?.sys.id as string;
  const image =
    props.images[imageId] ||
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';

  return (
    <Card
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
              fontSize: '1.25rem',
              color: 'oklch(35.9% 0.023 210)',
              lineHeight: 1.3,
            }}
          >
            {getWordsOnLocale(props.location.fields, 'title', props.locale)}
          </Typography>
        }
        action={showReservationIcon(props.location.fields.reservation_url)}
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
          image={image}
          alt="Location image"
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
        {getWordsOnLocale(
          props.location.fields,
          'description',
          props.locale
        ).content.map((e: any, i: number) => {
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
                {e.content.map((f: any) => f.value).join('')}
              </Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
}
