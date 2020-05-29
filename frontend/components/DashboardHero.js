import React from "react";
import styled from "styled-components";
import firebase from "../lib/firebase";

const Hero = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Points = styled.div`
  font-size: 1.2rem;
`;

export default function HeroComponent() {
  const [name, setName] = React.useState("");
  const [points, setPoints] = React.useState("");

  React.useEffect(() => {
    setName(firebase.auth().currentUser.displayName);
    setPoints(firebase.auth().currentUser.points || 100);
  }, []);

  return (
    <Hero>
      <Name>Hello, {name}</Name>
      <Points>{points} Points</Points>
    </Hero>
  );
}
