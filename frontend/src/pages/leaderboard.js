import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import AuthContext from "../lib/auth-context";
import withAuth from "../lib/with-auth";

const Container = styled.div`
  min-height: 80vh;
  max-width: 940px;
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled.td`
  font-size: 1rem;
  padding: 15px 20px;
  text-align: center;

  &:nth-child(2) {
    width: 99%;
    text-align: left;
  }
`;

const Header = styled.tr`
  background: ${(props) => props.theme.pink};

  * {
    color: #fff;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;

  &:first-child {
    border-radius: 3px 0 0 0;
    text-align: center;
  }

  &:last-child {
    border-radius: 0 3px 0 0;
    text-align: center;
  }
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background: ${(props) => props.theme.lightPink};
  }

  &:last-child {
    td:first-child {
      border-radius: 0 0 0 3px;
    }
    td:last-child {
      border-radius: 0 0 3px 0;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
`;

function Leaderboard() {
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
    <Layout title="Leaderboard" fetchuser={true}>
      <Container>
        <Title>Leaderboard</Title>
        <Table>
          <Header>
            <HeaderCell>Pos</HeaderCell>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Points</HeaderCell>
          </Header>
          {users.map((u, i) => (
            <Row>
              <Cell>{i + 1}</Cell>
              <Cell>{u.name}</Cell>
              <Cell>{u.points}</Cell>
            </Row>
          ))}
        </Table>
      </Container>
    </Layout>
  );
}

export default Leaderboard;
