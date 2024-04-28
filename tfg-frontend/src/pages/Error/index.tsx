import React from 'react'
import { ErrorContainer, Text } from './styles'
import LottieComponent from '../../components/LottieComponent'
import ErrorAnimation from '../../lotties/error-animation.json';


export const Error = () => {
  return (
    <ErrorContainer>
        <LottieComponent animation={ErrorAnimation} height={300} width={300}/>
        <Text>Something went wrong... Sorry for that!</Text>
    </ErrorContainer>
  )
}
