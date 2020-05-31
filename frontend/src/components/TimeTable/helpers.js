import styled from "styled-components";

export const T = styled.div`
  grid-area: ${(props) => props.area};
  background: ${(props) => props.theme.pink};
  background: #989898;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Lesson = styled.div`
  grid-area: ${(props) => props.area};
  background: ${(props) => props.theme.lightPink};
  background: #eaeaef;
  border-left: 5px solid ${(props) => props.theme.pink};
  padding: 15px;
`;

export const THV = styled.div`
  grid-area: THV;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${(props) => props.theme.pink};
  /* background: #989898; */
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const GridContainer = styled.div`
  width: ${(props) => props.width};
  overflow-x: auto;
  padding: 0 50px;
  position: relative;
`;

export const GridT = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 3px 3px;
  margin: 50px auto;
  height: 675px;
  min-width: 1200px;
  width: 100%;
  max-width: 2400px;
  background: #fefefe;
  position: relative;
`;
