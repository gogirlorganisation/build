import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    font-family: ${props => props.theme.fonts};
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-moz-selection {
    background-color: rgba(255, 51, 85, 0.45);
  }
  ::selection {
    background-color: rgba(255, 51, 85, 0.45);
  }
`;

export default function ({ title }) {
  return (
    <>
      <Helmet>
        <title>{title && `${title} | `}TheGirlCode</title>
      </Helmet>
      <GlobalStyles />
    </>
  );
}
