import React from 'react'
import { MediaCarrousel } from './styles'
import ReactPlayer from 'react-player/lazy';

interface ImageComponentProps {
  trailers: { url: string }[];
}

const TrailerComponent: React.FC<ImageComponentProps> = ({ trailers }) => {
  return (
    <MediaCarrousel>
      {trailers.map((trailer) => (
      <ReactPlayer 
        url={trailer.url}
        light={true}
        style={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          minWidth: '700px', 
          height: 'auto', 
          marginBottom: '10px', 
          justifyContent: 'center', 
          alignItems: 'center',
       }} />
      ))}
    </MediaCarrousel>
  )
}

export default TrailerComponent;