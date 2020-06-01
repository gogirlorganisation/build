import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

import Week1 from "../components/TimeTable/one";

const Container = styled.div`
  min-height: 80vh;
`;

export default () => {
  return (
    <Layout title="Time Table" fetchuser={true}>
      <Container>
        <Week1 />
      </Container>
    </Layout>
  );
};
