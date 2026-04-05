import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaRegUser } from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { MenuItem, Select, Typography } from '@mui/material'
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";

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
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Header = styled('p')(() => ({
  fontSize: '20px',
  margin: 0,
  padding: 0,
  fontWeight: 700,
  fontFamily: 'sans-serif',
  '@media (max-width: 600px)': {
    fontSize: '18px',
  }
}))

const TabsWrapper = styled('div')(() => ({
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'flex-start',
  '@media (max-width: 600px)': {
     justifyContent: 'center',
  }
}));

const StyledTab = styled(Tab)(() => ({
  display: 'inline-flex',
  minWidth: 'auto',
  padding: '6px 12px',
  
  '&:nth-child(3), &:nth-child(4)': {
    '@media (max-width: 600px)': {
      display: 'none', 
    }
  }
}));
export default function GraphSec(params) {
  const [value, setValue] = React.useState(0);
  const [range, setRange] = React.useState("Today");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', 
  maxWidth: '1150px', 
  minHeight: '550px', 
  height: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  padding: '20px',
  boxSizing: 'border-box',
  margin: '0 auto',}}>
        <Header>
          Lead Summary
        </Header>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabsWrapper>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto"
              aria-label="basic tabs example"
              sx={{
                '& .MuiTab-root': {
                   minWidth: 'auto',
                   '@media (max-width: 600px)': {
                      fontSize: '12px',
                   }
                }
              }}
            >
              <StyledTab label={
                <Stack direction="row" alignItems="center">
                  <FaRegUser style={{ marginRight: '10px' }} />
                  Customer
                </Stack>
              } sx={{ textTransform: "none", fontFamily: 'sans-serif' }} {...a11yProps(0)} />
              
              <StyledTab label={
                <Stack direction="row" alignItems="center">
                  <IoCheckmarkDoneCircleOutline style={{ marginRight: '10px', fontSize: "20px" }} />
                  Complete
                </Stack>
              } sx={{ textTransform: "none", fontFamily: 'sans-serif' }} {...a11yProps(1)} />
              
              <StyledTab label={
                <Stack direction="row" alignItems="center">
                  <FaArrowTrendDown style={{ marginRight: '10px', fontSize: "20px" }} />
                  Loss lead
                </Stack>
              } sx={{ textTransform: "none", fontFamily: 'sans-serif' }} {...a11yProps(2)} />
              
              <StyledTab label={
                <Stack direction="row" alignItems="center">
                  <FaUserPlus style={{ marginRight: '10px', fontSize: "20px" }} />
                  New Lead
                </Stack>
              } sx={{ textTransform: "none", fontFamily: 'sans-serif' }} {...a11yProps(3)} />
            </Tabs>
            </TabsWrapper>
          </Box>

          {[Graph1, Graph2, Graph3, Graph4].map((GraphComp, index) => (
            <CustomTabPanel value={value} index={index} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  justifyContent: "space-between",
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: { xs: 2, sm: 0 },
                  mb: 2,
                  width: "100%",
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                    Total Growth
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    $2,324.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Select
                    size="small"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    sx={{
                      background: "background.paper",
                      borderRadius: "8px",
                      fontSize: 14,
                      height: 36,
                    }}
                  >
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Week">This Week</MenuItem>
                    <MenuItem value="Month">This Month</MenuItem>
                    <MenuItem value="Year">This Year</MenuItem>
                  </Select>
                </Box>
              </Box>
              <Box sx={{ width: '100%', overflowX: 'auto' }}>
                <GraphComp />
              </Box>
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
    </>
  )
}