import React from 'react';
import { MediaCarrousel, Thumb, Title } from './styles';
import ReactPlayer from 'react-player/lazy';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface ImageComponentProps {
  trailers: { url: string }[];
}

const TrailerComponent: React.FC<ImageComponentProps> = ({ trailers }) => {
  return (
    <MediaCarrousel>
      <Title>Videos</Title>
      <Splide options={{ perPage: 1, arrows: true, autoplay: true, lazyLoad: true, width:"60vw", wheel: true }}>
        {trailers.map((trailer, index) => (
          <SplideSlide key={index}>
            <Thumb>
              <ReactPlayer 
                url={trailer.url}
                light={true}
                style={{ 
                  maxWidth: '700px', 
                  width: '100%',
                  height: 'auto', 
                }} />
            </Thumb>
          </SplideSlide>
        ))}
      </Splide>
    </MediaCarrousel>
  );
};

export default TrailerComponent;
