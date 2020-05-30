import React from "react";
import styled from "styled-components";
import { BounceLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

import theme from "../lib/theme";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff0000;
  text-align: center;
`;

const ErrorDesc = styled.div`
  font-size: 1.3rem;
  color: #ff0000;
  text-align: center;
`;

const BackHome = styled.div`
  font-size: 1rem;
  margin: 30px 0;
  color: #298bf5;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
  margin: 40px 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ({ error }) => {
  const history = useHistory();

  return (
    <LoadingContainer>
      <BounceLoader
        loading={error ? false : true}
        size="300px"
        color={theme.pink}
      />

      {error ? (
        <ErrorContainer>
          <Logo src="https://thegirlcode.co/img/favicon.png" />
          <ErrorTitle>An error occurred</ErrorTitle>
          <ErrorDesc>{error}</ErrorDesc>
          <BackHome onClick={() => history.push("/")}>
            Back to Dashboard
          </BackHome>
        </ErrorContainer>
      ) : (
        ""
      )}
    </LoadingContainer>
  );
};
