import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components';
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
const TipsDiv = styled('div')(()=>({
  width:'480px',
  height:'340px',
  display:'flex',
  gap:'100px'
}))

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0.5,borderColor: 'divider',marginLeft:'10px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Quick Tips" {...a11yProps(0)} />
          <Tab label="Request For Demo" {...a11yProps(1)} />
          <Tab label="How To Make Invoice?" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TipsTab/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TipsDiv style={{display:'flex',flexDirection:'column'}}>
<DemoTabs/>
          
        </TipsDiv>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TipsDiv>
          <MyVideo/>
        </TipsDiv>
      </CustomTabPanel>
    </Box>
  );
}
