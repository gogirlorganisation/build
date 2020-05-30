import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
  padding: 5vh 0 10vh 0;
  background-color: ${props => props.theme.pink};
  color: white;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Cards = styled.div`
  max-width: 1200px;
  width: 80%;
  justify-content: center;
  display: flex;
  text-align: center;

  @media screen and (max-width: 1200px) {
    display: block;
    width: 90%;
  }
`;

const Card = styled.div`
  margin: 10px 20px;
  width: 30%;
  height: 30vh;
  min-height: 220px;
  cursor: pointer;
  display: inline-block;
  background: #fff;
  border: none;
  padding: 40px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
  transition: all 250ms ease;
  border-radius: 20px;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    width: 50%;
    min-width: 220px;
  }
`;

export default function BadgesComponent() {
  return (
    <Hero>
      <Title>My Badges</Title>
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
    </Hero>
  );
}
