'use client'
import * as React from 'react'
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PortraitIcon from '@mui/icons-material/Portrait';
import { TService } from '../src/entities/repositories'
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
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ServiceDetails = (props: {
  service: TService,
  serviceDetails: Record<string,IServiceDetailFields>,
  images: Record<string, string>,
  locale: TLocale,
  i18n: TI18n
}) => {
  const [isExpanded, setExpanded] = React.useState(false)

  const { locale, i18n } = props

  return (
    <>
      <CardActions disableSpacing>
        <Box mb={2} ml={1} textAlign={'center'} display={props.service.reservation_url ? 'block' : 'none' }>
          <a target='_blank' rel="noreferrer" href={props.service.reservation_url || '/'}><Button variant="contained">{ i18n['general']['reserve'] }</Button></a>
        </Box>
        <Box mb={1.5} ml={1} textAlign={'center'}>
        <Link href='/portfolio' locale={locale}><PortraitIcon fontSize='large' /></Link>
        </Box>
        <ExpandMore
          expand={isExpanded}
          onClick={() => setExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {props.service.serviceDetails && 
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
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
    </>
  )
}
export default ServiceDetails