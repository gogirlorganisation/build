import React from "react";
import styled from "styled-components";

import useWindowSize from "./use-window-size";
import { GridT, GridContainer, THV, T, Lesson } from "./helpers";

const Grid = styled(GridT)`
  grid-template-areas:
    "THV TH1 TH2 TH3 TH4 TH5 TH6 TH7"
    "TV1 LE1 LE2 LE3 LE4 LE5 LE6 LE7"
    "TV2 LE1 LE2 LE3 LE4 LE5 LE6 LE7"
    "TV3 . . . . . . ."
    "TV4 . . LE10 . LE13 . LE16"
    "TV5 . . LE10 . LE13 . LE16"
    "TV6 LE8 LE9 . LE12 . LE15 ."
    "TV7 LE8 LE9 LE11 LE12 LE14 LE15 LE17"
    "TV8 . . LE11 . LE14 . LE17";
`;

export default () => {
  const [width] = useWindowSize();
  // https://grid.layoutit.com/?id=7nhhDG9

  return (
    <GridContainer width={width}>
      <Grid>
        <THV>Week 1</THV>
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
        <T area="TV8">12:00PM IST</T>
        <Lesson area="LE1">Introduction</Lesson>
        <Lesson area="LE2">Review Session</Lesson>
        <Lesson area="LE3">
          Lesson 1 (English): Basic Operations, Variables, and Data Types, Input
          and Print, Strings
        </Lesson>
        <Lesson area="LE4">Review Session</Lesson>
        <Lesson area="LE5">Lesson 2 (English)</Lesson>
        <Lesson area="LE6">Review Session</Lesson>
        <Lesson area="LE7">Lesson 3 (English)</Lesson>
        <Lesson area="LE8">Introduction</Lesson>
        <Lesson area="LE9">Review Session</Lesson>
        <Lesson area="LE12">
          Lesson 1 (English): Basic Operations, Variables, and Data Types, Input
          and Print, Strings
        </Lesson>
        {/* TODO: add from slack */}
        <Lesson area="LE10">
          <div>
            <b>Lesson 1</b>
            <br />
            (Hindi + English): Data Types, Input and Output
          </div>
        </Lesson>
        <Lesson area="LE11">Review Session</Lesson>
        <Lesson area="LE13">
          Lesson 2<br />
          (Hindi + English)
        </Lesson>
        <Lesson area="LE14">Lesson 2 (English)</Lesson>
        <Lesson area="LE15">Review Session</Lesson>
        <Lesson area="LE16">
          Lesson 3<br />
          (Hindi + English)
        </Lesson>
        <Lesson area="LE17">Lesson 3 (English)</Lesson>
      </Grid>
    </GridContainer>
  );
};
