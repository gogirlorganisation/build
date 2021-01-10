import React from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import AuthContext from "../../lib/auth-context";
import Head from "./Head";

const NavbarContainer = styled.div`
  height: 10vh;
  background: ${(props) => props.theme.pink};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 4vh;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 15px;
  color: #fff;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 430px) {
    font-size: 1rem;
    margin: 0 10px;
  }

  @media screen and (max-width: 330px) {
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.pink};
  color: #fff;
  * {
    color: #fff;
  }
`;

const Links = styled.div`
  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    padding-top: 0;
  }

  @media screen and (max-width: 430px) {
    padding: 20px 10px;
    padding-top: 0;
  }
`;

export default function Layout({ title, children, fetchuser }) {
  const { setLoggedIn, setUser, isLoggedIn } = React.useContext(AuthContext);
  const [authenticated, setAuthenticated] = React.useState(isLoggedIn);
  const { addToast } = useToasts();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setLoggedIn(false);
      setUser(false);

      history.push("/");
    } catch (e) {
      addToast(e.message, {
        appearance: "error",
        timeout: 1500,
      });
    }
  };

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const data = await (
          await fetch("/api/auth/me", {
            method: "POST",
          })
        ).json();

        setAuthenticated(data.authenticated);
      } catch (e) {
        console.error(e);
      }
    }

    fetchuser && fetchUser();
  }, []);

  return (
    <>
      <Head title={title} />
      <NavbarContainer>
        <LogoContainer>
          <Logo
            src="https://thegirlcode.co/img/logo_white.png"
            alt="TheGirlCode"
          />
        </LogoContainer>

        <Links>
          {!authenticated && <Link href="/pay.html">Register</Link>}
          {authenticated && <Link href="/dashboard">Home</Link>}
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/timetable">Timetable</Link>
          {!authenticated && <Link href="/">Login</Link>}
          {authenticated && <Link onClick={handleLogout}>Logout</Link>}
        </Links>
      </NavbarContainer>
      {children}
      <Footer>
        <span>&copy; TheGirlCode 2020</span>
      </Footer>
    </>
  );
}
