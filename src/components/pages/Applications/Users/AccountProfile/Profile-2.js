import { Avatar, Box, Breadcrumbs, Button, Divider, FormControlLabel, MenuItem, Radio, RadioGroup, styled, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import { IoHome } from "react-icons/io5"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { CiUser } from "react-icons/ci";
import { MdDescription } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Box component="div">{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const City = [
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'NewYork', label: 'NewYork' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'Pheonix', label: 'Pheonix' },
];

const country = [
  { value: 'India', label: 'India' },
  { value: 'France', label: 'France' },
  { value: 'UAE', label: 'UAE' },
  { value: 'USA', label: 'USA' },
]

export const Main = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: 'auto',
  padding: '10px',
  boxSizing: 'border-box'
}))

export const SectionOne = styled('div')(() => ({
  width: '100%',
  boxSizing: 'border-box',
  height: 'auto',
  minHeight: '35px',
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  // background: 'white',
  flexWrap: 'wrap'
}))

export default function ProfileTwo() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [LastName, setLastName] = React.useState('Schorl')
  const [FirstName, setFirstName] = React.useState('Delaney')
  const [email, setEmail] = React.useState('demo@sample.com')
  const [phone, setPhone] = React.useState('000-00-00000')
  const [company, setCompany] = React.useState('company.ltd')
  const [site, setSite] = React.useState('www.company.com')
  
  const totalTabs = 4;
  const handleNext = () => { if (value < totalTabs - 1) { setValue(value + 1); } };
  const handleBack = () => { if (value > 0) { setValue(value - 1); } };

  const [block, setBlock] = React.useState('16657')
  const [appart, setAppart] = React.useState(' Dardan Ranch')
  const [streetO, setStreetO] = React.useState('Nathaniel Ports')
  const [streetT, setStreetT] = React.useState('nr. Oran Walks')
  const [post, setPost] = React.useState('395005')
  const [password, setPassword] = React.useState('..........')
  const [newPas, setNewPassword] = React.useState('..........')
  const [confirm, setConfirm] = React.useState('..........')
  const [payment, setPayment] = React.useState("card");

  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Profile 02</Typography>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›" >
            <Link underline="hover" color="text.home" to="/" style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
              <IoHome />
            </Link>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>Account Profile</Typography>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>Profile 02</Typography>
          </Breadcrumbs>
        </div>
      </SectionOne>

      <Box sx={{ width: '100%', padding: { xs: '10px', md: '17px' }, bgcolor: 'background.paper', borderRadius: '10px', boxSizing: 'border-box' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Account Settings</Typography>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row', 
            height: 'auto',
            bgcolor: 'background.paper',
          }}
        >
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: isSmallScreen ? 0 : 1,
              borderColor: 'divider',
              width: isSmallScreen ? '100%' : 350, 
              '& .MuiTabs-indicator': {
                display: isSmallScreen ? 'none' : 'block'
              },
              '& .MuiTab-root': {
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
                textTransform: 'none',
                padding: '16px',
                borderRadius: isSmallScreen ? '8px' : '0px',
                marginBottom: isSmallScreen ? '8px' : '0px',
                minHeight: 'auto',
                width: '100%',
                '&.Mui-selected': {
                  backgroundColor: isSmallScreen ? 'rgba(25, 118, 210, 0.08)' : 'transparent', 
                  color: 'rgb(25, 118, 210)'
                }
              }
            }}
          >
            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CiUser size={22} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>User Profile</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>Profile Settings</Typography>
                </Box>
              </Box>
            } {...a11yProps(0)} />

            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <MdDescription size={22} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Billing</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>Billing Information</Typography>
                </Box>
              </Box>
            } {...a11yProps(1)} />

            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <MdPayment size={22} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Payment</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>Add & Update Card</Typography>
                </Box>
              </Box>
            } {...a11yProps(2)} />

            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <MdVpnKey size={22} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Change Password</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>Update Profile Security</Typography>
                </Box>
              </Box>
            } {...a11yProps(3)} />
          </Tabs>

          <Box sx={{ flexGrow: 1, width: '100%', paddingLeft: isSmallScreen ? 0 : '20px' }}>
            <TabPanel value={value} index={0}>
                <Box sx={{ height: 'auto', width: '100%', maxWidth: '770px' }}>
                  <Avatar src="/images/socialImg-5.png" sx={{ width: 80, height: 80 }} />
                  <Box sx={{ width: '100%', marginTop: '27px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                  </Box>
                  <Box sx={{ width: '100%', marginTop: '27px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </Box>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Box sx={{ height: 'auto', width: '100%', maxWidth: '770px' }}>
                  <Box sx={{ width: '100%', marginTop: '27px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Block No#" value={block} onChange={(e) => setBlock(e.target.value)} />
                    <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Appartment Name" value={appart} onChange={(e) => setAppart(e.target.value)} />
                  </Box>
                </Box>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Box sx={{ height: 'auto', width: '100%', maxWidth: '770px' }}>
                <RadioGroup row value={payment} onChange={(e) => setPayment(e.target.value)} sx={{ mb: 3 }}>
                  <FormControlLabel value="card" control={<Radio />} label="Visa Credit/Debit Card" />
                  <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                </RadioGroup>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "20px" }}>
                  <TextField label="Name on Card" defaultValue="Selena Litten" fullWidth />
                  <TextField label="Card Number" defaultValue="4012 8888 8888 1881" fullWidth />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}>
                  <LockOutlinedIcon sx={{ color: "#2196f3", fontSize: 34 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>Secure Checkout</Typography>
                    <Typography sx={{ fontSize: 13, color: "text.secondary" }}>Secure by Google.</Typography>
                  </Box>
                </Box>
                <Button startIcon={<CreditCardIcon />} variant="outlined" sx={{ mt: 4, textTransform: "none", borderRadius: "8px" }}>Add New Card</Button>
              </Box>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <Box sx={{ height: 'auto', width: '100%', maxWidth: '770px' }}>
                <TextField sx={{ width: { xs: '100%', sm: '50%' }, bgcolor: 'background.default' }} label="Current Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Box sx={{ width: '100%', marginTop: '27px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                  <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="New Password" value={newPas} onChange={(e) => setNewPassword(e.target.value)} />
                  <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </Box>
                <Button variant="outline" sx={{ border: '1px solid rgb(25,118,210)', color: 'rgb(25,118,210)', textTransform: 'none', marginTop: "20px" }}>Change Password</Button>
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Divider sx={{ marginTop: '10px' }} />

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          {value > 0 ? (
            <Button onClick={handleBack} variant="outline" sx={{ textTransform: 'none', border: '1px solid rgb(33,150,243)', color: 'rgb(33,150,243)' }}>Back</Button>
          ) : <Box />}
          {value < totalTabs - 1 && (
            <Button onClick={handleNext} variant="contained" sx={{ textTransform: 'none' }}>Continue</Button>
          )}
        </Box>
      </Box>
    </Main>
  )
}