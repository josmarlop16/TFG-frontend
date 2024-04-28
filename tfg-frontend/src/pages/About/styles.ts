import styled from "styled-components";

export const AboutPage = styled.div`
  background-color: #101415;
  width: 100%;
  height: 100%;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  color: #fafafa;
  background-color: #222;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  ul {
    margin-left: 20px;
    margin-top: 10px;
    padding-left: 20px;
  }
  li {
    margin-bottom: 8px;
  }
`;
