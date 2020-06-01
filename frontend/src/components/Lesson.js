import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pink};
  padding-bottom: 10vh;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 5vh;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

const Cards = styled.div`
  font-size: 1.6rem;
  max-width: 800px;
  width: 80%;
  justify-content: center;
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
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.09);
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

const Button = styled.a`
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  outline: none;
  text-decoration: none;
  margin: 10px 0;
  color: ${(props) => (props.disabled ? "#b3b3b3" : props.theme.pink)};
  font-size: 1.1rem;
`;

const UnorderedList = styled.ul`
  margin-left: 20px;
  margin-top: 20px;
`;

export default function LessonsComponent() {
  const [upcoming, setUpcoming] = React.useState([]);
  const [past, setPast] = React.useState([]);
  const { addToast } = useToasts();

  const fmt = (d) => {
    const date = new Date(d);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch("/api/lesson/s");
        const data = await req.json();

        if (data.success) {
          setUpcoming(data.upcoming);
          setPast(data.past);
        } else {
          addToast(data.message, { appearance: "error" });
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  const handleAttendance = (id) => async () => {
    try {
      const req = await axios.post(`/api/lesson/${id}/attendance`);

      if (req.data.success) {
        const req_ = await fetch("/api/lesson/s");
        const data = await req_.json();

        if (data.success) {
          setUpcoming(data.upcoming);
          setPast(data.past);

          console.log(data.past);
        } else {
          addToast(data.message, { appearance: "error" });
        }
      } else {
        addToast(req.data.message, { appearance: "error" });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Hero>
      <Title>Upcoming Lessons</Title>
      <Cards>
        {upcoming.map((u, i) => (
          <Card key={i}>
            <CardHeader>{u.title}</CardHeader>
            <CardSubHeader>{fmt(u.date)}</CardSubHeader>
          </Card>
        ))}
      </Cards>
      <Title>Past Lessons</Title>
      <Cards>
        {past.map((p, i) => (
          <Card key={i}>
            <CardHeader>{p.title}</CardHeader>
            <CardSubHeader>{fmt(p.date)}</CardSubHeader>
            <UnorderedList>
              <li>
                {p.materials ? (
                  <Button
                    href={p.materials}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Slides
                  </Button>
                ) : (
                  <Button disabled={true}>Slides</Button>
                )}
              </li>
              <li>
                {p.hindiVideo ? (
                  <Button href={`/video/${p.hindiVideo}`}>Video (Hindi)</Button>
                ) : (
                  <Button disabled={true}>Video (Hindi)</Button>
                )}
              </li>
              <li>
                {p.englishVideo ? (
                  <Button href={`/video/${p.englishVideo}`}>
                    Video (English)
                  </Button>
                ) : (
                  <Button disabled={true}>Video (English)</Button>
                )}
              </li>
              <li>
                {p.quiz ? (
                  p.quizAttempted ? (
                    <Button disabled={true}>
                      Quiz: {p.quizScore} / {p.maxScore}
                    </Button>
                  ) : (
                    <Button
                      href={p.quiz}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quiz
                    </Button>
                  )
                ) : (
                  <Button disabled={true}>Quiz</Button>
                )}
              </li>
              <li>
                {p.attendanceOpen ? (
                  <Button
                    disabled={p.attendance}
                    onClick={
                      p.attendance ? () => false : handleAttendance(p.id)
                    }
                  >
                    {p.attendance ? "Attendance Marked" : "Mark Attendance"}
                  </Button>
                ) : (
                  <Button disabled={true}>
                    {p.attendance
                      ? "Attendance Marked"
                      : "Attendance Not Marked"}
                  </Button>
                )}
              </li>
            </UnorderedList>
          </Card>
        ))}
      </Cards>
    </Hero>
  );
}
