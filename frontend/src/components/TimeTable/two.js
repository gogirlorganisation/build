import React from "react";
import styled from "styled-components";

import useWindowSize from "./use-window-size";
import { GridT, GridContainer, THV, T, Lesson } from "./helpers";

const Grid = styled(GridT)`
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
    "THV TH1 TH2 TH3 TH4 TH5 TH6 TH7"
    "TV1 . . . . L8 . L12"
    "TV2 . L2 . L6 L8 . L12"
    "TV3 . L2 . L6 L9 . L13"
    "TV4 . . . . L9 L10 L13"
    "TV5 . L3 . . . L10 ."
    "TV6 . L3 . . . L11 ."
    "TV7 L1 . L5 L7 . L11 ."
    "TV8 L1 L4 L5 L7 . . ."
    "TV9 . L4 . . . . .";
`;

export default () => {
  const [width] = useWindowSize();
  // https://grid.layoutit.com/?id=OmYehgC

  return (
    <GridContainer width={width}>
      <Grid>
        <THV>Week 2</THV>
        <T area="TH1">Monday</T>
        <T area="TH2">Tuesday</T>
        <T area="TH3">Wednesday</T>
        <T area="TH4">Thursday</T>
        <T area="TH5">Friday</T>
        <T area="TH6">Saturday</T>
        <T area="TH7">Sunday</T>
        <T area="TV1">04:00PM IST</T>
        <T area="TV2">05:00PM IST</T>
        <T area="TV3">06:00PM IST</T>
        <T area="TV4">07:00PM IST</T>
        <T area="TV5">08:00PM IST</T>
        <T area="TV6">09:00PM IST</T>
        <T area="TV7">10:00PM IST</T>
        <T area="TV8">11:00PM IST</T>
        <T area="TV9">12:00AM IST</T>
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
        <Lesson area="L8" style={{ background: "#ffc4df" }}>
          <b>Tetris Game</b> Lesson 1 (English)
        </Lesson>
        <Lesson area="L9">
          <b>Review Session</b> Python
        </Lesson>
        <Lesson area="L10" style={{ background: "#2977f542" }}>
          <b>Shooting Game</b> Lesson 1 (English + Hindi)
        </Lesson>
        <Lesson area="L11" style={{ background: "#ffc4df" }}>
          <b>Review Session</b> Tetris Game
        </Lesson>
        <Lesson area="L12" style={{ background: "#ffc4df" }}>
          <b>Tetris Game</b> Lesson 2 (English)
        </Lesson>
        <Lesson area="L13" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
      </Grid>
    </GridContainer>
  );
};
