import React from "react";
import styled from "styled-components";
import LastCards from "./LastCard";
import LastCards2 from "./LastCard2";

const MainDiv = styled('div')(() => ({
  width: "100%",
  height: 'auto', 
  display: 'flex',
  gap: '25px',
  boxSizing: 'border-box',

  flexDirection: 'column',
  alignItems: 'center',

  '& > *': {
    width: '100% !important',
  },


  "@media (min-width: 1100px)": {
    flexDirection: 'row',
    alignItems: 'stretch', 
    justifyContent: 'center', 

   
    '& > :first-child': {
      width: '580px !important',
      flex: '0 0 580px',
    },

    '& > :last-child': {
      width: '534px !important',
      flex: '0 0 534px', 
    }
  }
}))

export default function LastSection() {
  return (
    <MainDiv>
      <LastCards />
      <LastCards2 />
    </MainDiv>
  );
}