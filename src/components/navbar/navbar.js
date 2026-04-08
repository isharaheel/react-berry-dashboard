import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ExploreIcon from '@mui/icons-material/Explore';
import { TbDeviceAnalytics } from "react-icons/tb";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { BiTachometer } from "react-icons/bi";
import { TbUserShare } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { TbUserCheck } from "react-icons/tb";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Avatar, Chip, FormControl, Select, Stack,Switch,
  TextField, } from '@mui/material';
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { MdOutlineStorefront } from "react-icons/md";
import { PiMailboxLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";
import { PiHeadphones } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";


const drawerWidth = 240;
const miniWidth = 60;

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '10px',
  bgcolor: "background.default",
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  height: '50px',
  padding: '0 10px',
  transition: '0.3s',
  width:'800px',
  border:'.5px solid lightgray',
  '&:hover': { border: '1px solid black' },
}));

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  flex: 1,
  height: '100%',
  width:'400px'
}));

const ProfileBar = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  bgcolor: "background.default",
  borderRadius: '24px',
  height: '50px',
  padding: '0 5px',
}));

export default function ResponsiveDrawerNavbar({children }) {
  const [openDrawer, setOpenDrawer] = React.useState(false); 
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = mobileDrawerOpen ? 'hidden' : 'auto';
  }, [mobileDrawerOpen]);
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const [age, setAge] = React.useState(10); 

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { t, i18n } = useTranslation();
 const toggleFullScreen = () => {
  document.fullscreenElement 
    ? document.exitFullscreen() 
    : document.documentElement.requestFullscreen();
};
const [openUsers, setOpenUsers] = React.useState(false);
const [openAccount, setOpenAccount] = React.useState(false);
const [openCards, setOpenCards] = React.useState(false);
const [openList, setOpenList] = React.useState(false);
const [openCustomer, setOpenCustomer] = React.useState(false);
const [openContact, setOpenContact] = React.useState(false);
const [openCommerce, setOpenCommerce] = React.useState(false);
const [openInvoice, setOpenInvoice] = React.useState(false);
const [openPayments, setOpenPayments] = React.useState(false);
const [openDefault, setOpenDefault] = React.useState(false);







  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1300,
          // background: 'white',
          // color: 'black',
          bgcolor: "background.paper",
          color: "text.primary",
          height: '80px',
          justifyContent: 'center',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
  sx={{
    display: { xs: "none", md: "block" },
    bgcolor: "background.paper",
  }}
>
  <img
    src="/images/logo.png"
    alt="Logo"
    style={{
      height: "45px",
      width: "130px",
      marginTop: "-10px",
    }}
  />
