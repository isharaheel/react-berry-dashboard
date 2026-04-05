import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const MainDiv = styled('div')(() => ({
  width: "100%",
  display: 'flex',
  gap: '25px',
  boxSizing: 'border-box',

  flexDirection: 'column',
  alignItems: 'center',

  '& > *': {
    width: '100% !important', 
    maxWidth: '100% !important', 
    flex: '1 1 auto',
    boxSizing: 'border-box',
  },

  "@media (min-width: 1150px)": {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center', 

    '& > :first-child': {
      width: '740px !important',
      flex: '0 0 740px',
    },

    '& > :last-child': {
      width: '350px !important',
      flex: '0 0 350px', 
    }
  }
}))

export default function GraphSection() {
  return (
    <MainDiv>
      <LeftSide />
      <RightSide />
    </MainDiv>
  );
}