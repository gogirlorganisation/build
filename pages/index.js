import styled from "styled-components";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import Head from "../components/Layout/Head";
import firebase from "../lib/firebase";
import { GoogleProvider, FacebookProvider, WithAuth } from "../lib/auth";
import withContexts from "../lib/with-contexts";

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

function Home() {
  const router = useRouter();
  const { addToast } = useToasts();

  React.useEffect(() => {
    if (firebase.auth().currentUser) {
      router.push("/dashboard");
    }
  }, []);

  const handleProviderLogin = provider => async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      if (result.user) {
        router.push("/dashboard");
      }
    } catch (e) {
      // TODO: Show error
      console.error(e);
      addToast(e.message, { appearance: "error", timeout: 1500 });
    }
  };

  return (
    <>
      <Head title="Login" />
      <WithAuth authenticated={false}>
        <Container>
          <Box>
            <Heading>Login</Heading>
            <Buttons>
              <GoogleLoginButton
                style={{ margin: "20px 0" }}
                onClick={handleProviderLogin(GoogleProvider)}
              />
              <FacebookLoginButton
                style={{ margin: "20px 0" }}
                onClick={handleProviderLogin(FacebookProvider)}
              />
            </Buttons>
          </Box>
        </Container>
      </WithAuth>
    </>
  );
}

export default withContexts(Home);
