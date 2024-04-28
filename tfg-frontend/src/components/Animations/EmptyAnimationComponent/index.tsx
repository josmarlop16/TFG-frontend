import React from 'react'
import EmptyAnimation from "../../../lotties/empty-box-animation.json";
import { EmptyAnimationContainer, Text } from './styles';
import LottieComponent from '../../LottieComponent';

interface EmptyAnimationComponentProps {
  text: string;
}

const EmptyAnimationComponent: React.FC<EmptyAnimationComponentProps> = ({ text }) => {
  return (
    <EmptyAnimationContainer>
      <LottieComponent animation={EmptyAnimation} height={200} width={200}/>
      <Text>{text}</Text>
    </EmptyAnimationContainer>
  )
}

export default EmptyAnimationComponent;