import {useState} from 'react';
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

const ImageGrid: FC<{ images: string[], props?: GridTypeMap['props'], isModal?: boolean}> = ({ images, props, isModal=true }) => {
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

  return (
    <Grid container spacing={1} height={'auto'} p={3} mt={2} {...props}>
      {images.map((img: string) => {
        return (
          <Grid item xs={12} md={4} key={img}>
            <Box
              onClick={() => { if(isModal) handleOpen(img)}}
              component='img'
              sx={{
                width: '100%',
                'object-fit': 'cover',
              }}
              src={img}>
            </Box>
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