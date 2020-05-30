import React from "react";
import styled from "styled-components";

import yay from "../assets/yay.jpg";

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
  margin-bottom: 2.5%;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Leaderboard = styled.div`
  margin: 10px 0;
  max-width: 900px;
  width: 60%;
  border: none;
  background: #ffe3e7;
  /* background-image: url(${yay}); */
  padding: 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
  transition: all 250ms ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  justify-content: center;
  text-align: center;
  display: flex;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Results = styled.div`
  margin: auto;
  max-height: 60vh;
  width: 70%;
  border: none;
  background: #fff;
  padding: 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function LeaderboardComponent() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const req = await fetch("/api/u/leaderboard");
        const data = await req.json();

        if (data.success) {
          setUsers(data.users);
        } else {
          console.error(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Hero>
      <Title>Leaderboard</Title>
      <Leaderboard>
        <Results>
          <table style={{ width: "100%", height: "100%" }}>
            {users.map((u, i) => (
              <tr key={i}>
                <td>
                  <b>{i + 1}</b>
                </td>
                <td>
                  <b>{u.name}</b>
                </td>
                <td>
                  <b>{u.points}</b>
                </td>
              </tr>
            ))}
          </table>
        </Results>
      </Leaderboard>
    </Hero>
  );
}
