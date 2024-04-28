import React from 'react';
import Lottie from 'react-lottie';
import { LottieContainer } from './styles';

interface PreferencesComponentProps {
  animation: any;
  height?: number;
  width?: number;
}

const LottieComponent: React.FC<PreferencesComponentProps> = ({ animation, height, width}) => {
  return (
    <LottieContainer>
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          }
        }}
        height={height}
        width={width}
        isClickToPauseDisabled={true}
      />
    </LottieContainer>
  )
}

export default LottieComponent;