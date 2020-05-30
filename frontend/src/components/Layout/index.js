import React from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import AuthContext from "../../lib/auth-context";
import Head from "./Head";

const NavbarContainer = styled.div`
  height: 10vh;
  background: ${props => props.theme.pink};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Logo = styled.img`
  height: 4vh;
`;

const LogoutBtn = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.lightPink};
`;

export default function Layout({ title, children }) {
  const { setLoggedIn, setUser } = React.useContext(AuthContext);
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

  return (
    <>
      <Head title={title} />
      <NavbarContainer>
        <Logo
          src="https://thegirlcode.co/img/logo_white.png"
          alt="TheGirlCode"
        />

        <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      </NavbarContainer>
      {children}
      <Footer>
        <span>&copy; TheGirlCode 2020</span>
      </Footer>
    </>
  );
}
