import React from "react";
import styled from "styled-components";

import useWindowSize from "./use-window-size";
import { GridT, GridContainer, THV, T, Lesson } from "./helpers";

const Grid = styled(GridT)`
  grid-template-areas:
    "THV TH1 TH2 TH3 TH4 TH5 TH6 TH7"
    "TV1 . L2 . L6 . . ."
    "TV2 . L2 . L6 . . ."
    "TV3 . . . . . . ."
    "TV4 . L3 . . . . ."
    "TV5 . L3 . . . . ."
    "TV6 L1 . L5 L7 . . ."
    "TV7 L1 L4 L5 L7 . . ."
    "TV8 . L4 . . . . .";
`;

export default () => {
  const [width] = useWindowSize();
  // https://grid.layoutit.com/?id=OmYehgC

  return (
    <GridContainer width={width}>
      <Grid>
        <THV>Week 2 (TBD)</THV>
        <T area="TH1">Monday</T>
        <T area="TH2">Tuesday</T>
        <T area="TH3">Wednesday</T>
        <T area="TH4">Thursday</T>
        <T area="TH5">Friday</T>
        <T area="TH6">Saturday</T>
        <T area="TH7">Sunday</T>
        <T area="TV1">05:00PM IST</T>
        <T area="TV2">06:00PM IST</T>
        <T area="TV3">07:00PM IST</T>
        <T area="TV4">08:00PM IST</T>
        <T area="TV5">09:00PM IST</T>
        <T area="TV6">10:00PM IST</T>
        <T area="TV7">11:00PM IST</T>
        <T area="TV8">12:00AM IST</T>
        <Lesson area="L1">
          <b>Review Session</b>
        </Lesson>
        <Lesson area="L2">
          <b>Python Lesson 4</b>
          (English)
        </Lesson>
        <Lesson area="L3">
          <div>
            <b>Python Lesson 4</b>
            <br />
            (Hindi + English)
          </div>
        </Lesson>
        <Lesson area="L4">
          <b>Python Lesson 4</b> (English)
        </Lesson>
        <Lesson area="L5">
          <b>Review Session</b>
        </Lesson>
        <Lesson area="L6">
          <b>Review Session</b>
        </Lesson>
        <Lesson area="L7">
          <b>Review Session</b>
        </Lesson>
      </Grid>
    </GridContainer>
  );
};
