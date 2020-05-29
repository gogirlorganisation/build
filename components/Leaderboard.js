import React from "react";
import styled from "styled-components";
import firebase from "../lib/firebase";

const Hero = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
`;


const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.5%;


  @media (max-width: 550px) {
    font-size: 1.8rem;
  }

`;

const Leaderboard = styled.div`
    margin: 10px 0;
    max-width: 900px;
    width: 60%;
    border: none;
    background:  #ffe3e7;
    background-image: url(../assets/yay.jpg);
    padding: 20px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
    transition: all 250ms ease;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }

    justify-content:center;
    text-align:center;
    display: flex;

    @media (max-width: 1100px) {
        width:80%;
    }

    @media (max-width: 600px) {
        width:90%;
    }
`;

const Results = styled.div`
    margin: auto;
    height:60vh;
    width: 70%;
    border: none;
    background:  #fff;
    padding: 20px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);

    @media (max-width: 600px) {
        width:100%;
    }
`;




export default function LeaderboardComponent() {
  return (
    <Hero>
    <Title>Leaderboard</Title>
      <Leaderboard>
      
        <Results>
          <table style ={{width: "100%", height:"100%"}}>
          <tr>
            <td><b>1</b></td>
            <td><b>Jackson</b></td>
            <td><b>100</b></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacksoaa nhsagf</td>
            <td>100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacksonss</td>
            <td>100</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jackssaon</td>
            <td>100</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Jacsjhkson</td>
            <td>100</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Jacsjhkson</td>
            <td>100</td>
          </tr>

          <tr>
            <td>8</td>
            <td>Jacsjhkson</td>
            <td>100</td>
          </tr>

          <tr>
            <td>9</td>
            <td>Jacsjhkson</td>
            <td>100</td>
          </tr>


          <tr>
            <td>10</td>
            <td>Jacsjhkson</td>
            <td>100</td>
          </tr>

          </table>
        </Results>
      </Leaderboard>

    </Hero>
  );
}
