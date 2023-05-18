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
import { useLocale } from '../src/hooks/useLocale'
import { TLocation } from '../types'

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

export default function ServiceCard(props: {location: TLocation}) {
  const [expanded, setExpanded] = React.useState(false)
  console.log(props.location.fields)
  const { getCurrentLocale, getWordsOnLocale, wi18n } = useLocale()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const showReservationIcon = (url?: string) => {
    if (!url) return
    return <Box mt={1} ml={3}><a target='_blank' rel="noreferrer" href={url}><CalendarMonthIcon fontSize='large' color="secondary"/></a></Box>
  }

  return (
    <Card>
      <CardHeader
        title={getWordsOnLocale(props.location.fields, 'title')}
        // action={ showReservationIcon(props.location.fields.reservation_url) }
      />
      <CardMedia
        component="img"
        height="550"
        image={props.location.fields.main_image?.fields.file.url || 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}
        alt="Service image"
      />
      <CardContent>
        {getWordsOnLocale(props.location.fields, 'description').content.map((e: TLocation['fields']['description_en'], i: number) => {
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

    </Card>
  );
}