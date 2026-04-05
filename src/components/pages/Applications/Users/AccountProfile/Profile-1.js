import { Alert, AlertTitle, Avatar, Box, Breadcrumbs, Button, Card, CardHeader, Checkbox, Chip, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, styled, Switch, Tabs, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { MdSwitchAccount } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import profileMockData from "./ProfileMockData";
import LinearProgress from "@mui/material/LinearProgress";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaMobile } from "react-icons/fa6";


// 



export const skillsData = [
  { name: "Junior", percent: 70, color: "primary" },
  { name: "UX Researcher", percent: 80, color: "primary" },
  { name: "Wordpress", percent: 25, color: "secondary" },
  { name: "Graphic Designer", percent: 80, color: "primary" },
  { name: "HTML", percent: 45, color: "success" },
  { name: "PHP", percent: 65, color: "primary" }
];
const currencies = [
  {
    value: 'washington',
    label: 'washington',
  },
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'Newyork',
    label: 'Newyork',
  },
];
const experience = [
  {
    value: 'Startup',
    label: 'Startup',
  },
  {
    value: '2 Years',
    label: '2 Years',
  },
  {
    value: '5 Years',
    label: '5 Years',
  },
  {
    value: '3 years',
    label: '3 years',
  },
];


// 
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
      {value === index && <Box>{children}</Box>}
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

// 
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export const Main = styled('div')(({ theme }) => ({
  width: '100%', 
  maxWidth: '1200px', 
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
  boxSizing: 'border-box', 

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '0px',
    paddingRight: '0px',
  }
}));
export const SectionOne = styled('div')(({ theme }) => ({
  width: '97%',
  minHeight: '35px', 
  paddingLeft: '16px',
  paddingRight: '16px',
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  // background: 'white',
  margin: 'auto', 
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    paddingTop: '8px',
    paddingBottom: '8px',
    flexDirection: 'column', 
    gap: '5px',
    alignItems: 'flex-start' 
  }
}));
export const TabSection = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  margin: 0,
  padding: '0px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
  boxSizing: 'border-box', 
}));

