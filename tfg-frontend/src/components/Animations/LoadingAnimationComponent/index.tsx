import React from 'react'
import LoadingAnimation from "../../../lotties/loading-animation.json";
import LottieComponent from '../../LottieComponent';

const LoadingAnimationComponent = () => {
  return (
    <LottieComponent animation={LoadingAnimation} height={100} width={100}/>
  )
}

export default LoadingAnimationComponent