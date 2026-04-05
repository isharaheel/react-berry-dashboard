import React from "react";
import styled from "styled-components";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SideCards from "./SideCards";

const CardsDiv = styled('div')(() => ({
  width: "100%",
  maxWidth: "1250px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap", 
  gap: "20px",
  borderRadius: 10,
  margin: "0 auto",

  "@media (max-width: 1024px)": {
    justifyContent: "center",
  },
}));

const CardBase = styled('div')(() => ({
  flex: "1 1 350px", 
  maxWidth: "100%", 
  height: "200px",
  borderRadius: 10,
  paddingLeft: "20px",
  paddingRight: "20px",
  boxSizing: "border-box", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media (max-width: 600px)": {
    flex: "1 1 100%", 
    height: "180px",
  },
}));

const Card = styled(CardBase)(() => ({
  background: "rgb(103,58,183)",
}));

const Card2 = styled(CardBase)(() => ({
  background: "rgb(30,136,229)",
}));

const SideCardsMain = styled('div')(() => ({
  flex: "1 1 350px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",

  "@media (max-width: 1024px)": {
    flex: "1 1 100%", 
    flexDirection: "row", 
    flexWrap: "wrap",
  },
  "@media (max-width: 600px)": {
    flexDirection: "column", 
  },
}));

const CardData = styled('div')(() => ({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
}));

const GraphIcon = styled('div')(() => ({
  height: "30px",
  border: "1px solid rgb(69,39,160)",
  textAlign: "center",
  marginTop: "30px",
  background: "rgb(69,39,160)",
  borderRadius: 7,
  padding: "5px",
}));

const GraphIcon2 = styled('div')(() => ({
  height: "30px",
  border: "1px solid rgb(21,101,192)",
  textAlign: "center",
  marginTop: "30px",
  background: "rgb(21,101,192)",
  borderRadius: 7,
  padding: "5px",
  color: "white",
}));

const PriceDiv = styled('div')(() => ({
  width: "100%",
  display: "flex",
  height: "40px",
  alignItems: "center",
  marginTop: "20px",
}));

const Price = styled('h1')(() => ({
  color: "white",
  fontFamily: "sans-serif",
  margin: 0, 
}));

const Arrow = styled('div')(() => ({
  width: "20px",
  height: "20px",
  background: "rgb(179,157,219)",
  textAlign: "center",
  borderRadius: "100%",
  marginLeft: "10px",
  paddingTop: "3px",
  color: "rgb(104,65,182)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Arrow2 = styled('div')(() => ({
  width: "20px",
  height: "20px",
  background: "rgb(144,202,249)",
  textAlign: "center",
  borderRadius: "100%",
  marginLeft: "10px",
  paddingTop: "3px",
  color: "rgb(45,145,231)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Total = styled('p')(() => ({
  color: "rgb(179,157,219)",
  fontSize: "15px",
  fontFamily: "sans-serif",
  marginTop: "5px",
}));

const Total2 = styled('p')(() => ({
  color: "rgb(144,202,249)",
  fontSize: "15px",
  fontFamily: "sans-serif",
  marginTop: "5px",
}));

export default function Cards() {
  return (
    <CardsDiv>
      <Card>
        <CardData>
          <GraphIcon>
            <img src="/images/graph-icon.svg" style={{ width: "30px" }} alt="icon" />
          </GraphIcon>
        </CardData>

        <PriceDiv>
          <Price>$500.00</Price>
          <Arrow>
            <ArrowOutwardIcon sx={{ fontSize: "13px" }} />
          </Arrow>
        </PriceDiv>

        <Total>Total Earning</Total>
      </Card>

      <Card2>
        <CardData>
          <GraphIcon2>
            <WorkOutlineIcon />
          </GraphIcon2>
        </CardData>

        <PriceDiv>
          <Price>$961</Price>
          <Arrow2>
            <CallReceivedIcon sx={{ fontSize: "13px" }} />
          </Arrow2>
        </PriceDiv>

        <Total2>Total Orders</Total2>
      </Card2>

      <SideCardsMain>
        <SideCards />
      </SideCardsMain>
    </CardsDiv>
  );
}