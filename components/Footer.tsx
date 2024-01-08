'use client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Link from 'next/link'
import { TLocale } from '../src/entities'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'initial',
}));

export default function Footer(params: { lang: TLocale }) {
  const lang = params.lang
  return (
    <Box textAlign={'center'} pt={6} pb={6} sx={{ backgroundColor: '#f5f5f5', width: '100%', marginLeft: 'auto', marginRight: 'auto',}}>
      <Stack direction="row" justifyContent={'center'} spacing={2}>
        <Item><Link href='/' locale={lang}>About Me</Link></Item>
        <Item><Link href='/service' locale={lang}>Plans & Pricing</Link></Item>
        <Item><Link href='/inquiry' locale={lang}>Contact Me</Link></Item>
        <Item><Link href='/portfolio' locale={lang}>Portfolio</Link></Item>
        <Item><Link href='/location' locale={lang}>Location</Link></Item>
        <Item><Link href='/faq' locale={lang}>FAQ</Link></Item>
      </Stack>
      <Box mt={4} color={'#919191'}>Copyright © Design & Developed by InKimono. All rights reserved.</Box>
    </Box>
  )
  
}