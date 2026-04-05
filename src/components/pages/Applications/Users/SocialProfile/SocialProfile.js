import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Avatar, Button, Card, Chip, Divider, FormControl, Grid, IconButton, InputAdornment, Modal, OutlinedInput, styled, TextField, Tooltip } from '@mui/material';
import { RiUserAddLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { PiUsersDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { CiShare2 } from "react-icons/ci";
import { MdReply } from "react-icons/md";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LuUsers } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { TbFriends } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FollowersData from './FollowersData';
import FriendsData from './FollowersData';
import { MdVideoCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import GalleryData from './GalleryData';
import { SlCalender } from "react-icons/sl";




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
  padding: '0 16px', 
  boxSizing: 'border-box',
  overflowX: 'hidden' 
}))
export const SectionOne = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '40px',
  height: 'auto',
  padding: '8px 16px', 
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  // background: 'white',
  boxSizing: 'border-box',
  overflow: 'hidden', 
  
  [theme.breakpoints.down('sm')]: {
    padding: '8px 10px',
    gap: '4px' 
  }
}))
export const SectionTwo = styled('div')(({ theme }) => ({
  width: '100%', 
  height: 'auto',
  borderRadius: '12px',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
  marginBottom: '20px'
}))

export const ImageArea = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  position: 'relative',
}))

export const SecondDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  padding: '0 16px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}))

export const SecondImage = styled('div')(({ theme }) => ({
  width: '25%',
  minWidth: '150px',
  height: 'auto',
  textAlign: 'center',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}))

export const RightSection = styled('div')(({ theme }) => ({
  width: '75%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: '15px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingTop: '10px'
  }
}))
export const TopSection = styled('div')(()=>({
  width:'100%',
  height:'50px',
  borderRadius:'8px',
  textAlign:'right',
}))
export const BottomSection = styled('div')(()=>({
  width:'100%',
  borderRadius:'8px',
  textAlign:'right',
}))
export const TabsSection = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  margin: 0,
  padding: 0,
  overflowX: 'hidden', 
  boxSizing: 'border-box', 
}));
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
export default function SocialProfile() {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [open, setOpen] = useState(false);
      const [list, setList] = useState(FollowersData);
      const [SecList , setSecList] = useState(FriendsData);
      const [Gallery , setGallery] = useState(GalleryData)

  return (
    <>
    <Main>
<SectionOne sx={{bgcolor:'background.paper'}}>
  <Typography sx={{ 
    fontWeight: 600, 
    fontSize: { xs: '14px', sm: '16px' },
    whiteSpace: 'nowrap',
    flexShrink: 0 
  }}>
Posts
    
  </Typography>

  <Breadcrumbs 
    aria-label="breadcrumb" 
    separator="›" 
    sx={{ 
      '& .MuiBreadcrumbs-ol': { 
        flexWrap: 'nowrap', 
        alignItems: 'center'
      },
      '& .MuiBreadcrumbs-li': {
        fontSize: { xs: '12px', sm: '13px' },
        whiteSpace: 'nowrap',
        color: 'text.home' 
      },
      '& .MuiBreadcrumbs-separator': {
        margin: '0 4px', 
        color: 'gray'
      }
    }}
  >
  <Link underline="hover" color="text.home" href="/" sx={{fontSize:'13px'}}>
          Home
        </Link>   
          <Typography sx={{ color:"gray",fontSize:'13px' }}>User</Typography>
        <Typography sx={{ color:"gray",fontSize:'13px' }}>Social Profile</Typography>
  </Breadcrumbs>
</SectionOne>
{/*  */}
<Box sx={{  width: '100%', 
  height: 'auto',
  borderRadius: '12px',
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
  marginBottom: '20px'
  }}>
  <Box sx={{ width: '100%',
  height: 'auto',
  position: 'relative',}}>
    <img 
      src='/images/socialImg-1.png' 
      width='100%' 
      alt='banner' 
      style={{ display: 'block', maxHeight: '250px', objectFit: 'cover' }}
    />
  </Box>

  <SecondDiv>
    <SecondImage>
      <img 
        src='/images/socialImg-2.png' 
        alt='profile' 
        style={{ 
          marginTop: '-50px', 
          width: '100px', 
          height: '100px', 
          borderRadius: '12px',
          border: '4px solid white', 
          bgcolor: 'background.paper'
        }} 
      />
      <Typography sx={{ fontWeight: 700, mt: 1 }}>JWT User</Typography>
      <Typography sx={{ fontSize: '12px', color: 'gray', mb: 2 }}>Android Developer</Typography>
    </SecondImage>

    <RightSection>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: { xs: 'center', md: 'flex-end' }, 
        gap: 1.5,
        mb: { xs: 2, md: 0 } 
      }}>
        <Button variant="outlined" sx={{ color: 'rgb(76,150,243)', textTransform: 'none' }}>Message</Button>
        <Button variant="contained" sx={{ background: 'rgb(33,150,243)', textTransform: 'none' }}>
          <RiUserAddLine style={{ marginRight: '7px' }} /> Send request
        </Button>
      </Box>

      <Box sx={{ width: '100%', mt: { xs: 1, md: 'auto' } }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          variant="scrollable" 
  scrollButtons="auto" 
  allowScrollButtonsMobile
          sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: { xs: 'flex-start', md: 'flex-end' }
            }
          }}
        >
          <Tab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><FaRegEnvelope/> Profile</Box>} sx={{ textTransform: 'none', minWidth: 'auto' }} />
          <Tab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><LuUsers/> Followers</Box>} sx={{ textTransform: 'none', minWidth: 'auto' }} />
          <Tab label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TbFriends /> Friends 
              <Chip label="100" size="small" sx={{ ml: 0.5, bgcolor: 'rgb(237,231,246)', color: 'rgb(129,61,183)', height: 20 }} />
            </Box>
          } sx={{ textTransform: 'none', minWidth: 'auto' }} />
          <Tab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><GrGallery/> Gallery</Box>} sx={{ textTransform: 'none', minWidth: 'auto' }} />
          <Tab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><RiUserAddLine/> Request</Box>} sx={{ textTransform: 'none', minWidth: 'auto' }} />
        </Tabs>
      </Box>
    </RightSection>
  </SecondDiv>
