'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import { convertFirstLetterCapital, getNextLocale } from '../src/utils'
import { TLocale } from '../src/entities';
const pages = [
  {
    link: 'redirect', // TODO: fix the issue that '/' link href is causes server side error.
    text: 'home'
  },
  {
    link: 'service',
    text: 'Plans & Pricing'
  },
  {
    link: 'portfolio',
    text: 'portfolio'
  },
  {
    link: 'location',
    text: 'location'
  },
  {
    link: 'inquiry',
    text: 'inquiry'
  },
  {
    link: 'faq',
    text: 'faq'
  }
]

export default function ResponsiveAppBar(params: { lang: TLocale }) {
  const { lang } = params

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  };

  const nextLocale = getNextLocale(lang, usePathname())

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href='redirect' locale={lang}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              InKimono
            </Typography>
          </Link>
          { /* For Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Link href={page.link} locale={lang}>
                    <Typography textAlign="center">{convertFirstLetterCapital(page.text)}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key={nextLocale.path} onClick={handleCloseNavMenu}>
                <Link href={nextLocale.path}>
                  <Typography textAlign="center" color={'rgb(197, 74, 25)'}>{convertFirstLetterCapital(nextLocale.value)}</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link href='redirect' locale={lang} >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              InKimono
            </Typography>
          </Link>
          { /* For Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.text} locale={lang}>
                <Button
                  key={page.text}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {convertFirstLetterCapital(page.text)}
                </Button>
              </Link>
            ))}
            <Link href={`${nextLocale.path}`}>
              <Button
                key={nextLocale.path}
                color="secondary"
                sx={{ my: 2, display: 'block', fontWeight: 'bold' }}
              >
                {convertFirstLetterCapital(nextLocale.value)}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
