import React from "react";
import styled from "styled-components";
import StartCards from "./StartCards";
import GraphCards from "./GraphCards";
import GraphSection from "./graphsection/GraphSection";
import LastSection from "./lastsection";

const MainDiv = styled('div')(() => ({
  width: '100%', 
  maxWidth: '1150px', 
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  padding: '0 15px', 
  boxSizing: 'border-box',
  
  overflowX: 'hidden', 

  '& > *': {
    width: '100% !important',
    maxWidth: '100% !important',
    boxSizing: 'border-box',
  },

  "@media (min-width: 1150px)": {
     '& > *': {
        width: 'auto !important',
     }
  }
}))

export default function InvoicePage() {
  return (
    <MainDiv>
      <StartCards />
      <GraphCards />
      <GraphSection />
      <LastSection />
    </MainDiv>
  )
}