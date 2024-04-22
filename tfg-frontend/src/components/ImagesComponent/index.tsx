import React, { useState } from 'react';
import { MediaCarrousel, Image, Overlay, OverlayImage } from './styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

interface ImageComponentProps {
  images: { url: string }[];
}

const ImageComponent: React.FC<ImageComponentProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setSelectedImageIndex(null);
  };

  return (
    <MediaCarrousel>
      <Splide options={{ perPage: 2, arrows: true, slideFocus: true, autoplay: true, gap: "0.1rem", lazyLoad: true }}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          </SplideSlide>
        ))}
      </Splide>
      {selectedImageIndex !== null && (
        <Overlay onClick={handleCloseOverlay}>
          <OverlayImage
            src={images[selectedImageIndex].url}
            alt={`Image ${selectedImageIndex + 1}`}
          />
        </Overlay>
      )}
    </MediaCarrousel>
  );
};

export default ImageComponent;