export default function ProfileOne(params) {
     const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const leftSkills = skillsData.slice(0, 3);
const rightSkills = skillsData.slice(3, 6);

  const [Bio , setBio]= useState('I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style')
  const [password, setPassword]= React.useState('(+99) 999 9999 999')
  const [email , setEmail] = React.useState('codedthemes@gmail.com')
  const [portfolio , setPortfolio] = React.useState('https://demo.com')
  const [address , setAddress] = React.useState('3379  Monroe Avenue, Fort Myers, Florida(33912)')
  const [UserName , setUserName] = React.useState('Asoka_Tana_16')
  const [EmailAccount , setEmailAccont] = React.useState('demo@sample.com')
  const [state, setState] = React.useState({
   jason: false, 
  });
  const [SecState, setSecState] = React.useState({
   approval: true, 
  });


  const handleChanging = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChanged = (event) => {
    setState({
      ...SecState,
      [event.target.name]: event.target.checked,
    });
  };




  return( 

<Main>
<SectionOne sx={{bgcolor:'background.paper'}}>
  <Typography sx={{ fontWeight: 600, fontSize: { xs: '14px', lg: '16px' } }}>
    Profile 01
  </Typography>
  
  <div role="presentation" onClick={handleClick}>
    <Breadcrumbs 
      aria-label="breadcrumb" 
      separator="›" 
      maxItems={4} 
      sx={{
        '& .MuiBreadcrumbs-ol': {
          flexWrap: 'nowrap', 
        },
        '& .MuiBreadcrumbs-separator': {
          marginLeft: { xs: '4px', sm: '8px' },
          marginRight: { xs: '4px', sm: '8px' }
        }
      }}
    >
      <Link underline="hover" color="text.home" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <IoHome style={{ fontSize: '15px' }} />
      </Link>

      <Typography 
        sx={{ 
          color: "inherit", 
          fontSize: { xs: '11px', sm: '13px' }, 
          display: 'block',
          whiteSpace: 'nowrap'
        }}
      >
        Account Profile
      </Typography>

      <Typography 
        sx={{ 
          color: "text.primary", 
          fontSize: { xs: '11px', sm: '13px' }, 
          fontWeight: 500,
          whiteSpace: 'nowrap'
        }}
      >
        Profile 01
      </Typography>
    </Breadcrumbs>
  </div>
</SectionOne>
{/*  */}
<Box sx={{
    width: { xs: '100%', lg: '97%' },
    height: 'auto',
    bgcolor: 'background.paper',
    padding: { xs: '10px', lg: '15px' },
    borderRadius: '10px',
    margin: 'auto', 
    boxSizing: 'border-box', 
    overflow: 'hidden' 
  }}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
  <Tabs
    value={value}
    onChange={handleChange}
    aria-label="grid tabs"
    variant="standard" 
    sx={{
      '& .MuiTabs-flexContainer': {
        flexWrap: { xs: 'wrap', lg: 'nowrap' }, 
        display: 'flex',
        gap: { xs: '8px', lg: '0px' }, 
      },
      '& .MuiTabs-indicator': {
        backgroundColor: '#2196f3',
        height: '3px',
        borderRadius: '10px',
        display: { xs: 'none', lg: 'block' } 
      },
      '& .MuiTab-root': {
        textTransform: 'none',
        fontSize: '15px',
        fontWeight: 500,
        color: 'text.secondary',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '12px 10px',
        minHeight: '48px',
        width: { xs: 'calc(50% - 4px)', lg: 'auto' },
        minWidth: 'auto',
        
        '&.Mui-selected': {
          color: '#2196f3',
          fontWeight: 'bold',
          borderBottom: { xs: '3px solid #2196f3', lg: 'none' }
        },
      }
    }}
  >
    <Tab
      icon={<FaUserCircle style={{ fontSize: '20px' }} />}
      iconPosition="start"
      label="Profile"
      {...a11yProps(0)}
    />
    <Tab
      icon={<TbFileDescription style={{ fontSize: '20px' }} />}
      iconPosition="start"
      label="Personal Details"
      {...a11yProps(1)}
    />
    <Tab
      icon={<MdSwitchAccount style={{ fontSize: '20px' }} />}
      iconPosition="start"
      label="My Account"
      {...a11yProps(2)}
    />
    <Tab
      icon={<PiLockKeyFill style={{ fontSize: '20px' }} />}
      iconPosition="start"
      label="Change Password"
      {...a11yProps(3)}
    />
    <Tab
      icon={<FaEnvelope style={{ fontSize: '20px' }} />}
      iconPosition="start"
      label="Settings"
      {...a11yProps(4)}
    />
  </Tabs>
</Box>
      <TabSection>
      {/* tab 1*/}
<CustomTabPanel value={value} index={0}>
  <Box
    sx={{
      width: '100%',
      height: 'auto',
      display: 'flex',
      gap: '25px',
      flexDirection: { xs: 'column', md: 'row' }, 
    }}
  >
   <Box
  sx={{
    width: { xs: '100%', lg: '32%' },
    height: { xs: 'auto', lg: '370px' },
    padding: '7px',
    border: '1px solid rgb(227,232,239)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    marginTop: '20px',
    boxSizing: 'border-box', 
    '&:hover': {
      boxShadow: 6,
    },
  }}
>
  <Box>
    <Card sx={{ width: '100%', boxShadow: 'none', border: 'none' }}>
      <CardHeader
        avatar={<Avatar src="/images/socialImg-6.png" />}
        action={
          <Chip
            label="Pro"
            sx={{
              background: 'rgb(33,150,243)',
              color: 'white',
              marginTop: '10px',
            }}
          ></Chip>
        }
        title={<Typography sx={{ fontSize: '13px', marginTop: '2px' }}>JWT User</Typography>}
        subheader={<Typography sx={{ fontSize: '13px', color: 'gray' }}>UI/UX Designer</Typography>}
      />
    </Card>
    
    <Divider sx={{ marginBottom: { xs: '20px', lg: '50px' } }} />

    <Box
      sx={{
        width: '90%',
        height: 'auto',
        minHeight: '130px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <FaEnvelope style={{ color: 'gray' }} />
          <Typography>Email</Typography>
        </Box>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>Demo@sample.com</Typography>
      </Box>
      <Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
      
      <Box
        sx={{
          width: '100%',
          height: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <MdPhonelinkRing style={{ color: 'gray' }} />
          <Typography>Phone</Typography>
        </Box>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>(+99) 9999 999 999</Typography>
      </Box>
      <Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
      
      <Box
        sx={{
          width: '100%',
          height: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <MdLocationPin style={{ color: 'gray' }} />
          <Typography>Location</Typography>
        </Box>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>Melbourne</Typography>
      </Box>
    </Box>

    <Box
      sx={{
        width: '80%',
        margin: 'auto',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '20px',
        paddingBottom: '10px'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>37</Typography>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>Mails</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>2,749</Typography>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>Followers</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>678</Typography>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>Following</Typography>
      </Box>
    </Box>
  </Box>
</Box>

    <Box
      sx={{
        width: { xs: '100%', md: '66%' },
        height: 'auto',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          minHeight: '450px',
              bgcolor: 'background.paper',

          border: '1px solid rgb(227,232,239)',
          borderRadius: '10px',
          paddingBottom: '20px',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            width: '95%',
            margin: 'auto',
            height: '50px',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>About me</Typography>
          <FaRegEdit style={{ color: 'rgb(125,194,248)' }} />
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box sx={{ width: '95%', margin: 'auto', marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '14px', color: 'gray' }}>
            Hello,I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
          </Typography>
        </Box>
        <Box sx={{ width: '95%', margin: 'auto' }}>
          <Typography sx={{ fontSize: '14px' }}>Personal Details</Typography>
        </Box>

        <Box sx={{ width: '95%', margin: 'auto', marginTop: '20px' }}>
          {profileMockData.map((item, index) => (
            <Grid container key={index} sx={{ mb: 1 }} spacing={2}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                  {item.label}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography sx={{ fontSize: '14px' }}>{item.value}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 'auto', 
          minHeight: '280px',
              bgcolor: 'background.paper',
          border: '1px solid rgb(227,232,239)',
          borderRadius: '10px',
          paddingBottom: '20px',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Education</Typography>
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box
          sx={{
            width: '95%',
            margin: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '10px',
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '40%' }, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '14px' }}>2014-2017</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Master Degree</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '14px' }}>2009-2011</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>School</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '14px' }}>2011-2013</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Bachelor</Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '60%' }, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '15px' }}>Master Degree in Computer Application</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>University of Oxford, England</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '15px' }}>Bachelor Degree in Computer Engineering</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Imperial College London</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '15px' }}>Higher Secondary Education</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>School of London, England</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 'auto',
          minHeight: '230px',
             bgcolor: 'background.paper',
          border: '1px solid rgb(227,232,239)',
          borderRadius: '10px',
          paddingBottom: '20px',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Employment</Typography>
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box
          sx={{
            width: '95%',
            margin: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '10px',
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '40%' }, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '14px' }}>Current</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Senior</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '14px' }}>2017-2019</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Junior</Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '60%' }, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '15px' }}>Senior UI/UX designer</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Perform task related to project</Typography>
            </Box>
            <Box sx={{ height: '50px' }}>
              <Typography sx={{ fontSize: '15px' }}>Trainee cum Project Manager</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }}>Microsoft, TX, USA</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 'auto',
          minHeight: '280px',
    bgcolor: 'background.paper',
          border: '1px solid rgb(227,232,239)',
          borderRadius: '10px',
          paddingBottom: '20px',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Skills</Typography>
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box sx={{ width: '95%', mx: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 0, sm: 4 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              {leftSkills.map((user) => (
                <Box key={user.name} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{user.name}</Typography>
                    <Typography>{user.percent}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={user.percent}
                    color={user.color}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ flex: 1 }}>
              {rightSkills.map((user) => (
                <Box key={user.name} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{user.name}</Typography>
                    <Typography>{user.percent}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={user.percent}
                    color={user.color}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
</CustomTabPanel>
{/* Tab 2 */}
<CustomTabPanel value={value} index={1}>
  <Box sx={{ width: '100%', height: 'auto', display: 'flex', gap: '25px', marginTop: "20px", flexDirection: 'column' }}>
    
    <Box sx={{ 
      width: '100%', 
      height: { xs: 'auto', lg: '350px' }, 
      display: 'flex', 
      gap: '20px', 
      flexDirection: { xs: 'column', lg: 'row' }
    }}>

      <Box sx={{ 
        width: { xs: '100%', lg: '49%' }, 
        height: '100%', 
    bgcolor: 'background.paper',
        borderRadius: '10px', 
        border: '1px solid rgb(189,189,189)',
        pb: { xs: 2, lg: 0 } 
      }}>
        <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
          <Typography sx={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: 500 }}>Personal Information</Typography>
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box sx={{ width: '95%', margin: 'auto', display: 'flex', gap: '10px' }}>
          <FormControl sx={{ width: '50%' }}>
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput
              sx={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: 500 }}
              id="component-outlined"
              defaultValue="JWT User"
              label="Name"
            />
          </FormControl>
          <TextField
            sx={{ width: '50%' }}
            id="outlined-select-currency"
            select
            label="Location"
            defaultValue="washington"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ width: '95%', margin: 'auto', marginTop: "20px" }}>
          <TextField
            label="Bio"
            value={Bio}
            onChange={(e) => setBio(e.target.value)}
            fullWidth
            inputProps={{
              style: {
                height: 60,
                padding: '0 8px'
              }
            }}
          />
          <TextField
            sx={{ width: '50%', marginTop: "20px" }}
            id="outlined-select-experience"
            select
            label="Experience"
            defaultValue="StartUp"
          >
            {experience.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      <Box sx={{ 
        width: { xs: '100%', lg: '50%' }, 
        height: '100%', 
    bgcolor: 'background.paper',
        borderRadius: '10px', 
        border: '1px solid rgb(189,189,189)',
        pb: { xs: 2, lg: 0 }
      }}>
        <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
          <Typography sx={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: 500 }}>Contact Information</Typography>
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        <Box sx={{ width: '95%', margin: 'auto', display: 'flex', gap: '20px' }}>
          <TextField
            sx={{ width: '50%' }}
            id="outlined-controlled-phone"
            label="Phone Number"
            value={password}
            onChange={(event) => { setPassword(event.target.value); }}
          />
          <TextField
            sx={{ width: '50%' }}
            id="outlined-controlled-email"
            label="Email ID"
            value={email}
            onChange={(event) => { setEmail(event.target.value); }}
          />
        </Box>
        <Box sx={{ width: '95%', margin: 'auto', marginTop: '20px' }}>
          <TextField
            sx={{ width: '100%' }}
            id="outlined-controlled-portfolio"
            label="Portfolio URL"
            value={portfolio}
            onChange={(event) => { setPortfolio(event.target.value); }}
          />
          <TextField
            sx={{ width: '100%', marginTop: '20px' }}
            id="outlined-controlled-address"
            label="Address"
            value={address}
            onChange={(event) => { setAddress(event.target.value); }}
          />
        </Box>
      </Box>
    </Box>

   <Box sx={{ 
  width: { xs: '100%', lg: '49%' }, 
  height: { xs: 'auto', lg: '300px' }, 
  border: '1px solid rgb(189,189,189)', 
    bgcolor: 'background.paper',
  borderRadius: '10px',
  pb: { xs: 3, lg: 0 }
}}>
  <Box sx={{ width: '95%', margin: 'auto', height: '50px', marginTop: '20px' }}>
    <Typography sx={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: 500 }}>Social Information</Typography>
  </Box>
  <Divider sx={{ marginBottom: "20px" }} />
  
  <Box sx={{ 
    width: '95%', 
    margin: 'auto', 
    height: { xs: 'auto', lg: '180px' }, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    gap: 2 
  }}>
    
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
      <FaFacebookSquare style={{ fontSize: '25px', color: '#3b5998' }} />
      <TextField 
        size="small" 
        label="Facebook Profile Url" 
        variant="outlined" 
        sx={{ flex: 1, maxWidth: '370px' }} 
      />
      <Button 
        variant="contained" 
        size="small"
        sx={{ 
          textTransform: 'none', 
          background: 'rgb(103,58,183)', 
          minWidth: { xs: '70px', sm: '100px' }, 
          whiteSpace: 'nowrap' 
        }}
      >
        connect
      </Button>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
      <FaSquareTwitter style={{ fontSize: '25px', color: '#1da1f2' }} />
      <TextField 
        size="small" 
        label="Twitter Profile Url" 
        variant="outlined" 
        sx={{ flex: 1, maxWidth: '370px' }} 
      />
      <Button 
        variant="contained" 
        size="small" 
        sx={{ 
          textTransform: 'none', 
          background: 'rgb(103,58,183)', 
          minWidth: { xs: '70px', sm: '100px' }, 
          whiteSpace: 'nowrap' 
        }}
      >
        connect
      </Button>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
      <FaSquareInstagram style={{ fontSize: '25px', color: '#e1306c' }} />
      <TextField 
        size="small" 
        label="Insta Profile Url" 
        variant="outlined" 
        sx={{ flex: 1, maxWidth: '370px' }} 
      />
      <Button 
        variant="contained" 
        size="small" 
        sx={{ 
          textTransform: 'none', 
          background: 'rgb(103,58,183)', 
          minWidth: { xs: '70px', sm: '100px' }, 
          whiteSpace: 'nowrap' 
        }}
      >
        connect
      </Button>
    </Box>

  </Box>
</Box>

  </Box>
</CustomTabPanel>
{/* tab 3 */}
<CustomTabPanel value={value} index={2}>
  <Box sx={{ width: '100%', height: 'auto', display: 'flex', gap: '25px', marginTop: "20px", flexDirection: 'column' }}>
    
    <Box sx={{ 
      width: '100%', 
      height: { xs: 'auto', lg: '250px' }, 
      border: '1px solid rgb(189,189,189)', 
      borderRadius: '10px',
    bgcolor: 'background.paper',
      pb: { xs: 3, lg: 0 } 
    }}>
      <Box sx={{ width: '97%', margin: 'auto', height: '50px', marginTop: '20px' }}>
        <Typography sx={{ fontSize: "15px", fontFamily: 'sans-serif', fontWeight: 500 }}>General Settings</Typography>
      </Box>
      <Divider sx={{ marginBottom: '20px' }} />
      
      <Box sx={{ 
        width: '97%', 
        height: { xs: 'auto', lg: '140px' }, 
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        gap: { xs: 2, lg: 0 }
      }}>
        
        {/* Row 1 */}
        <Box sx={{ width: '100%', display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            id="outlined-username"
            label="User Name"
            value={UserName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            id="outlined-account-email"
            label="Account Email"
            value={EmailAccount}
            onChange={(event) => setEmailAccont(event.target.value)}
          />
        </Box>

        {/* Row 2 */}
        <Box sx={{ width: '100%', display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            id="outlined-select-location"
            select
            label="Location"
            defaultValue="washington"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            id="outlined-select-experience"
            select
            label="Experience"
            defaultValue="StartUp"
          >
            {experience.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>

    <Box sx={{ width: '100%', height: 'auto', border: '1px solid rgb(189,189,189)', borderRadius: '10px',bgcolor: 'background.paper', paddingBottom: '20px' }}>
      <Box sx={{ width: '97%', margin: 'auto', height: '50px', marginTop: '20px' }}>
        <Typography sx={{ fontSize: "15px", fontFamily: 'sans-serif', fontWeight: 500 }}>Advance Settings</Typography>
      </Box>
      <Divider sx={{ marginBottom: '20px' }} />
      
      <Box sx={{ width: '97%', margin: 'auto', height: 'auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <Box sx={{ width: '100%', height: { xs: 'auto', lg: '80px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', fontWeight: 500 }}>Secure Browsing</Typography>
          <FormControlLabel
            control={<Switch checked={state.jason} onChange={handleChanging} name="jason" />}
            label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Browsing Securely ( https ) when it's necessary</Typography>}
          />
        </Box>

        <Box sx={{ width: '100%', height: { xs: 'auto', lg: '80px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', fontWeight: 500 }}>Login Notifications</Typography>
          <FormControlLabel
            control={<Switch checked={state.jason} onChange={handleChanging} name="jason" />}
            label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Notify when login attempted from other place</Typography>}
          />
        </Box>

        <Box sx={{ width: '100%', height: { xs: 'auto', lg: '80px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '15px', fontFamily: 'sans-serif', fontWeight: 500 }}>Login Approval</Typography>
          <FormControlLabel
            control={<Switch checked={SecState.approval} onChange={handleChanged} name="approval" />}
            label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Notify when login attempted from other place</Typography>}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: '20px', marginTop: '20px' }} />

     <Box sx={{ width: '97%', margin: 'auto', height: 'auto' }}>
  <Box sx={{ width: '100%', height: "50px", marginTop: '10px' }}>
    <Typography sx={{ fontSize: '15px', fontWeight: '500' }}>ACTIVE SESSIONS</Typography>
  </Box>
  
  <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    
    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexDirection: 'row', 
      gap: 1 
    }}>
      <Box sx={{ 
        display: 'flex', 
        gap: { xs: '5px', sm: '10px' }, 
        alignItems: 'center', 
        flexDirection: 'row', 
        overflow: 'hidden' 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <RiComputerFill style={{ color: 'rgb(178,238,203)' }} />
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, whiteSpace: 'nowrap' }}>Ceto Desktop</Typography>
        </Box>
        
        <Typography sx={{ color: 'gray', display: { xs: 'none', sm: 'block' } }}>|</Typography>
        
        <Typography sx={{ 
          fontSize: { xs: '10px', sm: '12px' }, 
          color: "gray", 
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis' 
        }}>
          4351 Deans Lane, Chelmsford
        </Typography>
      </Box>
      <Button sx={{ 
        color: 'red', 
        textTransform: 'none', 
        fontSize: { xs: '12px', sm: '14px' },
        minWidth: 'fit-content' 
      }}>
        Logout
      </Button>
    </Box>

    <Divider />

    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexDirection: 'row', 
      gap: 1 
    }}>
      <Box sx={{ 
        display: 'flex', 
        gap: { xs: '5px', sm: '10px' }, 
        alignItems: 'center', 
        flexDirection: 'row', 
        overflow: 'hidden' 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <FaMobile style={{ color: 'rgb(178,238,203)' }} />
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, whiteSpace: 'nowrap' }}>Moon Tablet</Typography>
        </Box>
        
        <Typography sx={{ color: 'gray', display: { xs: 'none', sm: 'block' } }}>|</Typography>
        
        <Typography sx={{ 
          fontSize: { xs: '10px', sm: '12px' }, 
          color: "gray", 
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis' 
        }}>
          4185 Michigan Avenue
        </Typography>
      </Box>
      <Button sx={{ 
        color: 'red', 
        textTransform: 'none', 
        fontSize: { xs: '12px', sm: '14px' },
        minWidth: 'fit-content' 
      }}>
        Logout
      </Button>
    </Box>
  </Box>
</Box>

      <Divider sx={{ marginTop: '10px', marginBottom: '20px' }} />

      <Box sx={{ width: '97%', height: '80px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
        <Button variant='contained' sx={{ textTransform: 'none' }}>Update Profile</Button>
        <Button sx={{ textTransform: 'none', color: 'red' }}>Clear</Button>
      </Box>
    </Box>
  </Box>
</CustomTabPanel>
{/* tab 4 */}
<CustomTabPanel value={value} index={3}>
  <Box sx={{ 
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    gap: '25px', 
    marginTop: "20px", 
    flexDirection: 'column' 
  }}>
    <Alert 
      severity="warning" 
      sx={{ 
        color: 'rgb(239,121,24)', 
        borderRadius: '10px', 
        border: '1px dotted', 
        borderColor: 'rgb(255,193,7)' 
      }}
    >
      <AlertTitle>Alert</AlertTitle>
      Your Password will expire in every 3 months. So change it periodically. Do not share your password
    </Alert>

    <Box sx={{ 
      width: '100%', 
      border: '1px solid rgb(227,232,239)', 
      height: { xs: 'auto', lg: '300px' }, 
      borderRadius: '10px',
      pb: { xs: 2, lg: 0 }
    }}>
      <Box sx={{ width: '97%', height: '50px', margin: 'auto', marginTop: '20px' }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 'bold' }}>Change Password</Typography>
      </Box>
      <Divider sx={{ marginBottom: '20px' }} />
      
      <Box sx={{ width: '97%', margin: 'auto' }}>
        <TextField 
          label="Current Password" 
          sx={{ width: { xs: '100%', lg: '50%' } }} 
        />
      </Box>

      <Box sx={{ 
        width: '97%', 
        margin: 'auto', 
        display: 'flex', 
        gap: "20px", 
        marginTop: '20px',
        flexDirection: { xs: 'column', lg: 'row' }
      }}>
        <TextField 
          label="New Password" 
          sx={{ width: { xs: '100%', lg: '52%' } }} 
        />
        <TextField 
          label="Confirm Password" 
          sx={{ width: { xs: '100%', lg: '50%' } }} 
        />
      </Box>

      <Box sx={{ 
        width: '97%', 
        height: '80px', 
        margin: 'auto', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        gap: '20px' 
      }}>
        <Button variant='contained' sx={{ textTransform: 'none' }}>Update Profile</Button>
        <Button sx={{ textTransform: 'none', color: 'red' }}>Clear</Button>
      </Box>
    </Box>
  </Box>
</CustomTabPanel>
{/* tab 5 */}   
<CustomTabPanel value={value} index={4}>
  <Box
    sx={{
      width: { xs: '100%', lg: '97%' },
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgb(227,232,239)',
      borderRadius: '10px',
      padding: '16px',
      gap: '16px',
      marginTop: '20px',
    bgcolor: 'background.paper',
    }}
  >
    <Box>
      <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>
        Email Settings
      </Typography>
    </Box>
    <Divider />

    <Box sx={{ height: 'auto' }}>
      <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>SetUp Email Notifications</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <FormControlLabel control={<Switch defaultChecked />} label={
          <Typography sx={{ fontSize: '13px', color: 'gray' }}>Email Notification</Typography>
        } />
        <FormControlLabel control={<Switch defaultChecked />} label={
          <Typography sx={{ fontSize: '13px', color: 'gray' }}>Send Copy To Personal Email</Typography>
        } />
      </Box>
    </Box>
    <Divider />

    <Box sx={{ width: '100%', height: 'auto' }}>
      <Typography sx={{ fontWeight: 'bold' }}>Activity Related Emails</Typography>
      
      <Box sx={{ width: '100%', height: 'auto', marginTop: '25px' }}>
        <Typography sx={{ fontSize: '13px', fontFamily: 'sans-serif' }}>When to email?</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel control={<Switch defaultChecked />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>have new notifications</Typography>
          } />
          <FormControlLabel control={<Switch />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>you're sent a direct message</Typography>
          } />
          <FormControlLabel control={<Switch defaultChecked />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>Someone adds you as a connection</Typography>
          } />
        </Box>
      </Box>

      <Box sx={{ width: '100%', height: 'auto', marginTop: '25px' }}>
        <Typography sx={{ fontSize: '13px', fontFamily: 'sans-serif' }}>When to escalate emails?</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel control={<Switch defaultChecked />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>Upon new order</Typography>
          } />
          <FormControlLabel control={<Switch defaultChecked />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>New membership approval</Typography>
          } />
          <FormControlLabel control={<Switch />} label={
            <Typography sx={{ fontSize: '13px', color: 'gray' }}>Member registration</Typography>
          } />
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ width: '100%', height: 'auto', marginTop: '25px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Updates From System Notification</Typography>

        <Box sx={{ width: '100%', height: 'auto', marginTop: '25px' }}>
          <Typography sx={{ fontSize: '13px' }}>Email you with?</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel 
              sx={{ alignItems: 'flex-start', mt: 1 }} 
              control={<Checkbox defaultChecked sx={{ mt: -1 }} />} 
              label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>News about PCT-themes products and feature updates</Typography>} 
            />
            <FormControlLabel 
              sx={{ alignItems: 'flex-start', mt: 1 }} 
              control={<Checkbox defaultChecked sx={{ mt: -1 }} />} 
              label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Tips on getting more out of PCT-themes</Typography>} 
            />
            <FormControlLabel 
              sx={{ alignItems: 'flex-start', mt: 1 }} 
              control={<Checkbox sx={{ mt: -1 }} />} 
              label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Things you missed since you last logged into PCT-themes</Typography>} 
            />
            <FormControlLabel 
              sx={{ alignItems: 'flex-start', mt: 1 }} 
              control={<Checkbox sx={{ mt: -1 }} />} 
              label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>News about products and other services</Typography>} 
            />
            <FormControlLabel 
              sx={{ alignItems: 'flex-start', mt: 1 }} 
              control={<Checkbox sx={{ mt: -1 }} />} 
              label={<Typography sx={{ fontSize: '13px', color: 'gray' }}>Tips and Document business products</Typography>} 
            />
          </Box>
        </Box>
      </Box>
    </Box>

    <Divider />

    <Box sx={{ 
      width: '100%', 
      height: '50px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
      gap: '20px' 
    }}>
      <Button sx={{ textTransform: 'none', color: 'red' }}>Clear</Button>
      <Button variant='contained' sx={{ textTransform: 'none' }}>Update</Button>
    </Box>
  </Box>
</CustomTabPanel>
</TabSection>




</Box>




</Main>




  )
} 
  


