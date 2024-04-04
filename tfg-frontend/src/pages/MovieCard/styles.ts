import styled from 'styled-components';

export const Details = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    transition: opacity 0.3s ease;
`;
export const Card = styled.div`
    position: relative;
    width: 19%;
    height: 380px;
    background: #0b1620;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover ${Details} {
        display: block;
    }
    &:hover img {
        transform: scale(1.1);
    }
`;
export const Image = styled.img`
`;
export const Poster = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        transition: transform 0.3s ease;
    }

`;
export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  padding: 5%;
  text-overflow: ellipsis;
`;
export const Subtitle = styled.h2`
  font-size: 0.8rem;
  color: #656565;
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
  text-overflow: ellipsis;
`;
export const NoPosterText = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  margin-top: 7rem;
`;