</Box>


            <IconButton
              size="large"
              onClick={() => {
                if (window.innerWidth >= 900) {
                  setOpenDrawer(!openDrawer);
                } else {
                  setMobileDrawerOpen(true);
                }
              }}
              sx={{
                color: 'rgb(143,114,201)',
                backgroundColor: 'rgb(237,231,246)',
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                marginLeft:'20px',
                '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'rgb(143,114,201)', backgroundColor: 'rgb(237,231,246)' }}
              onClick={() => setMobileSearchOpen(true)}
            >
              <SearchIcon />
            </IconButton>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexGrow: 1, maxWidth: 400 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: 'gray' }} />
                </SearchIconWrapper>
                <StyledInputBase placeholder={t("Search")} inputProps={{ 'aria-label': 'search' }} />
             <IconButton  sx={{
                color: 'rgb(143,114,201)',
                backgroundColor: 'rgb(237,231,246)',
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                marginLeft:'20px',
                '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}
              >
<TuneIcon/>
              
             </IconButton>

              </Search>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <IconButton  sx={{
                color: 'rgb(143,114,201)',
                backgroundColor: 'rgb(237,231,246)',
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                marginLeft:'20px',
                '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}>
              <OnlinePredictionIcon
               
              />
            </IconButton>
            
      
           

{/*  */}

 <div>
      <Button
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
  disableElevation

      >
        <IconButton  sx={{
                fontSize: '20px',
                // marginLeft:'20px',
                  
    color: open ? 'rgb(227,242,253)' : 'rgb(30,136,229)',
    backgroundColor: open ? 'rgb(30,136,229)' : 'rgb(227,242,253)',
    padding: '6px',
    borderRadius: '7px',
    transition: '0.2s',
    '&:hover': {
      color: 'rgb(227,242,253)',
      backgroundColor: 'rgb(30,136,229)',
    },

              }}>
            <TranslateIcon

/></IconButton>
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
       <MenuItem
   onClick={() => i18n.changeLanguage('en')}
  selected={i18n.language === 'en'}
  sx={{
    fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    English
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px' }} variant="body2">(UK)</Typography>
  </Box>
</MenuItem>

<MenuItem
  onClick={() => i18n.changeLanguage('fr')}
  selected={i18n.language === 'fr'}
  sx={{
    fontWeight: i18n.language === 'fr' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    française
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px'  }} variant="body2">(French)</Typography>
  </Box>
</MenuItem>

<MenuItem
  onClick={() => i18n.changeLanguage('ro')}
  selected={i18n.language === 'ro'}
  sx={{
    fontWeight: i18n.language === 'ro' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    Romana
    <Typography sx={{ color: 'gray', ml: 1 ,fontSize:'13px' }} variant="body2">(Romanian)</Typography>
  </Box>
</MenuItem>

<MenuItem
   onClick={() => i18n.changeLanguage('zh')}
  selected={i18n.language === 'zh'}
  sx={{
    fontWeight: i18n.language === 'zh' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    中国人
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px'  }} variant="body2">(Chinese)</Typography>
  </Box>
</MenuItem>

      </Menu>
    </div>


<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <IconButton  sx={{
                color: popupState.isOpen ? 'rgb(255,248,225)' : 'rgb(255,205,55)',
          backgroundColor: popupState.isOpen ? 'rgb(255,205,55)' : 'rgb(255,248,225)',
         
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                // marginLeft:'20px',
             '&:hover': {
            color: 'rgb(255,248,225)',
            backgroundColor: 'rgb(255,205,55)',
          },
              }}>
        <NotificationsNoneIcon
        {...bindTrigger(popupState)}
       
      />
      </IconButton>
      

      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
         PaperProps={{
    sx: {
      width: "18%",
      height: "800px",
      marginTop:'25px'
    },
  }}
      >

        <MenuItem onClick={popupState.close} sx={{background:'none',marginBottom:'7px'}}>
        <Box sx={{width:'100%',display:'flex',justifyContent:"space-between",height:'auto',alignItems:"center"}}>
         
            <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>All Notifications</Typography>
             <Stack direction="row" spacing={1}>
      <Chip label="01" sx={{background:'rgb(254,192,7)',color:'rgb(255,246,220)'}}/>
    </Stack>
    <Typography sx={{textDecoration:'underline',color:'rgb(30,135,228)',fontSize:'13px'}}>Mark as all read</Typography>

        </Box>
        
        </MenuItem>
        <MenuItem sx={{background:'none',marginBottom:'7px'}}>
     
       <Box sx={{ width: '100%' }}>
  <FormControl fullWidth>
    <Select
      fullWidth
      value={age}
      onChange={handleChange}
    >
      <MenuItem value={10}>All Notifications</MenuItem>
      <MenuItem value={20}>New</MenuItem>
      <MenuItem value={30}>Unread</MenuItem>
      <MenuItem value={40}>Other</MenuItem>
    </Select>
  </FormControl>

 
</Box>

        
        </MenuItem>
        <Divider mb={0}/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>It is a long established fact that a <br/> reader will be distracted
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Unread" sx={{background:'rgb(251,230,230)',color:'red'}}/>
      <Chip label="New"  sx={{background:'rgb(255,248,225)',color:'rgb(255,207,61)'}}/>
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'rgb(185,246,202)',textAlign:'center',marginLeft:'20px',fontSize:'20px',color:'rgb(38,210,108)',padding:'10px'}}><MdOutlineStorefront/>
</Box>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>Store Verification Done</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'12px'}}>We have successfully received your <br/> request.
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Unread" sx={{background:'rgb(251,230,230)',color:'red'}}/>
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'rgb(225,240,251)',textAlign:'center',marginLeft:'20px',fontSize:'20px',color:'rgb(30,136,229)',padding:'10px'}}><PiMailboxLight />

</Box>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>Check Your Mail.</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'12px'}}>All done! Now check your inbox as <br/> you're in for a sweet treat!
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Button variant="contained">Mail <FaRegPaperPlane /></Button>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'15px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>Uploaded two file on  21 Jan 2020
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'55px'}}>
             <Box sx={{width:'220px',height:"60px",background:'rgb(237,231,246)',display:'flex',alignItems:'center'}}>
              <Typography sx={{fontSize:'25px',marginLeft:'30px'}}><CiImageOn/>
</Typography>
<Typography sx={{fontWeight:'bold',marginLeft:'10px'}}>demo.jpg</Typography>

             </Box>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
         <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>It is a long established fact that a <br/> reader will be distracted
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Confirmation of Account" sx={{background:'rgb(220,250,228)',color:'green'}}/>
      
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <Button
                variant="text"
                sx={{
                  color: "#1A73E8",
                  textTransform: "none",
                  display: "flex",
                  mx: "auto",
                  marginTop:'10px'
                }}
              >
                View All
              </Button>
        
      </Menu>
    </React.Fragment>
  )}
