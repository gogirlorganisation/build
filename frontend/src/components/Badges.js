import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media screen and (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const NoBadges = styled.div`
  margin: 15px auto;
  font-size: 1.1rem;
`;

const Badges = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
`;

const Badge = styled.img`
  height: 25vh;
  width: auto;
  margin: 20px;
`;

export default function BadgesComponent() {
  const [badges, setBadges] = React.useState([]);

  React.useEffect(() => {
    async function fetchBadges() {
      try {
        const req = await fetch("/api/u/badges");
        const data = await req.json();

        if (data.success) {
          setBadges(data.badges);
        } else {
          console.error(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchBadges();
  }, []);

  return (
    <Hero>
      <Title>My Badges</Title>
      <Badges>
        {badges.length === 0 ? (
          <NoBadges>You do not have any badges.</NoBadges>
        ) : (
          badges.map((b) => <Badge src={b.img} alt="Badge" />)
        )}
      </Badges>
    </Hero>
  );
}
