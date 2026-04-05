import * as React from "react";
import Cards from "./Cards";
import Graph from "./Graph";
import styled from "styled-components";

const MainDiv = styled("div")(() => ({
  width: "100%",
  maxWidth: "1250px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column", 
  gap: "30px",
  padding: "20px",
  boxSizing: "border-box",

  "@media (max-width: 600px)": {
    padding: "10px",
    gap: "20px",
  },
}));

export default function DefaultPage() {
  return (
    <MainDiv>
      <Cards /> 
      <Graph /> 
    </MainDiv>
  );
}