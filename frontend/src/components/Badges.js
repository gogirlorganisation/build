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
  background-color: ${(props) => props.theme.pink};
  color: white;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;

  @media screen and (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Cards = styled.div`
  max-width: 1200px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
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
  padding: 20px;
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

const NoBadges = styled.div`
  margin: 30px auto;
  font-size: 1.1rem;
  color: #fff;
`;

const BadgeImg = styled.img`
  height: 90%;
  width: auto;
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
      <Cards>
        {badges.length === 0 ? (
          <NoBadges>You do not have any badges.</NoBadges>
        ) : (
          badges.map((b) => (
            <Card>
              <BadgeImg src={b.img} alt="Badge" />
            </Card>
          ))
        )}
      </Cards>
    </Hero>
  );
}
