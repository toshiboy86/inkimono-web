'use client';
import CardMedia from '@mui/material/CardMedia';

export default function MapCard() {
  return (
    <CardMedia
      title="InKimono Map"
      component="iframe"
      image="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12957.077060825!2d139.8002235!3d35.7195958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0811fa9b89cd301!2sinKIMONO!5e0!3m2!1sja!2sjp!4v1641210479819!5m2!1sja!2sjp"
      height={300}
      sx={{
        border: 0,
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    />
  );
}
