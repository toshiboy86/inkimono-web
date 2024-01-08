'use client'
import * as React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TService } from '../src/entities/repositories'
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';
import ServiceDetails from './ServiceDetails';

interface IServices {
  content: [
    {value: string[]}
  ]
}

export default async function ServiceCard(props: {
  service: TService,
  serviceDetails: Record<string,IServiceDetailFields>,
  images: Record<string, string>,
  locale: TLocale,
  i18n: TI18n
}) {
  const { locale, i18n } = props

  const [expanded, setExpanded] = 
  React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const showReservationIcon = (url?: string) => {
    if (!url) return
    return <Box mt={1} ml={3}><a target='_blank' rel="noreferrer" href={url}><CalendarMonthIcon fontSize='large' color="secondary"/></a></Box>
  }

  const imageUrl = props.images[props.service.mainImage!.sys.id] || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
  return (
    <Card>
      <CardHeader
        title={getWordsOnLocale(props.service, 'title', locale)}
        subheader={`¥${props.service.price}`}
        action={ showReservationIcon(props.service.reservation_url) }
      />
      <CardMedia
        component="img"
        height="550"
        image={imageUrl}
        alt="Service image"
      />
      <CardContent>
        {getWordsOnLocale(props.service, 'description', locale).content.map((e: IServices, i: number) => {
          return (
            <>
            <Box mt={ i > 0 ? 2: 0}>
              <Typography variant="body2" color="text.secondary">
                {e.content.map((f) => f.value).join('')}
              </Typography>
            </Box>
            </>
          )
        })}
      </CardContent>
      <ServiceDetails service={props.service} serviceDetails={props.serviceDetails} images={props.images} locale={locale} i18n={i18n} />
    </Card>
  )
}