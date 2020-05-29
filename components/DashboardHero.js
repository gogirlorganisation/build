import React from "react";
import styled from "styled-components";
import firebase from "../lib/firebase";

const Hero = styled.div`
  width: 100%;
  height: 70vh;
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

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  font-size: 1.6rem;
  background-color: #ddd;
`;

const Level = styled.div`
  width: 30%;
  background-color: rgba(255, 51, 85, 0.85);
  padding: 5px 0;
`;

export default function HeroComponent() {
  const [name, setName] = React.useState("");
  const [points, setPoints] = React.useState("");

  React.useEffect(() => {
    if (firebase.auth().currentUser) {
      setName(firebase.auth().currentUser.displayName);
      setPoints(firebase.auth().currentUser.points || 100);
    }
  }, []);

  return (
    <Hero>
      <Name>Hello, {name}</Name>
      <Points>You have {points} Points</Points>
      <Container>
        <Level></Level>
      </Container>
    </Hero>
  );
}
