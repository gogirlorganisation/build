import styled, { ThemeProvider } from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  createButton,
} from "react-social-login-buttons";

import Head from "../components/Layout/Head";
import theme from "../lib/theme";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.lightPink};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  max-width: 450px;
  width: 95%;
  background: #fff;
  padding: 20px;
  border-top: 6px solid ${props => props.theme.pink};
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  margin: 20px 0;
`;

const Buttons = styled.div`
  max-width: 350px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
`;

const MailLoginButton = createButton({
  text: "Login with Facebook",
  icon: "envelope",
  iconFormat: name => `fas fa-${name}`,
  style: { background: theme.pink },
  activeStyle: { background: "rgb(255, 51, 85)" },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head title="Login" />
        <Container>
          <Box>
            <Heading>Login</Heading>
            <Buttons>
              <GoogleLoginButton style={{ margin: "20px 0" }} />
              <FacebookLoginButton style={{ margin: "20px 0" }} />
              <MailLoginButton style={{ margin: "20px 0" }} />
            </Buttons>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
