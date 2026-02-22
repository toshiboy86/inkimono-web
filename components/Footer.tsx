'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InstagramButton from './ui/InstagramButton';
import Link from 'next/link';
import { TLocale } from '../src/entities';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'initial',
}));

export default function Footer(params: { lang: TLocale }) {
  const lang = params.lang;
  return (
    <Box
      textAlign={'center'}
      pt={8}
      pb={8}
      sx={{
        backgroundColor: 'oklch(95.9% 0.006 210)',
        borderTop: '1px solid oklch(91.9% 0.011 210)',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        spacing={{ xs: 2, sm: 4 }}
        sx={{ mb: 4 }}
      >
        <Item>
          <Link
            href="/"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            About Me
          </Link>
        </Item>
        <Item>
          <Link
            href="/service"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            Plans & Pricing
          </Link>
        </Item>
        <Item>
          <Link
            href="/inquiry"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            Contact Me
          </Link>
        </Item>
        <Item>
          <Link
            href="/portfolio"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            Portfolio
          </Link>
        </Item>
        <Item>
          <Link
            href="/location"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            Location
          </Link>
        </Item>
        <Item>
          <Link
            href="/faq"
            locale={lang}
            style={{
              color: 'oklch(45.3% 0.026 210)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'color 200ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'oklch(58.2% 0.196 30.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'oklch(45.3% 0.026 210)';
            }}
          >
            FAQ
          </Link>
        </Item>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <InstagramButton />
      </Box>
      <Box
        sx={{
          color: 'oklch(56.5% 0.027 210)',
          fontSize: '0.875rem',
          fontWeight: 400,
        }}
      >
        Copyright © Design & Developed by InKimono. All rights reserved.
      </Box>
    </Box>
  );
}
