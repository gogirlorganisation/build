import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #__next {
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
      <Head>
        <title>{title && `${title} | `}TheGirlCode</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          href="https://thegirlcode.co/img/favicon.png"
          type="image/png"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pme3yyf.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hjk6uuj.css" />
      </Head>
      <GlobalStyles />
    </>
  );
}
