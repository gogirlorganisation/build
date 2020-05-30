import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eaeaef;
  background-color: ${props => props.theme.pink};
  color: white;
  padding-bottom: 10vh;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 5vh;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Points = styled.div`
  font-size: 1.6rem;
`;

const Cards = styled.div`
  font-size: 1.6rem;
  max-width: 1300px;
  width: 80%;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Card = styled.div`
  margin: 10px 0;
  width: 100%;
  display: inline-block;
  background: #fff;
  border: none;
  padding: 40px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
  transition: all 250ms ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  text-align: left;
  font-size: 2em;
  color: black;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const CardSubHeader = styled.div`
  text-align: left;
  font-size: 1.4em;
  color: #606060;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const Button = styled.button`
  margin: 10px 10px 10px 0;
  float: right;
  cursor: pointer;
  display: inline-block;
  width: 100px;
  padding: 10px 5px;
  color: #fff;
  border: 2px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  background-color: rgba(255, 51, 85, 0.85);

  @media (max-width: 800px) {
    width: 60px;
    padding: 5px;
  }

  @media (max-width: 500px) {
    width: 40px;
    padding: 5px;
    margin: 10px 2.5px 10px 0;
    font-size: 0.7em;
  }
`;

export default function LessonsComponent() {
  return (
    <Hero>
      <Title>Upcoming Lessons</Title>
      <Cards>
        <Card>
          <CardHeader>Lesson 3: Python Fundamentals</CardHeader>
          <CardSubHeader>1:00pm to 2:00pm IST</CardSubHeader>
          <CardSubHeader>14th May, 2020</CardSubHeader>
          <Button>Slides</Button>
          <Button>Quiz</Button>
        </Card>
      </Cards>
      <Title>Past Lessons</Title>
      <Cards>
        <Card>
          <CardHeader>Lesson 2: Python Fundamentals</CardHeader>
          <CardSubHeader>1:00pm to 2:00pm IST</CardSubHeader>
          <CardSubHeader>14th May, 2020</CardSubHeader>
          <Button>Video</Button>
          <Button>Slides</Button>
          <Button>Quiz</Button>
        </Card>

        <Card>
          <CardHeader>Lesson 1: Python Fundamentals</CardHeader>
          <CardSubHeader>1:00pm to 2:00pm IST</CardSubHeader>
          <CardSubHeader>14th May, 2020</CardSubHeader>
          <Button>Video</Button>
          <Button>Slides</Button>
          <Button>Quiz</Button>
        </Card>
      </Cards>
    </Hero>
  );
}
