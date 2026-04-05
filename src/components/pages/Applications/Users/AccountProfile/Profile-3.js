import { Avatar, Breadcrumbs, Button, Checkbox, Divider, FormControlLabel, styled, TextField, Typography, Card, CardContent, Grid, Chip, useTheme, useMediaQuery } from "@mui/material"
import { IoHome } from "react-icons/io5"
import { Link } from "react-router-dom"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(order, date, price, status) { return { order, date, price, status }; }
const rows = [
  createData(12877227695, '26 Feb 2021 9:16 am', '$56.32', 'Awaiting'),
  createData(12901477937, '30 Jan 2021 2:54 pm', '$75.56', 'Paid'),
  createData(12767886919, '22 Jan 2021 12:01 pm', '$34.23', 'Paid'),
];
const paymentMethods = [
  { img: '/images/visa.png', type: "Visa", ending: "5269 07XX XXXX 8110", default: true },
  { img: '/images/discover.png', type: "Discover", ending: "6109 07XX XXXX 8020" },
  { img: '/images/master.png', type: "Mastercard", ending: "7278 07XX XXXX 4290" },
];
const statusColor = { Awaiting: "#FFF4E5", Paid: "#E6FFED" };

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: { xs: 1, md: 3 }, boxSizing: 'border-box' }}>{children}</Box>}
    </div>
  );
}

export const Main = styled('div')(({ theme }) => ({
  width: '1200px', 
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: 'auto',
  boxSizing: 'border-box',
  [theme.breakpoints.down(1240)]: {
    width: '100%',
    padding: '10px'
  }
}))

export const SectionOne = styled('div')(({ theme }) => ({
  width: '97%', 
  height: '35px',
  paddingLeft: '16px',
  paddingRight: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  // background: 'white',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: '10px'
  }
}))

