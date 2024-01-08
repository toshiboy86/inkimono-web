'use client'
import * as React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TLocationsRepository } from '../src/entities/repositories';
import { getWordsOnLocale } from '../src/utils';
import { TLocale } from '../src/entities';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function LocationCard(props: {location: TLocationsRepository, images: Record<string, string>, locale: TLocale}) {
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const showReservationIcon = (url?: string) => {
    if (!url) return
    return <Box mt={1} ml={3}><a target='_blank' rel="noreferrer" href={url}><CalendarMonthIcon fontSize='large' color="secondary"/></a></Box>
  }
  const imageId = props.location.fields.main_image?.sys.id as string
  const image = (props.images[imageId] || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg')

  return (
    <Card>
      <CardHeader
        title={getWordsOnLocale(props.location.fields, 'title', props.locale)}
      />
      <CardMedia
        component="img"
        height="550"
        image={image}
        alt="Service image"
      />
      <CardContent>
        {getWordsOnLocale(props.location.fields, 'description', props.locale).content.map((e: any, i: number) => {
          return (
            <>
            <Box mt={ i > 0 ? 2: 0}>
              <Typography variant="body2" color="text.secondary">
                {e.content.map((f:any) => f.value).join('')}
              </Typography>
            </Box>
            </>
          )
        })}
      </CardContent>

    </Card>
  );
}