import React from 'react'
import { AboutContainer, Subtitle, Title, AboutText, AboutPage } from './styles'
import { AnimatedPage } from '../../components/AnimatedPage'

export const About = () => {
  return (
    <AnimatedPage>
    <AboutPage>
       <AboutContainer>
        <Title>
          About
        </Title>
        <Subtitle>
          What is Movie Eater?
        </Subtitle>
        <AboutText>
          How many times have you found yourself endlessly scrolling through streaming platforms in search of the perfect movie for your night in? Or perhaps you've wanted to explore the complete filmography of your favorite actor, only to be overwhelmed by scattered information across the web. These everyday challenges led to the creation of Movie Eater – your one-stop solution for all things cinema.
          <br/>
          With a vast database boasting over 20,000 movies, Movie Eater simplifies your search process by offering a variety of filters including genre, release date, and cast, among others. Our user-friendly interface ensures a seamless browsing experience, allowing you to discover and explore films effortlessly.
        </AboutText>
        <Subtitle>
          Our Commitment to User Privacy and Data Protection
        </Subtitle>
        <AboutText>
          At Movie Eater, we prioritize the privacy and security of our users' data. We adhere to strict data protection guidelines and employ advanced encryption techniques to safeguard your personal information. Our approach to data management is centered around transparency and accountability, ensuring that your trust in us is well-placed.
          <br/>
          We believe in being minimally intrusive with our design, prioritizing simplicity and user-friendliness. Our platform is designed to provide a seamless and enjoyable experience without compromising on privacy or security. We understand the importance of maintaining a balance between functionality and ease of use, and we continuously strive to achieve that balance.
        </AboutText>
        <Subtitle>
          The Benefits of Signing Up
        </Subtitle>
        <AboutText>
          While Movie Eater is accessible to all users, there are additional benefits to signing up:
          <ul>
            <li>
              Create personalized movie lists to curate your favorite films or explore specific genres or themes.
            </li>
            <li>
              Receive tailored recommendations based on your movie preferences, enhancing your viewing experience.
            </li>
          </ul>
        </AboutText>
        <Subtitle>
          Our Vision and Future Development
        </Subtitle>
        <AboutText>
          Movie Eater is not just a platform; it's a project born out of passion and dedication. Developed as a part of a final degree project, we are committed to continuous improvement and value your feedback. Your suggestions and insights play a crucial role in shaping the future of Movie Eater, and we are dedicated to delivering an unparalleled movie-watching experience.
          <br/>
          As we embark on this journey, we invite you to join us in our quest to make movie-watching simpler, more enjoyable, and tailored to your preferences. Together, let's explore the vast world of cinema and discover the magic of storytelling.
        </AboutText>
      </AboutContainer>
    </AboutPage>
    </AnimatedPage>
  )
}
