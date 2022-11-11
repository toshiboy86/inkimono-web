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
import { useLocale } from '../src/hooks/useLocale'
import { TService } from '../types/'

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

export default function ServiceCard(props: {service: TService}) {
  const [expanded, setExpanded] = React.useState(false)
  const { getCurrentLocale, getWordsOnLocale, wi18n } = useLocale()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const showReservationIcon = (url?: string) => {
    if (!url) return
    return <Link href={url} locale={getCurrentLocale()}><CalendarMonthIcon /></Link>
  }
  return (
    <Card>
      <CardHeader
        title={getWordsOnLocale(props.service.fields, 'title')}
        subheader={`¥${props.service.fields.price}`}
        action={ showReservationIcon(props.service.fields.reservation_url) }
      />
      <CardMedia
        component="img"
        height="550"
        image={props.service.fields.mainImage?.fields.file.url || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}
        alt="Service image"
      />
      <CardContent>
        {getWordsOnLocale(props.service.fields, 'description').content.map((e: IServices, i: number) => {
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
        <Box mb={2} ml={1} textAlign={'center'}>
          <Link href='/portfolio' locale={getCurrentLocale()}><Button variant="contained">{ wi18n().t('general.see_more_portfolio')}</Button></Link>
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
      {props.service.fields.serviceDetails && 
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {
              props.service.fields.serviceDetails.map((e) => {
                return (
                  <Typography paragraph sx={{ borderBottom: '1px solid' }} key={e.fields.title_en}>{getWordsOnLocale(e.fields, 'title')}</Typography>
                )
              })
            }
          </CardContent>
        </Collapse>
      }
    </Card>
  );
}