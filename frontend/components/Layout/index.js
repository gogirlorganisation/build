import styled from "styled-components";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import Head from "./Head";
import firebase from "../../lib/firebase";

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
  const router = useRouter();
  const { addToast } = useToasts();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/");
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
    </>
  );
}
