'use client'
import * as React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PortraitIcon from '@mui/icons-material/Portrait';
import { TService } from '../src/entities/repositories'
import { IServiceDetailFields } from '../@types/generated/contentful';
import { TI18n, TLocale } from '../src/entities';
import { getWordsOnLocale } from '../src/utils';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface IServices {
  content: [
    {value: string[]}
  ]
}


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
      <CardActions disableSpacing>
        <Box mb={2} ml={1} textAlign={'center'} display={props.service.reservation_url ? 'block' : 'none' }>
          <a target='_blank' rel="noreferrer" href={props.service.reservation_url || '/'}><Button variant="contained">{ i18n['general']['reserve'] }</Button></a>
        </Box>
        <Box mb={1.5} ml={1} textAlign={'center'}>
        <Link href='/portfolio' locale={locale}><PortraitIcon fontSize='large' /></Link>
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {props.service.serviceDetails && 
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {
              props.service.serviceDetails.map((e) => {
                return (
                  <Typography paragraph sx={{ borderBottom: '1px solid' }} key={e.sys.id}>{getWordsOnLocale(props.serviceDetails[e.sys.id], 'title', locale)}</Typography>
                )
              })
            }
          </CardContent>
        </Collapse>
      }
    </Card>
  )
}