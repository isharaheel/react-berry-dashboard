import React from "react";
import styled from "styled-components";
import { Divider, PropTypes, Tabs, Tab, Box, Typography } from "@mui/material";
import DemoTabs from './DemoTab';
import MyVideo from './VideoTab';
import TipsTab from './TipsTab';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TipsDiv = styled('div')(() => ({
  width: '100%', 
  maxWidth: '480px',
  minHeight: '300px',
  display: 'flex',
  gap: '20px', 
  flexDirection: 'column'
}))

const MainDiv = styled('div')(() => ({
  width: '100%',
  maxWidth: '534px', 
  height: '470px',
  bgcolor: 'theme.palette.background.paper',
  borderRadius: '10px',
  padding: '10px',
  boxSizing: 'border-box',
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  margin: '0 auto',
  overflow: 'hidden' 
}))

const Heading = styled('div')(() => ({
  width: '100%',
  padding: '0 10px',
  boxSizing: 'border-box'
}))

const Head = styled('p')(() => ({
  margin: 0,
  padding: 0,
  color: 'black',
  fontSize: '18px',
  fontFamily: 'sans-serif',
  marginTop: '20px',
  fontWeight: 'bold',
  marginBottom: '20px'
}))

export default function LastCard2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  width: '100%',
  maxWidth: '534px', 
  height: '470px',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  padding: '10px',
  boxSizing: 'border-box',
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  margin: '0 auto',
  overflow: 'hidden'}}>
      <Heading>
        <Typography sx={{  margin: 0,
  padding: 0,
  color: 'text.primary',
  fontSize: '18px',
  fontFamily: 'sans-serif',
  marginTop: '20px',
  fontWeight: 'bold',
  marginBottom: '20px'}}>Support & Help</Typography>
        <Divider />
      </Heading>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 0.5, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '12px', sm: '14px' }, 
                minWidth: 'auto',
                px: { xs: 1, sm: 2 }
              }
            }}
          >
            <Tab label="Quick Tips" {...a11yProps(0)} />
            <Tab label="Request Demo" {...a11yProps(1)} />
            <Tab label="How To Invoice?" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <TipsTab />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <TipsDiv>
            <DemoTabs />
          </TipsDiv>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <TipsDiv>
            <MyVideo />
          </TipsDiv>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}