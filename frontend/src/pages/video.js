import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Container = styled.div`
  min-height: 80vh;
  max-width: 900px;
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

const BackToDashboard = styled.a`
  margin-bottom: 30px;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.pink};
  font-size: 1.2rem;
  cursor: pointer;

  > * {
    color: ${(props) => props.theme.pink};
    fill: ${(props) => props.theme.pink};
    font-size: 1.2rem;
  }
`;

export default () => {
  const { vid } = useParams();

  return (
    <Layout title="Video">
      <Container>
        <BackToDashboard href="/dashboard">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ height: "25px", width: "25px" }}
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          <span>Back to dashboard</span>
        </BackToDashboard>
        <div>
          {/* <div style="position:relative;padding-top:56.25%;"> */}
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${vid}`}
              frameborder={0}
              title="Video"
              allowfullscreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
