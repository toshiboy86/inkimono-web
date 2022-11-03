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
  const { getCurrentLocale, wi18n } = useLocale()  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const reserveIcon = () => {
    return <Link href='/service' locale={getCurrentLocale()}><CalendarMonthIcon /></Link>
  }
  return (
    <Card>
      <CardHeader
        title={props.service.fields.title_en}
        subheader={`¥${props.service.fields.price}`}
        action={ reserveIcon() }
      />
      <CardMedia
        component="img"
        height="550"
        image="https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Fkimono_couple.jpg?alt=media&token=68d54fa9-f793-4af0-9733-7ef08c9e493f"
        alt="Paella dish"
      />
      <CardContent>
        {props.service.fields.description_ja.content.map((e, i) => {
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
                  <Typography paragraph sx={{ borderBottom: '1px solid' }} key={e.fields.title_en}>{e.fields.title_en}</Typography>
                )
              })
            }
          </CardContent>
        </Collapse>
      }
    </Card>
  );
}