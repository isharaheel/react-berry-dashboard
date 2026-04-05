import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { IoMdAdd } from "react-icons/io";
import { Box } from "@mui/material";

const MainDiv = styled('div')(() => ({
  width: '100%',
  minHeight: '160px', 
  height: 'auto', 
  bgcolor: "theme.palette.background.default",
  padding: '15px',
  paddingTop: '5px',
  borderRadius: '10px',
  boxSizing: 'border-box',
}))

const DemoPaper = styled(Paper)(({ theme }) => ({
  flex: '1 1 150px', 
  maxWidth: '100%',
  "@media (min-width: 1100px)": {
    maxWidth: '170px',
  },

  height: 80,
  padding: '12px',
  ...theme.typography.body2,
  background: 'theme.palette.background.paper',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  transition: "0.2s",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
  }
}));

const PaperText = styled('p')(() => ({
  margin: 0,
  padding: 0,
  color: 'gray',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

const PriceDiv = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  marginTop: '5px',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

const IconDiv = styled('div')(() => ({
  width: '20px',
  height: '20px',
  border: '1px solid #d1d1d1',
  borderRadius: '5px',
  color: 'gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export default function StartCards() {
  const cardData = [
    { label: "Client", value: "85" },
    { label: "Items", value: "965" },
    { label: "Invoices", value: "70" },
    { label: "Quotes", value: "140" },
    { label: "Purchase Order", value: "450" },
    { label: "Bill", value: "1,256" },
  ];

  return (
    <Box sx={{  width: '100%',
  minHeight: '170px', 
  height: 'auto', 
  bgcolor: "background.paper",
  padding: '15px',
  paddingTop: '5px',
  borderRadius: '10px',
  boxSizing: 'border-box',}}>
      <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'sans-serif', marginBottom: '15px' }}>
        Quick Add
      </p>
      
      <Stack 
        direction="row" 
        spacing={2} 
        useFlexGap 
        sx={{
          width: '100%',
          flexWrap: 'wrap', 
          justifyContent: 'flex-start',
        }}
      >
        {cardData.map((item, index) => (
          <DemoPaper key={index} elevation={0}>
            <PaperText>{item.label}</PaperText>
            <PriceDiv>
              <PaperText sx={{color:'text.primary',fontWeight: 'bold', fontSize: '16px' }}>
                {item.value}
              </PaperText>
              <IconDiv>
                <IoMdAdd style={{ fontSize: '14px' }} />
              </IconDiv>
            </PriceDiv>
          </DemoPaper>
        ))}
      </Stack>
    </Box>
  );
}