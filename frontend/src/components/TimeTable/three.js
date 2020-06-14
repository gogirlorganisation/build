import React from "react";
import styled from "styled-components";

import useWindowSize from "./use-window-size";
import { GridT, GridContainer, THV, T, Lesson } from "./helpers";

const Grid = styled(GridT)`
  min-width: 1600px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1px 1px;
  grid-template-areas:
    "THV TH1 TH2 TH3 TH4 TH5 TH6 TH7 TH8 TH9 TH10"
    "TV1 . . . . . L11 S1 S2 . R"
    "TV2 . . . . . L11 S1 S2 . R"
    "TV3 . L3 . L7 . L12 S1 S2 . R"
    "TV4 . L3 . L7 . L12 S1 S2 . R"
    "TV5 . . . . . . S1 S2 . R"
    "TV6 L1 . L5 . L9 L13 S1 S2 . R"
    "TV7 L1 L4 L5 L8 L9 L13 S1 S2 . R"
    "TV8 L2 L4 L6 L8 L10 . S1 S2 . R"
    "TV9 L2 . L6 . L10 . S1 S2 . R";
`;

export default () => {
  const [width] = useWindowSize();
  // https://grid.layoutit.com?id=8p5yd1A

  return (
    <GridContainer width={width}>
      <Grid>
        <THV>Week 3</THV>
        <T area="TH1">Monday</T>
        <T area="TH2">Tuesday</T>
        <T area="TH3">Wednesday</T>
        <T area="TH4">Thursday</T>
        <T area="TH5">Friday</T>
        <T area="TH6">Saturday</T>
        <T area="TH7">Sunday</T>
        <T area="TH8">Monday</T>
        <T area="TH9">Tuesday</T>
        <T area="TH10">Wednesday</T>
        <T area="TV1">02:00PM IST</T>
        <T area="TV2">03:00PM IST</T>
        <T area="TV3">04:00PM IST</T>
        <T area="TV4">05:00PM IST</T>
        <T area="TV5">06:00PM IST</T>
        <T area="TV6">07:00PM IST</T>
        <T area="TV7">08:00PM IST</T>
        <T area="TV8">09:00PM IST</T>
        <T area="TV9">10:00AM IST</T>
        <Lesson area="L1" style={{ background: "#2977f542" }}>
          <b>Shooting Game</b>Lesson 2
          <br />
          (Hindi + English)
        </Lesson>
        <Lesson area="L2" style={{ background: "#ffc4df" }}>
          <b>Review Session</b> Tetris
        </Lesson>
        <Lesson area="L3" style={{ background: "#ffc4df" }}>
          <div>
            <b>Tetris Lesson 3</b>
            <br />
            (English)
          </div>
        </Lesson>
        <Lesson area="L4" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
        <Lesson area="L5" style={{ background: "#2977f542" }}>
          <b>Shooting Game</b>Lesson 3
          <br />
          (Hindi + English)
        </Lesson>
        <Lesson area="L6" style={{ background: "#ffc4df" }}>
          <b>Review Session</b> Tetris
        </Lesson>
        <Lesson area="L7" style={{ background: "#ffc4df" }}>
          <div>
            <b>Tetris Lesson 4</b>
            <br />
            (English)
          </div>
        </Lesson>
        <Lesson area="L8" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
        <Lesson area="L9" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
        <Lesson area="L10" style={{ background: "#ffc4df" }}>
          <b>Review Session</b> Tetris
        </Lesson>
        <Lesson area="L11" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
        <Lesson area="L12" style={{ background: "#ffc4df" }}>
          <b>Review Session</b> Tetris
        </Lesson>
        <Lesson area="L13" style={{ background: "#2977f542" }}>
          <b>Review Session</b> Shooting Game
        </Lesson>
        <Lesson area="S1" style={{ background: "#f0f52942" }}>
          <b>Submissions Day!</b>
        </Lesson>
        <Lesson area="S2" style={{ background: "#f0f52942" }}>
          <b>Submissions Day!</b>
        </Lesson>
        <Lesson area="R" style={{ background: "#29f58642" }}>
          <b>Results Day!!</b>
        </Lesson>
      </Grid>
    </GridContainer>
  );
};
