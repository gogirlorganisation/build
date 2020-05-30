import React from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
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

export default function Layout({ title, children }) {
  const { addToast } = useToasts();

  const handleLogout = async () => {
    // TODO: make this work
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
    </>
  );
}
