import React from 'react'
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";

const LoadingAnimationComponent = () => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
      height={200}
      width={200}
    />
  )
}

export default LoadingAnimationComponent