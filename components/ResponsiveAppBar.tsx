import * as React from 'react';
import { useRouter } from 'next/router'
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
import Link from 'next/link'
import { convertFirstLetterCapital } from '../src/utils'
import { useLocale } from '../src/hooks/useLocale'

const pages = [
  {
    link: '/',
    text: 'home'
  },
  {
  link: 'service',
  text: 'service'
},
{
  link: 'portfolio',
  text: 'portfolio'
},
{
  link: 'inquiry',
  text: 'inquiry'
}]

const ResponsiveAppBar = () => {
  const { getCurrentLocale, getNextLocale, wi18n } = useLocale()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href='/' locale={getCurrentLocale()}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
                  <Link href={page.link} locale={getCurrentLocale()}>
                    <Typography textAlign="center">{convertFirstLetterCapital(page.text)}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key={getNextLocale()} onClick={handleCloseNavMenu}>
                <Link href={useRouter().pathname} locale={getNextLocale()}>
                  <Typography textAlign="center" color={'rgb(197, 74, 25)'}>{convertFirstLetterCapital(wi18n().t('links.nextLocale'))}</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link href='/' locale={getCurrentLocale()}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.text} locale={getCurrentLocale()}>
                <Button
                  key={page.text}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {convertFirstLetterCapital(page.text)}
                </Button>
              </Link>
            ))}
            <Link href={useRouter().pathname} locale={getNextLocale()}>
              <Button
                key={wi18n().t('links.nextLocale')}
                color="secondary"
                sx={{ my: 2, display: 'block', fontWeight: 'bold' }}
              >
                {convertFirstLetterCapital(wi18n().t('links.nextLocale'))}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
