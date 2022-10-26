import React, { ReactNode, FC } from 'react'
import Typography, { TypographyTypeMap } from '@mui/material/Typography'

interface ITypographyVariants {
  headline1: {
    variant: TypographyTypeMap['props']['variant'],
    sx: TypographyTypeMap['props']['sx']
  }
}

const typographyVariant: ITypographyVariants = {
  headline1: {
    variant: 'h3',
    sx: {
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
      fontFamily: 'Roboto",sans-serif',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }
  }
}

// const CustomTypography = (variant?: keyof typeof typographyVariant, children: TypographyTypeMap['props']['children']) => {
const CustomTypography = (children: TypographyTypeMap['props']['children']) => {
  return (
    <Typography
      // variant={typographyVariant[variant].variant}
      noWrap
      // sx={typographyVariant[variant].sx}
    >
      {children}
    </Typography>
  )
}

export default CustomTypography