import React from "react";
import styled from "styled-components";
import doi from "../assets/do.png";
import bb from "../assets/bb.jpeg";
import qualified from "../assets/qualified.svg";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
  padding: 5vh 0;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Sponsors = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Sponsor = styled.img`
  margin: 20px;
`;

export default function SponsorsComponent() {
  return (
    <Hero>
      <Title>Sponsors</Title>
      <Sponsors>
        <Sponsor
          src={doi}
          alt="DigitalOcean"
          style={{ height: "150px", width: "auto" }}
        />
        <Sponsor
          src={qualified}
          alt="Qualified"
          style={{ width: "200px", height: "auto" }}
        />
        <Sponsor src={bb} alt="" style={{ height: "150px", width: "auto" }} />
      </Sponsors>
    </Hero>
  );
}
