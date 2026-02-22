'use client';
import { useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import type { FC } from 'react';
import {
  Dialog,
  DialogContent,
} from './ui/dialog';

const myLoader = ({ src, quality }: ImageLoaderProps) => {
  return `${src}?w=700&h=1000&q=${quality || 75}`;
};

export const ImageGrid: FC<{
  images: string[];
  className?: string;
  height?: number;
}> = ({ images, className, height }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 p-4 md:grid-cols-3 ${className ?? ''}`}>
      {images.map((img: string) => (
        <div
          key={img}
          className="overflow-hidden rounded-xl shadow-md transition-all duration-200"
        >
          <Image
            loader={myLoader}
            unoptimized
            src={`${img}?w=700&h=1000&q=75`}
            alt={`Portfolio picture: ${img}`}
            width={700}
            height={height || 1000}
            loading="lazy"
            className="block h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
};

export const ModalImageGrid: FC<{
  images: string[];
  className?: string;
  height?: number;
}> = ({ images, className, height }) => {
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

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 p-4 md:grid-cols-3 ${className ?? ''}`}>
        {images.map((img: string) => (
          <button
            key={img}
            type="button"
            onClick={() => handleOpen(img)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Image
              loader={myLoader}
              unoptimized
              src={`${img}?w=700&h=1000&q=75`}
              alt={`Portfolio picture: ${img}`}
              width={700}
              height={height || 1000}
              loading="lazy"
              className="block h-auto w-full"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-h-[90vh] w-[90%] max-w-[500px] overflow-hidden rounded-3xl border-0 p-4 shadow-2xl">
          {modalImage && (
            <img
              src={modalImage}
              alt="Portfolio enlarged view"
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGrid;
