import React from "react";
import styled from "styled-components";
import CalculatorBlankIcon from "./calIcon";
import { Card, Box, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Wrapper = styled(Card)(() => ({
  width: "100%",
  height: "100px",
  borderRadius: "7px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
}));

const BackgroundCircle = styled("div")(() => ({
  position: "absolute",
  right: "-40px",
  top: "-20px",
  width: "160px",
  height: "160px",
  background: "linear-gradient(90deg, #fff8e1, #ffe9b3)",
  borderRadius: "50%",
  opacity: 0.7,
}));

const IconBox = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  backgroundColor: "#fff3cd", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "15px",
  marginLeft:'30px'
}));
export default function SideCards() {
return(
<>
<Wrapper style={{background:'rgb(30,136,229)'}}>
<BackgroundCircle style={{background:'lightblue'}}/>
<IconBox style={{background:'rgb(21,101,192)'}}>
<CalculatorBlankIcon style={{ color: "whitesmoke", fontSize: 28 }} />
</IconBox>
<Box sx={{background:''}}>
<Typography
variant="h6"
sx={{ margin: 0, fontWeight: 700, color: "whitesmoke" }}
>$203k</Typography>
<Typography
variant="body2"
sx={{margin: 0,marginTop: "2px",color: "lightblue",fontWeight: 500,}}>Total Income</Typography>
</Box>
</Wrapper>


<Wrapper>
<BackgroundCircle />
<IconBox>
<StorefrontIcon style={{ color: "#f9b701", fontSize: 28 }} />
</IconBox>
<Box>
<Typography
variant="h6"
sx={{ margin: 0, fontWeight: 700, color: "#000" }}>$203k</Typography>
<Typography
variant="body2"
sx={{margin: 0,marginTop: "2px",color: "#77829c",fontWeight: 500,}}>Total Income</Typography>
</Box>
</Wrapper>      
</>
)
}