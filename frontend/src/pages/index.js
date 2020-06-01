import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import withAuth from "../lib/with-auth.js";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  max-width: 450px;
  width: 95%;
  background: #fff;
  padding: 20px;
  border-top: 6px solid ${(props) => props.theme.pink};
  background: #fefefe;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.04);
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 300px;
  margin: 20px auto;
  display: block;
  font-size: 1.1rem;
  padding: 10px 20px;
  border: 2px solid #eaeaef;
  border-radius: 4px;

  &:focus,
  &:active {
    outline: none;
    border-color: ${(props) => props.theme.pink};
  }
`;

const ButtonContainer = styled.div`
  width: 300px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 15px 25px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background: ${(props) => props.theme.pink};
  border: none;
  border-radius: 4px;
`;

function Home() {
  const history = useHistory();
  const { addToast } = useToasts();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const req = await axios.post("/api/auth/login", { email, password });
      console.log(req);

      if (!req.data.success) {
        addToast(req.data.message, { appearance: "error", timeout: 1500 });
      } else {
        if (req.data.user.name) {
          history.push("/dashboard");
        } else {
          history.push("/initial");
        }
      }
    } catch (e) {
      console.log(e);
      addToast(e.message, { appearance: "error", timeout: 1500 });
    }

    setSubmitting(false);
  };

  return (
    <>
      <Layout title="Login">
        <Container>
          <Box>
            <Heading>Login</Heading>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button onClick={handleSubmit} disabled={submitting}>
                Login
              </Button>
            </ButtonContainer>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default withAuth(Home, false, "/dashboard");