</PopupState>


            <IconButton onClick={toggleFullScreen}  sx={{
                color: 'rgb(30,136,229)',
      backgroundColor: 'rgb(227,242,253)',
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                // marginLeft:'20px',
                      '&:hover': { color: 'rgb(227,242,253)', backgroundColor: 'rgb(30,136,229)' },

              }}>
  <FullscreenExitIcon/>
</IconButton>

<PopupState variant="popover" popupId="notification-popover">
  {(popupState) => (
    <>
      <ProfileBar sx={{ bgcolor: "background.profile",}}>
        <IconButton {...bindTrigger(popupState)}>
          <img src="/images/profile.svg" alt="Profile" width={30} />
        </IconButton>

        <IconButton
          {...bindTrigger(popupState)}
      
        >
          <SettingsIcon sx={{color:'rgb(30,136,229)'}}/>
        </IconButton>
      </ProfileBar>

      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            width: "auto",
            height: "auto",
            mt: "25px",
          },
        }}
      >
          <Box sx={{ width: 340, p: 2 }}>
      {/* Header */}
      <Typography fontWeight={600}>Good Morning, JWT User</Typography>
      <Typography fontSize={13} color="gray">
        Project Admin
      </Typography>

      {/* Search */}
      <TextField
        fullWidth
        size="small"
        placeholder="Search profile options"
        sx={{ mt: 2 }}
        InputProps={{
          startAdornment: (
            <IoSearchOutline style={{ marginRight: 8, color: "gray" }} />
          ),
        }}
      />

      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          background: "#FFF6D8",
          borderRadius: 2,
          p: 2,
          position: "relative",
        }}
      >
        <Typography fontWeight={600}>Upgrade your plan</Typography>
        <Typography fontSize={13} color="gray" mb={1}>
          70% discount for 1 years subscriptions.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "#FFE066",
            color: "#000",
            boxShadow: "none",
            "&:hover": { background: "#FFD84D" },
          }}
        >
          Go Premium
        </Button>
      </Box>

      <Box
        sx={{
          background: "#E3F2FD",
          borderRadius: 2,
          p: 2,
          mt: 2,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize={14}>Start DND Mode</Typography>
          <Switch defaultChecked />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize={14}>Allow Notifications</Typography>
          <Switch />
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Menu Items */}
      <Box component={Link} to='/user/account/profile1' display="flex" alignItems="center" gap={1.5} mb={1.5} sx={{textDecoration:'none',color:'text.primary'}}>
        <MdOutlineSettings />
        <Typography fontSize={14}>Account settings</Typography>
      </Box>

      <Box
      component={Link}
      to='/user/social-profile'
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1.5}
        sx={{textDecoration:'none',color:'text.primary'}}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          <HiOutlineUser />
          <Typography fontSize={14}>Social Profile</Typography>
        </Box>
        <Chip
          label="02"
          size="small"
          sx={{ background: "#FFE066", fontWeight: 600 }}
        />
      </Box>

      <Box color='text.primary' display="flex" alignItems="center" gap={1.5} component={Link} to='/LoginPage'>
        <FiLogOut />
        <Typography fontSize={14}>Logout</Typography>
      </Box>
    </Box>
      </Menu>
    </>
  )}
</PopupState>




            {/*  */}
          </Box>
        </Toolbar>
      </AppBar>

      <Box

        sx={{
          position:'fixed',
          width: openDrawer ? drawerWidth : miniWidth,
          transition: 'width 0.3s',
          flexShrink: 0,
          mt: '70px',
          height: 'calc(100vh - 70px)',
          bgcolor: "background.paper",
          color:"text.primary",
          overflowX: 'hidden',
          display: { xs: 'none', md: 'block' },
        }}
      >
      
        <List sx={{ pt: 2 }}>
          <ListItem disablePadding sx={{color:'text.primary' }}>
  <ListItemText
    primary={t("Dashboard")}
    sx={{
      opacity: openDrawer ? 1 : 0,
      ml: openDrawer ? 1 : 0,
      display: openDrawer ? 'block' : 'none', 
      transition: 'opacity 0.3s, margin 0.3s',
    }}
    primaryTypographyProps={{
      component: 'h4',
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    component={Link}
    to="/dashboard/default"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,
    }}
  >
    <Box
      sx={{
       color:'text.primary',
        '&:hover': { color: 'purple' },
      }}
    >
      <BiTachometer style={{ fontSize: '20px' }} />
    </Box>
    <ListItemText
      primary={t("Default")}
      sx={{
        opacity: openDrawer ? 1 : 0,
        ml: openDrawer ? 1 : 0,
        display: openDrawer ? 'block' : 'none', 
        transition: 'opacity 0.3s, margin 0.3s',
       color:'text.primary',
        fontSize: '10px',
      }}
    />
  </ListItemButton>