export default function ProfileThree() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => { setValue(newValue); };

  const [name, setName] = React.useState('JWT User')
  const [email, setEmail] = React.useState('name@example.com')
  const [company, setCompany] = React.useState('Materially Inc.')
  const [country, setCountry] = React.useState('USA')
  const [number, setNumber] = React.useState('4578-420-410 ')
  const [birth, setBirth] = React.useState('31/01/2001')

  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Profile 03</Typography>
        <Breadcrumbs aria-label="breadcrumb" separator="›" >
          <Link to="/" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', color: 'text.home', textDecoration:'none' }}><IoHome /></Link>
          <Typography sx={{ color: "inherit", fontSize: '13px' }}>Account Profile</Typography>
          <Typography sx={{ color: "inherit", fontSize: '13px' }}>Profile 03</Typography>
        </Breadcrumbs>
      </SectionOne>

      <Box sx={{ width: '97%',bgcolor: 'background.paper', padding: '15px', borderRadius: '10px', boxSizing: 'border-box', overflow: 'hidden' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Account</Typography>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />

        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-scroller': { overflow: 'auto !important' } 
              }}
            >
              <Tab label={<Typography sx={{ textTransform: 'none', fontSize: '14px' }}>Profile</Typography>} />
              <Tab label={<Typography sx={{ textTransform: 'none', fontSize: '14px' }}>Billing</Typography>} />
              <Tab label={<Typography sx={{ textTransform: 'none', fontSize: '14px' }}>Security</Typography>} />
              <Tab label={<Typography sx={{ textTransform: 'none', fontSize: '14px' }}>Notifications</Typography>} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <Box sx={{ width: '100%', minHeight: isMobile ? 'auto' : '450px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
              <Box sx={{ width: isMobile ? '100%' : '35%', height: 'auto', border: '1px solid rgb(227,232,239)', borderRadius: '10px', pb: 2 }}>
                <Typography sx={{ fontSize: '14px', marginLeft: '20px', marginTop: '20px' }}>Profile Picture</Typography>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '200px', alignItems: 'center', gap: '20px' }}>
                  <Avatar src="/images/socialImg-5.png" sx={{ width: 80, height: 80 }} />
                  <Typography sx={{ fontSize: '14px', color: 'gray' }}>Upload/Change Your Profile Image</Typography>
                  <Button variant="contained" sx={{ background: 'rgb(33,150,243)', textTransform: 'none' }}>Upload Avatar</Button>
                </Box>
              </Box>

              <Box sx={{ width: isMobile ? '100%' : '65%', minHeight: '100%', border: '1px solid rgb(227,232,239)', borderRadius: '10px', pb: 3 }}>
                <Typography sx={{ fontSize: '14px', marginLeft: '20px', marginTop: '20px' }}>Edit Account Details</Typography>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                <Box sx={{ width: '95%', margin: 'auto', display: 'flex', flexDirection: 'column', minHeight: isMobile ? 'auto' : '280px', justifyContent: 'space-between', gap: '20px' }}>
                  <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <TextField fullWidth sx={{ bgcolor: 'background.default' }} label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
                    <TextField sx={{ width: isMobile ? '100%' : '50%', bgcolor: 'background.default' }} label="Company" value={company} />
                    <TextField sx={{ width: isMobile ? '100%' : '50%', bgcolor: 'background.default' }} label="Country" value={country} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
                    <TextField sx={{ width: isMobile ? '100%' : '50%', bgcolor: 'background.default' }} label="Phone-number" value={number} />
                    <TextField sx={{ width: isMobile ? '100%' : '50%', bgcolor: 'background.default' }} label="Birthday" value={birth} />
                  </Box>
                </Box>
                <Button sx={{ background: 'rgb(33,150,243)', textTransform: 'none', color: 'white', marginLeft: '20px', marginTop: '20px' }}>Change Details</Button>
              </Box>
            </Box>
          </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
  <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
   height: { xs: 'auto', md: 'calc(100vh - 120px)' },
    width: '100%',
    gap: 0 
  }}>
    
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      gap: '20px', 
      mb: 3,
      flexShrink: 0 
    }}>
      <Card sx={{ bgcolor: 'background.bil1', borderLeft: "5px solid #F04438", flex: 1 }}>
        <CardContent>
          <Typography variant="subtitle2">Bill Due</Typography>
          <Typography variant="h5" fontWeight={600}>$150.00</Typography>
          <Typography variant="body2" color="error" sx={{ mt: 1, cursor: "pointer" }}>Pay Now →</Typography>
        </CardContent>
      </Card>
      
      <Card sx={{ bgcolor: 'background.bil2', borderLeft: "5px solid #FBBF24", flex: 1 }}>
        <CardContent>
          <Typography variant="subtitle2">Total Credits</Typography>
          <Typography variant="h5" fontWeight={600}>1570 GB</Typography>
          <Typography variant="body2" color="warning.main" sx={{ mt: 1, cursor: "pointer" }}>Full Report →</Typography>
        </CardContent>
      </Card>
      
      <Card sx={{ bgcolor: 'background.bil3', borderLeft: "5px solid #34D399", flex: 1 }}>
        <CardContent>
          <Typography variant="subtitle2">Plan</Typography>
          <Typography variant="h5" fontWeight={600}>Basic</Typography>
          <Typography variant="body2" color="success.main" sx={{ mt: 1, cursor: "pointer" }}>Upgrade? →</Typography>
        </CardContent>
      </Card>
    </Box>

    <Box sx={{ 
      mb: 3, 
          bgcolor: 'background.default', 
      p: 2, 
      borderRadius: 3, 
      border: '1px solid lightgray', 
      boxSizing: 'border-box',
      flexShrink: 0 
    }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, alignItems: 'center' }}>
        <Typography fontWeight={600}>Payment Methods</Typography>
        <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>Add New Method</Button>
      </Box>
      <Divider sx={{ mb: 1 }} />
      {paymentMethods.map((method, idx) => (
        <Box key={idx} sx={{ 
          mt: 2, mb: 2, 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          py: 1, 
          borderBottom: '1px solid lightgray', 
          flexWrap: { xs: 'wrap', sm: 'nowrap' }, 
          gap: 2 
        }}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Box component="img" src={method.img} alt={method.type} sx={{ width: 50, height: 'auto' }} />
            <Box>
              <Typography fontWeight={500}>{method.type} card</Typography>
              <Typography variant="body2" color="text.secondary">Ending in {method.ending}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: 'center' }}>
            {method.default ? <Chip label="Default" size="small" /> : <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>Make Default</Typography>}
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>Edit</Typography>
          </Box>
        </Box>
      ))}
    </Box>

    <TableContainer 
      component={Paper} 
      sx={{ 
        border: '1px solid lightgray', 
        borderRadius: 3, 
        width: '100%', 
        overflow: 'auto', 
        boxShadow: 'none',
        maxHeight: { xs: '400px', md: 'calc(100vh - 450px)' }, 
        minHeight: '200px'
      }}
    >
      <Table stickyHeader sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600,bgcolor: 'background.paper' }}>Order No.</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600,bgcolor: 'background.paper' }}>Date</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600,bgcolor: 'background.paper' }}>Price</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600,bgcolor: 'background.paper' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} hover>
              <TableCell>{row.order}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <Chip 
                  label={row.status} 
                  size="small" 
                  sx={{ 
                    backgroundColor: statusColor[row.status], 
                    color: row.status === "Paid" ? "#027A48" : "#974D00",
                    fontWeight: 500
                  }} 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <Box sx={{ width: '100%', minHeight: isMobile ? 'auto' : '290px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
              <Box sx={{ width: isMobile ? '100%' : '65%', border: '1px solid rgb(227,232,239)', borderRadius: '10px', height: 'auto', pb: 2 }}>
                <Typography sx={{ fontSize: '14px', marginLeft: '20px', marginTop: '20px' }}>Change Password</Typography>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                <Box sx={{ width: '95%', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <TextField label="Current Password" variant="outlined" sx={{ width: '100%', bgcolor: 'background.default' }} />
                  <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
                    <TextField fullWidth label="New Password" variant="outlined" sx={{ bgcolor: 'background.default' }} />
                    <TextField fullWidth label="Re-enter New Password" variant="outlined" sx={{ bgcolor: 'background.default' }} />
                  </Box>
                </Box>
                <Button sx={{ background: 'rgb(33,150,243)', textTransform: 'none', color: 'white', marginLeft: '20px', marginTop: '20px' }}>Change Password</Button>
              </Box>
              <Box sx={{ width: isMobile ? '100%' : '35%', border: '1px solid rgb(227,232,239)', borderRadius: '10px', height: 'auto', pb: 3 }}>
                <Typography sx={{ fontSize: '14px', marginLeft: '20px', marginTop: '20px' }}>Deactivate Account</Typography>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                <Typography sx={{ fontSize: '13px', px: '20px', color: 'gray' }}>To deactivate your account, first delete its resources...</Typography>
                <Button variant="outline" sx={{ textTransform: 'none', color: 'red', ml: '20px', mt: '20px', border: '1px solid red' }}>Deactivate Account</Button>
              </Box>
            </Box>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
             <Box sx={{width:'100%', minHeight: isMobile ? 'auto' : '350px', display:'flex', flexDirection: isMobile ? 'column' : 'row', gap:'20px'}}>
                <Box sx={{width: isMobile ? '100%' : '65%', border:'1px solid rgb(227,232,239)', borderRadius:'10px', pb: 2}}>
                   <Typography sx={{fontSize:'14px', marginLeft:'20px', marginTop:'20px'}}>Subscription Preference Center</Typography>
                   <Divider sx={{marginTop:'20px', marginBottom:'20px'}}/>
                   <Typography sx={{fontSize:'14px', marginLeft:'20px', marginTop:'20px'}}>I would like to receive:</Typography>
                   <Box sx={{width:'95%', margin:'auto', display:'flex', flexDirection:'column', gap: 1, marginTop:'10px'}}>
                      <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{fontSize:'13px', color:'gray'}}>Product Announcements and Updates</Typography>} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{fontSize:'13px', color:'gray'}}>Events and Meetups</Typography>} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{fontSize:'13px', color:'gray'}}>User Research Surveys</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{fontSize:'13px', color:'gray'}}>Hatch Startup Program</Typography>} />
                   </Box>
                </Box>
                <Box sx={{width: isMobile ? '100%' : '35%', border:'1px solid rgb(227,232,239)', borderRadius:'10px', height:'auto', pb: 3}}>
                   <Typography sx={{fontSize:'14px', marginLeft:'20px', marginTop:'20px'}}>Opt me out instead</Typography>
                   <Divider sx={{marginTop:'20px', marginBottom:'20px'}}/>
                   <Box sx={{width:'95%', margin:'auto'}}>
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{fontSize:'13px', color:'gray'}}>Unsubscribe me from all</Typography>} />
                   </Box>
                   <Button size="small" sx={{background:'rgb(33,150,243)', textTransform:'none', color:'white', marginLeft:'20px', marginTop:'10px'}}>Update preferences</Button>
                </Box>
             </Box>
          </CustomTabPanel>
        </Box>
      </Box>
    </Main>
  )
}