</Box>
 <TabsSection>
  {/* Tab 1 */}
<CustomTabPanel value={value} index={0}>
  <Box sx={{ 
    width: '100%', 
    display: 'flex', 
    flexDirection: { xs: 'column', md: 'row' }, 
    justifyContent: 'space-between', 
    gap: { xs: '20px', md: '0px' } 
  }}>
    
    <Box sx={{ width: { xs: '100%', md: '33%' }, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ p: '19px', bgcolor: 'background.paper', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Box sx={{ width: '45px', height: '45px', borderRadius: '6px', background: 'rgb(232,243,252)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PiUsersDuotone style={{ color: 'rgb(30,136,229)', fontSize: '22px' }}/>
            </Box>
            <Box>
              <Typography sx={{ color: 'rgb(30,136,229)', fontWeight: 'bold', fontSize: '18px' }}>239 K</Typography>
              <Typography sx={{ color: 'gray', fontSize: "13px" }}>Friends</Typography>
            </Box>
          </Box>
          <IconButton size="small"><FaAngleRight/></IconButton>
        </Box>
        <Divider/>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Box sx={{ width: '45px', height: '45px', borderRadius: '6px', background: 'rgb(239,234,247)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TiContacts style={{ color: 'rgb(94,53,177)', fontSize: '22px' }}/>
            </Box>
            <Box>
              <Typography sx={{ color: 'rgb(30,136,229)', fontWeight: 'bold', fontSize: '18px' }}>234 K</Typography>
              <Typography sx={{ color: 'gray', fontSize: "13px" }}>Friends</Typography>
            </Box>
          </Box>
          <IconButton size="small"><FaAngleRight/></IconButton>
        </Box>
      </Box>

      <Box sx={{ p: '19px', bgcolor: 'background.paper', borderRadius: "8px" }}>
        <Typography>About</Typography>
        <Typography sx={{ color: 'gray', fontSize: '14px', my: '15px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
        <Divider/>
        <Box sx={{ mt: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <PublicOutlinedIcon style={{ color: 'rgb(125,86,193)' }}/>
            <Typography component="a" href="https://codedthemes.com/" sx={{ fontSize: '13px', color: 'inherit', textDecoration: 'none' }}>https://codedthemes.com/</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <FaInstagram style={{ color: 'rgb(216,67,21)', fontSize: '23px' }}/>
            <Typography component="a" href="#" sx={{ fontSize: '13px', color: 'inherit', textDecoration: 'none' }}>https://www.instagram.com/codedthemes</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <FaFacebookSquare style={{ color: 'rgb(33,150,243)', fontSize: '23px' }}/>
            <Typography component="a" href="#" sx={{ fontSize: '13px', color: 'inherit', textDecoration: 'none' }}>https://www.facebook.com/codedthemes</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <FaLinkedin style={{ color: 'black', fontSize: '23px' }}/>
            <Typography component="a" href="#" sx={{ fontSize: '13px', color: 'inherit', textDecoration: 'none' }}>https://in.linkedin.com/company/codedthemes</Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box sx={{ width: { xs: '100%', md: '65%' }, display: 'flex', flexDirection: 'column', gap: "20px" }}>
      
      <Box sx={{ p: '19px',  bgcolor: 'background.paper', borderRadius: "10px", display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <OutlinedInput placeholder="What's on your mind, Larry?" multiline rows={4} fullWidth sx={{ borderRadius: '10px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '7px', color: 'rgb(123,58,183)' }}>
            <IoMdLink style={{ fontSize: '23px' }} /><Typography>Gallery</Typography>
          </Box>
          <Button variant="contained" sx={{ background: 'rgb(103,58,183)', textTransform: "none" }} startIcon={<IoMdPaper />}>Post</Button>
        </Box>
      </Box>

      <Box sx={{ p: '19px', bgcolor: 'background.paper', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Avatar src="/images/socialImg-2.png" /><Typography sx={{ fontSize: '13px' }}>JWT User</Typography>
          </Box>
          <CiMenuKebab />
        </Box>
        <Typography sx={{ fontSize: '13px', color: 'rgb(93,65,82)' }}>Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex. Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna.</Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button size="small" startIcon={<BiLike />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>0 Likes</Button>
          <Button size="small" startIcon={<LiaCommentSolid />} sx={{ color: 'rgb(103,58,183)', textTransform: 'none' }}>2 Comments</Button>
        </Box>
        <Box sx={{ p: '15px', bgcolor: 'background.com', borderRadius: "10px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Avatar src="/images/socialImg-2.png" sx={{ width: 24, height: 24 }} /><Typography sx={{ fontSize: '13px', fontWeight: 500 }}>John Doe</Typography>
            </Box>
            <CiMenuKebab />
          </Box>
          <Typography sx={{ ml: '34px', fontSize: '13px', color: 'gray' }}>Test</Typography>
          <Box sx={{ ml: '34px', display: 'flex', gap: '15px', mt: 1 }}>
            <Button size="small" startIcon={<BiLike />} sx={{ color: 'gray', textTransform: 'none', fontSize: '12px' }}>1 Likes</Button>
            <Button size="small" startIcon={<MdReply />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none', fontSize: '12px' }}>0 Reply</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: '19px', bgcolor: 'background.paper', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Avatar src="/images/socialImg-2.png" /><Typography sx={{ fontSize: '13px' }}>JWT User</Typography>
          </Box>
          <CiMenuKebab />
        </Box>
        <Typography sx={{ fontSize: '13px', color: 'rgb(93,65,82)' }}>Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex.</Typography>
        <Box sx={{ width: '100%' }}><img src='/images/socialImg-4.png' alt='social4' style={{ width: '100%', borderRadius: '8px' }}/></Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button size="small" startIcon={<BiLike />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>102 Likes</Button>
          <Button size="small" startIcon={<LiaCommentSolid />} sx={{ color: 'rgb(103,58,183)', textTransform: 'none' }}>3 Comments</Button>
        </Box>
        <Box sx={{ p: '15px',bgcolor: 'background.com', borderRadius: "10px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}><Avatar src="/images/socialImg-5.png" sx={{ width: 24, height: 24 }} /><Typography sx={{ fontSize: '13px', fontWeight: 500 }}>John Doe</Typography></Box>
            <CiMenuKebab />
          </Box>
          <Typography sx={{ ml: '34px', fontSize: '13px', color: 'gray' }}>Test</Typography>
          <Box sx={{ ml: '34px', display: 'flex', gap: '15px' }}>
            <Button size="small" startIcon={<BiLike />} sx={{ color: 'gray', textTransform: 'none' }}>1 Likes</Button>
            <Button size="small" startIcon={<MdReply />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>0 Reply</Button>
          </Box>
        </Box>
        <Box sx={{ p: '15px', bgcolor: 'background.com', borderRadius: "10px", ml: { xs: '20px', md: '50px' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}><Avatar src="/images/socialImg-5.png" sx={{ width: 24, height: 24 }} /><Typography sx={{ fontSize: '13px', fontWeight: 500 }}>John Doe</Typography></Box>
            <CiMenuKebab />
          </Box>
          <Typography sx={{ ml: '34px', fontSize: '13px', color: 'gray' }}>Test Reply</Typography>
          <Box sx={{ ml: '34px', display: 'flex', gap: '15px' }}>
            <Button size="small" startIcon={<BiLike />} sx={{ color: 'gray', textTransform: 'none' }}>1 Likes</Button>
            <Button size="small" startIcon={<MdReply />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>0 Reply</Button>
          </Box>
        </Box>
        <Box sx={{ p: '15px',bgcolor: 'background.com', borderRadius: "10px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}><Avatar src="/images/socialImg-6.png" sx={{ width: 24, height: 24 }} /><Typography sx={{ fontSize: '13px', fontWeight: 500 }}>Barney Thea</Typography></Box>
            <CiMenuKebab />
          </Box>
          <Typography sx={{ ml: '34px', fontSize: '13px', color: 'gray' }}>It is a long established fact that a reader will be distracted</Typography>
          <Box sx={{ ml: '34px', display: 'flex', gap: '15px' }}>
            <Button size="small" startIcon={<BiLike />} sx={{ color: 'gray', textTransform: 'none' }}>55 Likes</Button>
            <Button size="small" startIcon={<MdReply />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>0 Reply</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: '19px', bgcolor: 'background.paper', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Avatar src="/images/socialImg-2.png" /><Typography sx={{ fontSize: '13px' }}>JWT User</Typography>
          </Box>
          <CiMenuKebab />
        </Box>
        <Typography sx={{ fontSize: '13px', color: 'rgb(93,65,82)' }}>It is a long established fact that a reader will be distracted.</Typography>
        <Box sx={{ width: '100%', height: { xs: '200px', md: '315px' } }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vyJU9efvUtQ" title="YouTube video" allowFullScreen style={{ border: 'none', borderRadius: '10px' }} />
        </Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button size="small" startIcon={<BiLike />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>540 Likes</Button>
          <Button size="small" startIcon={<LiaCommentSolid />} sx={{ color: 'rgb(103,58,183)', textTransform: 'none' }}>2 Comments</Button>
        </Box>
        <Box sx={{ p: '15px',bgcolor: 'background.com', borderRadius: "10px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}><Avatar src="/images/socialImg-7.png" sx={{ width: 24, height: 24 }} /><Typography sx={{ fontSize: '13px', fontWeight: 500 }}>Maddison Wilber</Typography></Box>
            <CiMenuKebab />
          </Box>
          <Typography sx={{ ml: '34px', fontSize: '13px', color: 'gray' }}>Passages of Lorem Ipsum available, but the majority have suffered alteration.</Typography>
          <Box sx={{ ml: '34px', display: 'flex', gap: '15px', mt: 1 }}>
            <Button size="small" startIcon={<BiLike />} sx={{ color: 'gray', textTransform: 'none' }}>69 Likes</Button>
            <Button size="small" startIcon={<MdReply />} sx={{ color: 'rgb(33,150,243)', textTransform: 'none' }}>1 Reply</Button>
          </Box>
        </Box>
      </Box>

    </Box>
  </Box>
</CustomTabPanel>

{/* Tab 2 */}
<CustomTabPanel value={value} index={1}>
  <Box sx={{
    height: 'auto',
    padding: '19px',
    bgcolor: 'background.paper',
    borderRadius: "10px",
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box',
     width: '100%', overflowX: 'hidden' 
  }}>
    
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Typography fontWeight={600}>Followers</Typography>
      <TextField
        size="small"
        placeholder="Search Followers"
        sx={{width:{xs:'190px',md:'200px'}}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          )
        }}
      />
    </Box>
    
    <Divider sx={{ marginBottom: '20px' }} />

    <Grid container spacing={3} sx={{display:'flex',flexDirection:{xs:'column',sm:'row',md:'row'},justifyContent:{xs:'center',sm:'center',md:'flex-start'}}}>
      {list.map((user) => (
       
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id} sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <Card
            sx={{
              width: '260px',   
              height: '120px',  
              padding: '10px',
              bgcolor: 'background.usercard',
              borderRadius: 2,
              border: "1px solid #eef2f6",
              boxShadow: '2px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box', 
              "&:hover": {
                border: "1px solid #1976d2",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-start' }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Avatar src={user.avatar} alt={user.name} sx={{ width: 35, height: 35 }} />
                <Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.1 }}>
                    {user.name}
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                    📍 {user.city}
                  </Typography>
                </Box>
              </Box>

              <IconButton size="small" sx={{ p: 0 }}>
                <MoreHorizIcon fontSize="small" />
              </IconButton>
            </Box>

            <Button
              fullWidth
              variant={user.followed ? "outlined" : "contained"}
              startIcon={user.followed ? <PersonIcon /> : <PersonAddAltIcon />}
              sx={{
                mt: 1, 
                textTransform: "none",
                borderRadius: 1,
                fontSize: '12px',
                height: '32px', 
                ...(user.followed ? {} : { bgcolor: 'rgb(33,150,243)'})
              }}
            >
              {user.followed ? "Followed" : "Follow Back"}
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</CustomTabPanel>


{/* Tab 3 */}

<CustomTabPanel value={value} index={2}>
  <Box sx={{
    width: '100%', 
    height: 'auto',
    padding: '19px',
    bgcolor: 'background.paper',
    borderRadius: "10px",
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box'
  }}>
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      mb: 2
    }}>
      <Typography fontWeight={600}>Friends</Typography>
      <TextField
        size="small"
        placeholder="Search"
        sx={{width:{xs:'190px',md:'200px'}}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          )
        }}
      />
    </Box>

    <Divider sx={{ marginBottom: '20px' }} />

    <Grid container spacing={3} sx={{display:'flex',flexDirection:{xs:'column',sm:'row',md:'row'},justifyContent:{xs:'center',sm:'center',md:'flex-start'}}}>
      {SecList.map(user => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id} sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <Card
            sx={{
              width: '260px',   
              height: 'auto',   
              minHeight: '100px', 
              padding: '10px',
              bgcolor: 'background.paper',
              borderRadius: 2,
              border: "1px solid #eef2f6",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              "&:hover": {
                border: "1px solid #1976d2",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Avatar src={user.avatar} alt={user.name} />
                <Box>
                  <Typography fontSize={14} fontWeight={600} sx={{ lineHeight: 1.2 }}>
                    {user.name}
                  </Typography>
                  <Typography fontSize={12} color="gray">
                    📍 {user.city}
                  </Typography>
                </Box>
              </Box>

              <IconButton size="small">
                <MoreHorizIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', width: '100%', marginTop: '10px', gap: '10px', height: '35px' }}>
              <Tooltip title="Video Call" placement="top">
                <Button sx={{ 
                  width: '50%', 
                  fontSize: '20px', 
                  color: 'rgb(121,81,191)', 
                  bgcolor: 'background.btn2', 
                  borderRadius: "8px",
                  boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                  minWidth: 0 
                }}>
                  <MdVideoCall />
                </Button>
              </Tooltip>

              <Tooltip title="Message" placement="top">
                <Button sx={{ 
                  width: '50%', 
                  fontSize: '20px', 
                  color: 'rgb(188,223,251)', 
                  bgcolor: 'background.btn2',  
                  borderRadius: "8px",
                  boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                  minWidth: 0
                }}>
                  <MdMessage />
                </Button>
              </Tooltip>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</CustomTabPanel>

{/* Tab 4 */}
<CustomTabPanel value={value} index={3}>
  <Box sx={{
    width: '100%',
    height: 'auto',
    padding: '19px',
    bgcolor: 'background.paper',
    borderRadius: "10px",
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box'
  }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        mb: 2
      }}
    >
      <Typography fontWeight={600}>Gallery</Typography>

      <Button sx={{
        textTransform: "none",
        background: 'rgb(103,58,183)',
        color: 'white',
        width: { xs: 'auto', md: '120px' }, 
        '&:hover': { background: 'rgb(90,50,160)' }
      }}>
        Add Photos
      </Button>
    </Box>

    <Divider sx={{ marginBottom: '20px' }} />

    <Grid container spacing={3} sx={{display:'flex',flexDirection:{xs:'column',sm:'row',md:'row'},justifyContent:{xs:'center',sm:'center',md:'flex-start'}}}>
      {Gallery.map(user => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id} sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <Card
            sx={{
              width: '260px',  
              height: '220px', 
              borderRadius: 6,
              bgcolor: 'background.usercard',
              border: "1px solid #eef2f6",
              boxShadow: '2px',
              overflow: 'hidden', 
              transition: '0.3s',
              "&:hover": {
                border: "1px solid #1976d2",
              },
            }}
          >
            <Box sx={{ width: '100%', height: '150px' }}>
              <img 
                src={user.img} 
                alt={user.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Box>

            <Box sx={{ 
              width: '100%', 
              padding: '10px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              boxSizing: 'border-box' 
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>
                  {user.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'gray' }}>
                  <SlCalender style={{ fontSize: '13px' }} />
                  <Typography sx={{ fontSize: '12px' }}>
                    {user.subtitle}
                  </Typography>
                </Box>
              </Box>

              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</CustomTabPanel>

{/* Tab 5 */}
<CustomTabPanel value={value} index={4}>
  <Box sx={{
    width: '100%',
    height: 'auto',
    padding: '19px',
    bgcolor: 'background.paper',
    borderRadius: "10px",
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box'
  }}>
    <Box sx={{
      display: "flex",
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: "space-between",
      alignItems: { xs: 'flex-start', sm: 'center' },
      gap: 2,
      mb: 2
    }}>
      <Typography fontWeight={600}>Friend Request</Typography>

      <TextField
        size="small"
        placeholder="Search"
        sx={{width:{xs:'190px',md:'200px'}}}
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          )
        }}
      />
    </Box>

    <Divider sx={{ marginBottom: '20px' }} />

    <Grid container spacing={3} sx={{display:'flex',flexDirection:{xs:'column',sm:'row',md:'row'},justifyContent:{xs:'center',sm:'center',md:'flex-start'}}}>
      {SecList.map(user => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id} sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <Card
            sx={{
              width: '260px',   
              minHeight: '100px',
              height: 'auto',   
              padding: '10px',
              borderRadius: 2,
              bgcolor: 'background.usercard',
              border: "1px solid #eef2f6",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              transition: '0.3s',
              "&:hover": {
                border: "1px solid #1976d2",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Avatar src={user.avatar} alt={user.name} />
                <Box>
                  <Typography fontSize={14} fontWeight={600} sx={{ lineHeight: 1.2 }}>
                    {user.name}
                  </Typography>
                  <Typography fontSize={12} color="gray">
                    📍 {user.city}
                  </Typography>
                </Box>
              </Box>

              <IconButton size="small">
                <MoreHorizIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', width: '100%', marginTop: '15px', gap: '10px' }}>
              <Button sx={{ 
                width: '50%', 
                fontSize: '13px', 
                color: 'rgb(33,150,243)', 
                bgcolor: 'background.btn', 
                borderRadius: "8px", 
                textTransform: 'none',
                border: '1px solid #eef2f6',
                '&:hover': { background: '#f0f7ff' }
              }}>
                Confirm
              </Button>

              <Button sx={{ 
                width: '50%', 
                fontSize: '13px', 
                color: 'rgb(244,67,54)', 
                bgcolor: 'background.btn', 
                borderRadius: "8px", 
                textTransform: 'none',
                border: '1px solid #eef2f6',
                '&:hover': { background: '#fff5f5' }
              }}>
                Delete
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</CustomTabPanel>

</TabsSection>




    </Main>
      
    </>
   
  )
};

