import React from "react";
import styled from "styled-components";
import doi from "../assets/do.png";
import bb from "../assets/bb.jpeg";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
  padding: 5vh 0 10vh 0;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const sponsors = {
  "max-width": "1000px",
  margin: "0 auto",
  "text-align": "center",
  display: "flex",
};

const listing = {
  margin: "0 auto",
  width: "50%",
};

const sponsor = {
  "max-width": "70%",
};

export default function SponsorsComponent() {
  return (
    <Hero>
      <Title>Sponsors</Title>
    </Hero>
  );
}
