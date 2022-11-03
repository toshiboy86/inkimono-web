import {useState} from 'react';
import Image from 'next/image'
import type { FC } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import Grid, {GridTypeMap} from '@mui/material/Grid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImageGrid: FC<{ images: string[], props?: GridTypeMap['props'], isModal?: boolean, height?: number}> = ({ images, props, isModal=true, height }) => {
  const [modalImage, setModalImage] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = (image: string) => {
    setOpen(true)
    setModalImage(image)
  }
  const handleClose = () => {
    setOpen(false)
    setModalImage('')
  };

  const myLoader = ({ src, quality }) => {
    return `${src}?w=700&h=1000&q=${quality || 75}`
  }

  return (
    <Grid container spacing={1} height={'auto'} p={3} mt={2} {...props}>
      {images.map((img: string) => {
        return (
          <Grid item xs={12} md={4} key={img}>
            <Image
              onClick={() => { if(isModal) handleOpen(`http://images.ctfassets.net/ofubuqdlqhhx/${img}`)}}
              loader={myLoader}
              src={img}
              alt={`Portfolio picture: ${img}`}
              width={700}
              height={height || 1000}
              loading='lazy'
              objectFit='cover'
            />
          </Grid>
        )
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component='img'
            sx={{
              width: '100%',
              'object-fit': 'cover',
            }}
            src={modalImage}>
          </Box>
        </Box>
      </Modal>
    </Grid>
  )
}

export default ImageGrid