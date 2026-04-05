import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CrmGraph from "./CrmGraph";


const HeaderDiv = styled('div')(() => ({
  width: '60%', 
  height: '100%',
}))

const DropDown = styled('div')(() => ({
  width: '40%',
  height: '100%',
  textAlign: 'right'
}))


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 182, 
  minHeight: 65, 
  padding: '8px 12px',
  ...theme.typography.body2,
  textAlign: 'center',
  borderRadius: '10px',
  background: 'rgb(238,242,246)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', 
  }
}));

const FirstDiv = styled('div')(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

const Heading = styled('p')(() => ({
  margin: 0,
  padding: 0,
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: '20px',
}))

const SecondDiv = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  margin: '15px 0',
}))

const TextDiv = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', 
}))

const Text = styled('p')(() => ({
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'sans-serif',
  color: 'black',
  margin: 0,
  padding: 0
}))

const Label = styled('p')(() => ({
  fontSize: '13px', 
  fontWeight: 400,
  color: 'gray', 
  fontFamily: 'sans-serif',
  textAlign: 'left',
  margin: 0,
  padding: 0,
}))

const ThirdDiv = styled('div')(() => ({
  width: '100%',
  height: '360px',
}))

export default function LastRightSec(params) {
  return (
    <>
      <Box sx={{  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'}}>
        <HeaderDiv>
          <Typography sx={{  margin: 0,
  padding: 0,
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: '20px',}}>Sales Performance</Typography>
        </HeaderDiv>
        <DropDown>
          <IconButton size="small">
            <MenuIcon />
          </IconButton>
        </DropDown>
      </Box>

    <Box sx={{  width: '100%',
  height: 'auto',
  margin: '15px 0',}}>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 1.5, sm: 2 }}
          useFlexGap 
          flexWrap="wrap"
        >
          <DemoPaper square={false} elevation={0}>
            <TextDiv>
              <Text>200</Text>
              <Label>Conversion Rate</Label>
            </TextDiv>
          </DemoPaper>
          
          <DemoPaper square={false} elevation={0}>
            <TextDiv>
              <Text>120</Text>
              <Label>Average Deal</Label>
            </TextDiv>
          </DemoPaper>
          
          <DemoPaper square={false} elevation={0}>
            <TextDiv>
              <Text>234</Text>
              <Label>Sales Target</Label>
            </TextDiv>
          </DemoPaper>
        </Stack>
      </Box>

      <ThirdDiv>
        <CrmGraph />
      </ThirdDiv>
    </>
  )
}