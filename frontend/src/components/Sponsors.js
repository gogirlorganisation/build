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
  padding: 5vh 0;
  background: ${(props) => props.theme.pink};

  * {
    color: #fff;
  }
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
  max-width: 950px;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.09);
`;

const Sponsor = styled.img`
  background: #fff;
`;

export default function SponsorsComponent() {
  return (
    <Hero>
      <Title>Sponsors</Title>
      <Sponsors>
        <Card height="250px" width="250px">
          <Sponsor
            src={doi}
            alt="DigitalOcean"
            style={{ height: "200px", width: "auto" }}
          />
        </Card>
        <Card height="250px" width="250px">
          <Sponsor
            src={qualified}
            alt="Qualified"
            style={{ width: "220px", height: "auto" }}
          />
        </Card>
        <Card height="250px" width="250px">
          <Sponsor src={bb} alt="" style={{ height: "200px", width: "auto" }} />
        </Card>
      </Sponsors>
    </Hero>
  );
}
