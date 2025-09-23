'use client';
import { useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import type { FC } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid, { GridTypeMap } from '@mui/material/Grid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500 },
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'oklch(100% 0 0)',
  border: 'none',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  p: 2,
  outline: 'none',
};

const ImageGrid: FC<{
  images: string[];
  props?: GridTypeMap['props'];
  isModal?: boolean;
  height?: number;
}> = ({ images, props, isModal = true, height }) => {
  const [modalImage, setModalImage] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = (image: string) => {
    setOpen(true);
    setModalImage(image);
  };
  const handleClose = () => {
    setOpen(false);
    setModalImage('');
  };

  const myLoader = ({ src, quality }: ImageLoaderProps) => {
    return `${src}?w=700&h=1000&q=${quality || 75}`;
  };

  return (
    <Grid container spacing={2} height={'auto'} p={2} {...props}>
      {images.map((img: string) => {
        return (
          <Grid
            item
            xs={12}
            md={4}
            key={img}
            onClick={() => {
              if (isModal) handleOpen(img);
            }}
            sx={{
              cursor: isModal ? 'pointer' : 'default',
              '&:hover': isModal
                ? {
                    transform: 'translateY(-2px)',
                    transition: 'transform 200ms ease-out',
                  }
                : {},
            }}
          >
            <Box
              sx={{
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'all 200ms ease-out',
                '&:hover': isModal
                  ? {
                      boxShadow:
                        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    }
                  : {},
              }}
            >
              <Image
                loader={myLoader}
                unoptimized
                src={`${img}?w=700&h=1000&q=75`}
                alt={`Portfolio picture: ${img}`}
                width={700}
                height={height || 1000}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: 'blur(4px)',
        }}
      >
        <Box sx={style}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '0.75rem',
            }}
            src={modalImage}
          />
        </Box>
      </Modal>
    </Grid>
  );
};

export default ImageGrid;
