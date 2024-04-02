import React, { useState } from 'react';
import { MediaCarrousel, Image, Overlay, OverlayImage} from './styles';

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
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          alt={`Image ${index + 1}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
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
