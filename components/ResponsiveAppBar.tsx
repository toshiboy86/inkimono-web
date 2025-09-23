'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { convertFirstLetterCapital, getNextLocale } from '../src/utils';
import { TLocale } from '../src/entities';
const pages = [
  {
    link: 'redirect', // TODO: fix the issue that '/' link href is causes server side error.
    text: 'home',
  },
  {
    link: 'service',
    text: 'Plans & Pricing',
  },
  {
    link: 'portfolio',
    text: 'portfolio',
  },
  {
    link: 'workshop',
    text: 'workshop',
  },
  {
    link: 'location',
    text: 'location',
  },
  {
    link: 'inquiry',
    text: 'inquiry',
  },
  {
    link: 'faq',
    text: 'faq',
  },
];

export default function ResponsiveAppBar(params: { lang: TLocale }) {
  const { lang } = params;

  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  };

  const nextLocale = getNextLocale(lang, usePathname());

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'oklch(100% 0 0)',
        borderBottom: '1px solid oklch(91.9% 0.011 210)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Link href="redirect" locale={lang}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Inter, Noto Sans JP, system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: 'oklch(35.9% 0.023 210)',
                textDecoration: 'none',
                fontSize: '1.25rem',
              }}
            >
              InKimono
            </Typography>
          </Link>
          {/* For Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: 'oklch(35.9% 0.023 210)',
                '&:hover': {
                  backgroundColor: 'oklch(95.9% 0.006 210)',
                },
              }}
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
                '& .MuiPaper-root': {
                  borderRadius: '1.5rem',
                  border: '1px solid oklch(91.9% 0.011 210)',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  mt: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{
                    borderRadius: '0.75rem',
                    mx: 1,
                    my: 0.5,
                    '&:hover': {
                      backgroundColor: 'oklch(95.9% 0.006 210)',
                    },
                  }}
                >
                  <Link href={page.link} locale={lang}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: 'oklch(35.9% 0.023 210)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                      }}
                    >
                      {convertFirstLetterCapital(page.text)}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem
                key={nextLocale.path}
                onClick={handleCloseNavMenu}
                sx={{
                  borderRadius: '0.75rem',
                  mx: 1,
                  my: 0.5,
                  '&:hover': {
                    backgroundColor: 'oklch(95.9% 0.006 210)',
                  },
                }}
              >
                <Link href={nextLocale.path}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: 'oklch(58.2% 0.196 30.2)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                    }}
                  >
                    {convertFirstLetterCapital(nextLocale.value)}
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link href="redirect" locale={lang}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Inter, Noto Sans JP, system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: 'oklch(35.9% 0.023 210)',
                textDecoration: 'none',
                fontSize: '1.25rem',
              }}
            >
              InKimono
            </Typography>
          </Link>
          {/* For Desktop */}
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}
          >
            {pages.map((page) => (
              <Link href={page.link} key={page.text} locale={lang}>
                <Button
                  key={page.text}
                  sx={{
                    my: 2,
                    color: 'oklch(35.9% 0.023 210)',
                    display: 'block',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    borderRadius: '1.5rem',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: 'oklch(95.9% 0.006 210)',
                      color: 'oklch(58.2% 0.196 30.2)',
                    },
                  }}
                >
                  {convertFirstLetterCapital(page.text)}
                </Button>
              </Link>
            ))}
            <Link href={`${nextLocale.path}`}>
              <Button
                key={nextLocale.path}
                sx={{
                  my: 2,
                  display: 'block',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  borderRadius: '1.5rem',
                  px: 3,
                  py: 1,
                  backgroundColor: 'oklch(58.2% 0.196 30.2)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'oklch(51.4% 0.176 30.2)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {convertFirstLetterCapital(nextLocale.value)}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
