'use client';
import React, { useState, useCallback } from 'react';
// import Carousel, { Modal, ModalGateway } from 'react-images';
// import Gallery from 'react-photo-gallery';

interface Image {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
  srcSet?: string;
}

interface Props {
  images: Image[];
}

export default function PhotoGallery({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  // @ts-ignore: Unreachable code error
  const openLightbox = useCallback((event: React.MouseEvent, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      photo gallery
      {/* <Gallery photos={images} onClick={openLightbox} /> */}
      {/* @ts-ignore: Unreachable code error */}
      {/* <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              // @ts-ignore: Unreachable code error
              views={images.map((image) => ({
                ...image,
                srcset: image.srcSet,
                caption: image.caption,
              }))}
            />
          </Modal>
        )}
      </ModalGateway> */}
    </>
  );
}
