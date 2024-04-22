import React from 'react'
import Lottie from 'react-lottie';
import EmptyAnimation from "../../lotties/empty-box-animation.json";
import { EmptyAnimationContainer, Text } from './styles';

interface EmptyAnimationComponentProps {
  text: string;
}

const EmptyAnimationComponent: React.FC<EmptyAnimationComponentProps> = ({ text }) => {
  return (
    <EmptyAnimationContainer>
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: EmptyAnimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={200}
        width={200}
      />
      <Text>{text}</Text>
    </EmptyAnimationContainer>
  )
}

export default EmptyAnimationComponent;