import React from "react";
import styled from "styled-components";
import AuthContext from "../lib/auth-context";

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
`;

const Name = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    font-size: 3.3rem;
  }

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Points = styled.div`
  font-size: 1.6rem;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }

  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

export default function HeroComponent() {
  const {
    user: { name, points },
  } = React.useContext(AuthContext);

  return (
    <Hero>
      <Name>Hello, {name}</Name>
      <Points>You have {points} Points</Points>
    </Hero>
  );
}