</ListItem>


          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/analytics"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': {color: 'purple'},
                }}
              >
                <TbDeviceAnalytics  style={{fontSize:'20px'}}/>
              </Box>
              <ListItemText
                primary={t("Analytics")}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 1 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/invoice"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
               <DescriptionOutlinedIcon style={{fontSize:'20px'}}/>

              </Box>
              <ListItemText
                primary={t("Invoice")}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 1 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/crm"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <PublicOutlinedIcon style={{fontSize:'20px'}}/>
             


              </Box>
              <ListItemText
                primary={t("CRM")}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 1 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <MenuOutlinedIcon />
             


              </Box>
              <ListItemText
                primary={t("Blogs")}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 1 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
<Divider
  sx={{
    opacity: openDrawer ? 1 : 0,
    ml: openDrawer ? 1 : 0,
    display: openDrawer ? 'block' : 'none', // hide completely when closed
    transition: 'opacity 0.3s, margin 0.3s',
    width: '90%',
      height: openDrawer ? '1px' : 0,      // collapse height when closed
    margin: openDrawer ? '0px 0' : 0, 
      // display: openDrawer ? 'block' : 'none',
  //  

  }}
/>


          <List sx={{ pt: 2 }}>
        <ListItem disablePadding sx={{color:'text.primary' }}>
  <ListItemText
    primary={t("Applications")}
    sx={{
      opacity: openDrawer ? 1 : 0,
      ml: openDrawer ? 1 : 0,
      display: openDrawer ? 'block' : 'none', 
      transition: 'opacity 0.3s, margin 0.3s',
    }}
    primaryTypographyProps={{
      component: 'h4',
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenUsers(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      // Highlight when open
      backgroundColor: openUsers ? 'rgb(237,231,246)' : 'transparent',
      color: openUsers ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <TbUserCheck style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{openDrawer ? 'Users' : ''}</span> 
          {openDrawer && (
            <FaAngleDown
              style={{
                transform: openUsers ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>


{/*  */}
{openUsers && openDrawer && (
  <>
  <ListItem disablePadding sx={{ pl: 4 }}>
    <ListItemButton
      component={Link}
      to="/user/social-profile"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Social Profile")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  {/* //  */}

<ListItem disablePadding sx={{ pl: 4 }}>
  <ListItemButton
    onClick={() => setOpenAccount(prev => !prev)}
    sx={{
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '8px',

      backgroundColor: openAccount ? 'rgb(237,231,246)' : 'transparent',
      color: openAccount ? 'rgb(136,70,177)' : 'text.primary',
      transition: 'background-color 0.3s',

      '&:hover': {
        background: 'rgb(237,231,246)',
        width: '50%', 
      },
    }}
  >
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Account Profile</span>
          <FaAngleDown
            style={{
              transform: openAccount ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </Box>
      }
      primaryTypographyProps={{
        fontSize: '14px',
        fontWeight: 500,
      }}
    />
  </ListItemButton>
</ListItem>
{/*  */}
{openUsers && openDrawer && openAccount && (
  <>
     <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/account/profile1"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Profile 01")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

    <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/account/profile2"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Profile 02")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
   <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/account/profile3"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Profile 03")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  </>
)}
{/*  */}
<ListItem disablePadding sx={{ pl: 4 }}>
  <ListItemButton
    onClick={() => setOpenCards(prev => !prev)}
    sx={{
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '8px',

      backgroundColor: openCards ? 'rgb(237,231,246)' : 'transparent',
      color: openCards ? 'rgb(136,70,177)' : 'text.primary',
      transition: 'background-color 0.3s',

      '&:hover': {
        background: 'rgb(237,231,246)',
        width: '50%', 
      },
    }}
  >
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Cards</span>
          <FaAngleDown
            style={{
              transform: openCards ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </Box>
      }
      primaryTypographyProps={{
        fontSize: '14px',
        fontWeight: 500,
      }}
    />
  </ListItemButton>
</ListItem>
{/*  */}
{openUsers && openDrawer && openCards && (
<>

<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/cards/card1"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Style 01")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

{/*  */}


<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/cards/card2"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Style 02")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  {/*  */}


<ListItem disablePadding sx={{ pl: 6}}>
    <ListItemButton
      component={Link}
      to="/user/cards/card3"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Style 03")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
</>
)}
{/*  */}
<ListItem disablePadding sx={{ pl: 4 }}>
  <ListItemButton
    onClick={() => setOpenList(prev => !prev)}
    sx={{
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '8px',

      backgroundColor: openList ? 'rgb(237,231,246)' : 'transparent',
      color: openList ? 'rgb(136,70,177)' : 'text.primary',
      transition: 'background-color 0.3s',

      '&:hover': {
        background: 'rgb(237,231,246)',
        width: '50%', 
      },
    }}
  >
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <span style={{fontWeight:'bolder',fontSize:'20px'}}>.</span> */}
          <span>List</span>
          <FaAngleDown
            style={{
              transform: openCards ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </Box>
      }
      primaryTypographyProps={{
        fontSize: '14px',
        fontWeight: 500,
      }}
    />
  </ListItemButton>
</ListItem>
{openUsers && openDrawer && openList && (
<>

<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/list/list1"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Style 01")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

{/*  */}


<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/user/list/list2"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Style 02")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>


</>

)}
</>
)}

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenCustomer(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      backgroundColor: openCustomer ? 'rgb(237,231,246)' : 'transparent',
      color: openCustomer ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <PiHeadphones style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{openDrawer ? 'Customer' : ''}</span>
          {openDrawer && (
            <FaAngleDown
              style={{
                transform: openCustomer ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>

{openCustomer && openDrawer && (
<>
<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/custom-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Customer List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/order-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Order List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/create-invoice"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Create Invoice")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/product"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Products")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/product-review"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product Review")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

</>

)}


{/*  */}


{/* <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/chat"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': {color: 'purple'},
                }}
              >
                <PiChats style={{fontSize:'20px'}}/>
              </Box>
              <ListItemText
                primary="Chat"
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 1 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  fontWeight: 500,
                  fontSize:'15px'
                }}
              />
            </ListItemButton>
</ListItem> */}



{/*  */}
<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)'}}}>
  <ListItemButton
    onClick={() => setOpenContact(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      backgroundColor: openContact ? 'rgb(237,231,246)' : 'transparent',
      color: openContact ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <RiContactsBookLine style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{openDrawer ? 'Contacts' : ''}</span> 
          {openDrawer && (
            <FaAngleDown
              style={{
                transform: openContact ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>
{openContact && openDrawer && (
  <>
  
<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/contact/contact-cards"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Cards")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

{/*  */}


<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/contact/contact-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  
  </>
)}
{/*  */}
<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)'}}}>
  <ListItemButton
    onClick={() => setOpenCommerce(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      backgroundColor: openCommerce ? 'rgb(237,231,246)' : 'transparent',
      color: openCommerce ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <CiShoppingBasket style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{openDrawer ? 'E-commerce' : ''}</span> 
          {openDrawer && (
            <FaAngleDown
              style={{
                transform: openContact ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>
{openCommerce && openDrawer && (
<>

<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/products"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Products")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/product-details/:id"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product Details")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/product-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/checkout"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Checkout")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>


</>


)}
{/*  */}

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenInvoice(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      backgroundColor: openInvoice ? 'rgb(237,231,246)' : 'transparent',
      color: openInvoice ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <DescriptionOutlinedIcon style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{openDrawer ? 'Invoice' : ''}</span> 
          {openDrawer && (
            <FaAngleDown
              style={{
                transform: openInvoice ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>


{/*  */}
{openInvoice && openDrawer && (
  <>


  {/* //  */}

<ListItem disablePadding sx={{ pl: 4 }}>
  <ListItemButton
    onClick={() => setOpenPayments(prev => !prev)}
    sx={{
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '8px',

      backgroundColor: openPayments ? 'rgb(237,231,246)' : 'transparent',
      color: openPayments ? 'rgb(136,70,177)' : 'text.primary',
      transition: 'background-color 0.3s',

      //color:'text.primary',
      '&:hover': {
        background: 'rgb(237,231,246)',
        width: '50%',
      },
    }}
  >
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <span style={{fontWeight:'bolder',fontSize:'20px'}}>.</span> */}
          <span>Payments</span>
          <FaAngleDown
            style={{
              transform: openPayments ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </Box>
      }
      primaryTypographyProps={{
        fontSize: '14px',
        fontWeight: 500,
      }}
    />
  </ListItemButton>
</ListItem>
{/*  */}
{openInvoice && openDrawer && openPayments && (
  <>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-create"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Create")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-details"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Details")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  </>
)}
{/*  */}

</>
)}

{/*  */}


        </List>
       
      </Box>
      
      {/*  */}
      
      
      

      {mobileSearchOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1400,
            p: 1,
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            boxShadow: 1,
          }}
        >
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'gray' }} />
            </SearchIconWrapper>
            <StyledInputBase autoFocus placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
            <TuneIcon
              sx={{
                color: 'rgb(143,114,201)',
                backgroundColor: 'rgb(237,231,246)',
                padding: '6px',
                borderRadius: '7px',
                cursor: 'pointer',
                '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}
            />
          </Search>
          <IconButton onClick={() => setMobileSearchOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {mobileDrawerOpen && (
        <Box
          sx={{
            position: 'fixed',
    top: 0,
    left: 0,
    width: '240px',
    height: '100vh',        
    bgcolor: 'background.paper',
    zIndex: 1400,
    color: "text.primary",
    p: 2,
    boxShadow: 3,
    overflowX: 'hidden',
    // border: '1px solid red'
          }}
        >
        {/*  */}
 <List sx={{ pt: 2 }}>
          <ListItem disablePadding sx={{color:'text.primary' }}>
  <ListItemText
    primary={t("Dashboard")}
    sx={{
      opacity:1 ,
      ml:  1,
      display:  'block' , 
      transition: 'opacity 0.3s, margin 0.3s',
    }}
    primaryTypographyProps={{
      component: 'h4',
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    component={Link}
    to="/dashboard/default"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      px: 2,
      gap: 1,
    }}
  >
    <Box
      sx={{
       color:'text.primary',
        '&:hover': { color: 'purple' },
      }}
    >
      <BiTachometer style={{ fontSize: '20px' }} />
    </Box>
    <ListItemText
      primary={t("Default")}
      sx={{
        opacity:1,
        ml:  1,
        display:  'block', 
        transition: 'opacity 0.3s, margin 0.3s',
       color:'text.primary',
        fontSize: '10px',
      }}
    />
  </ListItemButton>
</ListItem>


          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/analytics"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:  'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': {color: 'purple'},
                }}
              >
                <TbDeviceAnalytics  style={{fontSize:'20px'}}/>
              </Box>
              <ListItemText
                primary={t("Analytics")}
                sx={{
                  opacity: 1,
                  ml:1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/invoice"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
               <DescriptionOutlinedIcon style={{fontSize:'20px'}}/>

              </Box>
              <ListItemText
                primary={t("Invoice")}
                sx={{
                  opacity:1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/crm"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <PublicOutlinedIcon style={{fontSize:'20px'}}/>
             


              </Box>
              <ListItemText
                primary={t("CRM")}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <MenuOutlinedIcon />
             


              </Box>
              <ListItemText
                primary={t("Blogs")}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
<Divider
  sx={{
    opacity:  1 ,
    ml:  1 ,
    display:  'block' , // hide completely when closed
    transition: 'opacity 0.3s, margin 0.3s',
    width: '90%',
      height:  '1px' ,      // collapse height when closed
    margin:  '0px 0' , 
      // display: openDrawer ? 'block' : 'none',
  //  

  }}
/>


          <List sx={{ pt: 2 }}>
        <ListItem disablePadding sx={{color:'text.primary' }}>
  <ListItemText
    primary={t("Applications")}
    sx={{
      opacity:  1 ,
      ml: 1 ,
      display: 'block' , // <-- hide completely when closed
      transition: 'opacity 0.3s, margin 0.3s',
    }}
    primaryTypographyProps={{
      component: 'h4',
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenUsers(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      px: 2,
      gap: 1,
      backgroundColor: openUsers ? 'rgb(237,231,246)' : 'transparent',
      color: openUsers ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box>
      <TbUserCheck style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '16px' }}>{(openDrawer || mobileDrawerOpen) ? 'Users' : ''}</span>
          {(openDrawer || mobileDrawerOpen) &&(
            <FaAngleDown
              style={{
                transform: openUsers ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize: '12px',
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>

{openUsers && (openDrawer || mobileDrawerOpen) &&  (
  <>
    {/* Social Profile */}
    <ListItem disablePadding sx={{ pl: 4 }}>
      <ListItemButton
        component={Link}
        to="/user/social-profile"
        sx={{
          py: 0.5,
          color: 'text.primary',
          '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' },
        }}
      >
<ListItemText
          primary={t(".Social Profile")}
          sx={{ fontSize: '14px', fontWeight: 500 }}
        />
      </ListItemButton>
    </ListItem>

    {/* Account Profile */}
    <ListItem disablePadding sx={{ pl: 4 }}>
      <ListItemButton
        onClick={() => setOpenAccount(prev => !prev)}
        sx={{
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: openAccount ? 'rgb(237,231,246)' : 'transparent',
          color: openAccount ? 'rgb(136,70,177)' : 'text.primary',
          transition: 'background-color 0.3s',
          '&:hover': { background: 'rgb(237,231,246)' },
        }}
      >
        <ListItemText
          primary={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Account Profile</span>
              <FaAngleDown
                style={{
                  transform: openAccount ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </Box>
          }
         sx={{ fontSize: '14px', fontWeight: 500 }}
        />
      </ListItemButton>
    </ListItem>

    {openAccount && (
      <>
        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/account/profile1"
            sx={{
              py: 0.5,
              color: 'text.primary',
              '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' },
            }}
          >
            <ListItemText
              primary={t(".Profile 01")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/account/profile2"
            sx={{
              py: 0.5,
              color: 'text.primary',
              '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' },
            }}
          >
            <ListItemText
              primary={t(".Profile 02")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/account/profile3"
            sx={{
              py: 0.5,
              color: 'text.primary',
              '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' },
            }}
          >
            <ListItemText
              primary={t(".Profile 03")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>
      </>
    )}

    {/* Cards */}
    <ListItem disablePadding sx={{ pl: 4 }}>
      <ListItemButton
        onClick={() => setOpenCards(prev => !prev)}
        sx={{
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: openCards ? 'rgb(237,231,246)' : 'transparent',
          color: openCards ? 'rgb(136,70,177)' : 'text.primary',
          transition: 'background-color 0.3s',
          '&:hover': { background: 'rgb(237,231,246)' },
        }}
      >
        <ListItemText
          primary={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Cards</span>
              <FaAngleDown
                style={{
                  transform: openCards ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </Box>
          }
          primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
        />
      </ListItemButton>
    </ListItem>

    {openCards && (
      <>
        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/cards/card1"
            sx={{ py: 0.5, color: 'text.primary', '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' } }}
          >
            <ListItemText
              primary={t(".Style 01")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/cards/card2"
            sx={{ py: 0.5, color: 'text.primary', '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' } }}
          >
            <ListItemText
              primary={t(".Style 02")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/cards/card3"
            sx={{ py: 0.5, color: 'text.primary', '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' } }}
          >
            <ListItemText
              primary={t(".Style 03")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>
      </>
    )}

    {/* List */}
    <ListItem disablePadding sx={{ pl: 4 }}>
      <ListItemButton
        onClick={() => setOpenList(prev => !prev)}
        sx={{
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: openList ? 'rgb(237,231,246)' : 'transparent',
          color: openList ? 'rgb(136,70,177)' : 'text.primary',
          transition: 'background-color 0.3s',
          '&:hover': { background: 'rgb(237,231,246)' },
        }}
      >
        <ListItemText
          primary={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>List</span>
              <FaAngleDown
                style={{
                  transform: openList ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </Box>
          }
          primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
        />
      </ListItemButton>
    </ListItem>

    {openList && (
      <>
        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/list/list1"
            sx={{ py: 0.5, color: 'text.primary', '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' } }}
          >
            <ListItemText
              primary={t(".Style 01")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 6 }}>
          <ListItemButton
            component={Link}
            to="/user/list/list2"
            sx={{ py: 0.5, color: 'text.primary', '&:hover': { background: 'rgb(237,231,246)', borderRadius: '8px' } }}
          >
            <ListItemText
              primary={t(".Style 02")}
              primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
            />
          </ListItemButton>
        </ListItem>
      </>
    )}
  </>
)}


<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenCustomer(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,

      // Highlight when open
      backgroundColor: openCustomer ? 'rgb(237,231,246)' : 'transparent',
      color: openCustomer ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <PiHeadphones style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{(openDrawer || mobileDrawerOpen) ? 'Customer' : ''}</span> {/* hide text when collapsed */}
          {(openDrawer || mobileDrawerOpen) &&(
            <FaAngleDown
              style={{
                transform: openCustomer ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>

{openCustomer && (openDrawer || mobileDrawerOpen) && (
<>
<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/custom-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Customer List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/order-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Order List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/create-invoice"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Create Invoice")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  {/* <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/order-details"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Order Details")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem> */}
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/product"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Products")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/customer/product-review"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product Review")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

</>

)}


{/*  */}


{/* <ListItem disablePadding sx={{ mb: 1 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
              component={Link}
              to="/chat"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': {color: 'purple'},
                }}
              >
                <PiChats style={{fontSize:'20px'}}/>
              </Box>
              <ListItemText
                primary="Chat"
                sx={{
                  opacity: 1,
                  ml:1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  fontWeight: 500,
                  fontSize:'15px'
                }}
              />
            </ListItemButton>
</ListItem> */}


{/*  */}
<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)'}}}>
  <ListItemButton
    onClick={() => setOpenContact(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      px: 2,
      gap: 1,

      backgroundColor: openContact ? 'rgb(237,231,246)' : 'transparent',
      color: openContact ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <RiContactsBookLine style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{(openDrawer || mobileDrawerOpen) ? 'Contacts' : ''}</span> {/* hide text when collapsed */}
          {(openDrawer || mobileDrawerOpen) &&(
            <FaAngleDown
              style={{
                transform: openContact ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>
{openContact && (openDrawer || mobileDrawerOpen) &&(
  <>
  
<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/contact/contact-cards"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Cards")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

{/*  */}


<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/contact/contact-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  
  </>
)}
{/*  */}
<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)'}}}>
  <ListItemButton
    onClick={() => setOpenCommerce(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'flex-start' ,
      px: 2,
      gap: 1,

      // Highlight when open
      backgroundColor: openCommerce ? 'rgb(237,231,246)' : 'transparent',
      color: openCommerce ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <CiShoppingBasket style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{(openDrawer || mobileDrawerOpen) ?'E-commerce' : ''}</span> {/* hide text when collapsed */}
          {(openDrawer || mobileDrawerOpen) &&(
            <FaAngleDown
              style={{
                transform: openContact ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>
{openCommerce && (openDrawer || mobileDrawerOpen) && (
<>

<ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/products"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Products")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/product-details/:id"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product Details")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/product-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Product List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/commerce/checkout"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Checkout")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>


</>


)}
{/*  */}

<ListItem disablePadding sx={{ mb: 1, '&:hover': { background: 'rgb(237,231,246)' } }}>
  <ListItemButton
    onClick={() => setOpenInvoice(prev => !prev)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'flex-start',
      px: 2,
      gap: 1,

      // Highlight when open
      backgroundColor: openInvoice ? 'rgb(237,231,246)' : 'transparent',
      color: openInvoice ? 'rgb(136,70,177)' : 'text.primary',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
    }}
  >
    <Box >
      <DescriptionOutlinedIcon style={{ fontSize: '20px' }} />
    </Box>

    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{fontSize:'16px'}}>{(openDrawer || mobileDrawerOpen) ?'Invoice' : ''}</span> {/* hide text when collapsed */}
          {(openDrawer || mobileDrawerOpen) &&(
            <FaAngleDown
              style={{
                transform: openInvoice ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize:'12px'
              }}
            />
          )}
        </Box>
      }
    />
  </ListItemButton>
</ListItem>


{/*  */}
{openInvoice && (openDrawer || mobileDrawerOpen) &&(
  <>


  {/* //  */}

<ListItem disablePadding sx={{ pl: 4 }}>
  <ListItemButton
    onClick={() => setOpenPayments(prev => !prev)}
    sx={{
      py: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '8px',

      // Highlight when open
      backgroundColor: openPayments ? 'rgb(237,231,246)' : 'transparent',
      color: openPayments ? 'rgb(136,70,177)' : 'text.primary',
      transition: 'background-color 0.3s',

      //color:'text.primary',
      '&:hover': {
        background: 'rgb(237,231,246)',
        width: '50%', // optional
      },
    }}
  >
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <span style={{fontWeight:'bolder',fontSize:'20px'}}>.</span> */}
          <span>Payments</span>
          <FaAngleDown
            style={{
              transform: openPayments ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </Box>
      }
      primaryTypographyProps={{
        fontSize: '14px',
        fontWeight: 500,
      }}
    />
  </ListItemButton>
</ListItem>
{/*  */}
{openInvoice && openPayments && (openDrawer || mobileDrawerOpen) && (
  <>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-create"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".Create")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-list"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(".List")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem disablePadding sx={{ pl: 6 }}>
    <ListItemButton
      component={Link}
      to="/apps-invoice/payments/payment-details"
      sx={{
        py: 0.5,
       color:'text.primary',
        '&:hover': {
          background: 'rgb(237,231,246)',
          width:'50%',
          borderRadius:'8px'
        },
      }}
    >
      <ListItemText
        primary={t(". Details")}
        primaryTypographyProps={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
  </>
)}
{/*  */}

</>
)}

{/*  */}


        </List>

{/*  */}
        </Box>
      )}

      {mobileDrawerOpen && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1300,
          }}
          onClick={() => setMobileDrawerOpen(false)}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          pb:3,
          // height:'1200px',
          // mt: '70px',
          ml: { xs: 0, md: openDrawer ? `${drawerWidth}px` : `${miniWidth}px` },
          transition: 'margin 0.3s',
  bgcolor: "background.default",
           mt: '80px',
    height: 'auto',
    overflow: 'hidden', 
        }}
      >
        
        {children}
        
      </Box>
  
    </Box>
  );
}
