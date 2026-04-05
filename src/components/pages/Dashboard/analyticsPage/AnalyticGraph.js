import React from "react";
import styled from "styled-components";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { LiaYoutube } from "react-icons/lia";
import GraphDemo from "./graphDemo";
import { Box, Typography } from "@mui/material";

const GraphDiv = styled('div')({
  width: '100%',
  height: 'auto',
  minHeight: '420px', 
  bgcolor: "background.default",
  border:'1px solid rgb(12, 12, 14)',
  borderRadius: '10px',
  padding: '20px', 
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  overflow: 'hidden', 
});

const TextDiv = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap', 
  gap: '10px', 
});

const LeftText = styled('div')({
  flex: '1 1 auto',
});

const RightText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  marginTop: '2px', 
});

const Text = styled('p')({
  color: 'text.primary',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  fontSize: '20px', 
  padding: 0,
  margin: 0,
});

const IconsDiv = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '20px', 
  margin: '10px 0',
  flexWrap: 'wrap', 
});

const Icons = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const Icon = styled('div')({
  width: '40px', 
  height: '40px', 
  background: 'rgb(237,231,246)',
  borderRadius: "7px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0, 
});

export default function AnalyticGraph() {
  return (
    <Box sx={{  width: '100%',
  height: 'auto',
  minHeight: '420px', 
  bgcolor: "background.paper",
  borderRadius: '10px',
  padding: '20px', 
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  overflow: 'hidden',
  
  }}>
      <Box sx={{ width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap', 
  gap: '10px',}}>
        <Box sx={{  flex: '1 1 auto',
}}>
          <Typography sx={{  color: 'text.primary',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  fontSize: '20px', 
  padding: 0,
  margin: 0,}}>Market Share</Typography>
          <Typography sx={{
  fontFamily: 'sans-serif',
  padding: 0,
  color: 'gray', fontSize: '13px', fontWeight: 'normal', marginTop: '5px'}}>
            Department wise monthly sales report
          </Typography>
        </Box>
        <RightText>
          <TrendingDownIcon style={{ color: 'red', fontSize: '20px' }} />
          <Text style={{ fontSize: '18px' }}>$27,695.65</Text>
        </RightText>
      </Box>

      <IconsDiv>
        <Icons>
          <Icon>
            <LuFacebook style={{ fontSize: '20px', color: 'rgb(136,101,199)' }} />
          </Icon>
          <Text style={{ fontSize: '14px' }}>+ 45.36%</Text>
        </Icons>

        <Icons>
          <Icon style={{ background: 'rgb(227,242,253)' }}>
            <SlSocialTwitter style={{ fontSize: '20px', color: 'rgb(33,150,243)' }} />
          </Icon>
          <Text style={{ fontSize: '14px' }}>- 50.69%</Text>
        </Icons>

        <Icons>
          <Icon style={{ background: 'rgb(251,230,230)' }}>
            <LiaYoutube style={{ fontSize: '20px', color: 'red' }} />
          </Icon>
          <Text style={{ fontSize: '14px' }}>+ 16.85%</Text>
        </Icons>
      </IconsDiv>

      <Box sx={{ 
        width: '100%', 
        flexGrow: 1,
        minHeight: '250px', 
        display: 'flex',
        flexDirection: 'column'
      }}>
        <GraphDemo />
      </Box>
    </Box>
  );
}