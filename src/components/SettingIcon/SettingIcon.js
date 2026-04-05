import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { keyframes } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ImCross } from "react-icons/im";
import { GoSun } from "react-icons/go";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TbColorSwatch } from "react-icons/tb";
import { MdOutlineFormatTextdirectionLToR } from "react-icons/md";



const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
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
export default function FloatingSettings({ mode, toggleTheme}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {!open && (
        <Box
          sx={{
            position: "fixed",
            top: "30%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1301, 
          }}
        >
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              bgcolor: "rgb(124,77,255)",
              color: "#fff",
             width: 45, height: 45, borderTopLeftRadius: 35, borderBottomLeftRadius: 35, borderTopRightRadius: 35, borderBottomRightRadius: 0,
              boxShadow: "0 0 20px rgba(124,77,255,0.7)",
              "&:hover": {
                bgcolor: "rgb(114,103,239)",
              },
            }}
          >
            <SettingsIcon
              sx={{
                animation: `${rotate} 3s linear infinite`,
              }}
            />
          </IconButton>
        </Box>
      )}

      <Drawer
  anchor="right"
  open={open}
  onClose={toggleDrawer(false)}
  sx={{
    zIndex: (theme) => theme.zIndex.modal + 1,
  }}
  ModalProps={{
    BackdropProps: {
      sx: {
        backgroundColor: "rgba(0,0,0,0.8)",
      },
    },
  }}
        PaperProps={{
          sx: {
            width: {xs:'340px',sm:'400px',md:400},
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>

            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography>Theme Customization</Typography>
                <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <Button onClick={toggleTheme} sx={{border:'1px solid red',color:'red',textTransform:'none',fontSize:'14px'}}>Reset</Button>
                <ImCross />

                </Box>
            </Box>
          </List>
          <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
          
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} sx={{bgcolor:"background.paper"}} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={
            <Typography sx={{fontSize:"20px"}}>
              <TbColorSwatch />

            </Typography>
          } {...a11yProps(0)} />
          <Tab label={
            <Typography sx={{fontSize:"25px"}}>
              <MdOutlineFormatTextdirectionLToR />

            </Typography>
          }  {...a11yProps(1)} />
       </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <List>
               <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:'-20px',width:'360px'}}>
                <Typography>Theme Mode</Typography>
                <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
                    <Button onClick={toggleTheme} sx={{border:'1px solid gray',color:'rgb(255,193,7)',textTransform:'none',width:'20px',height:"50px",fontSize:'20px'}}><GoSun /></Button>
                    <Button onClick={toggleTheme} sx={{border:'1px solid gray',color:'white',textTransform:'none',width:'20px',height:"50px",fontSize:'20px',background:'rgb(41,49,79)'}}><DarkModeIcon /></Button>
                    <Button sx={{border:'1px solid gray',color:'rgb(41,49,79)',textTransform:'none',width:'20px',height:"50px",fontSize:'20px'}}><MdOutlineSettingsSystemDaydream /></Button>
               

                </Box>
            </Box>
             
          </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
<Box sx={{width:'100%',height:'50px',border:'1px solid lightgray',borderRadius:'10px', '&:hover': { border:'1px solid #4074f8' }}}>
  <Typography sx={{marginLeft:'20px',marginTop:'10px',fontFamily:'sans-serif'}}>Inter</Typography>
</Box>
<Box sx={{width:'100%',height:'50px',border:'1px solid lightgray',borderRadius:'10px', '&:hover': { border:'1px solid #4074f8' }}}>
  <Typography sx={{marginLeft:'20px',marginTop:'10px',fontFamily:'sans-serif'}}>Poppins</Typography>
</Box>
<Box sx={{width:'100%',height:'50px',border:'1px solid lightgray',borderRadius:'10px', '&:hover': { border:'1px solid #4074f8' }}}>
  <Typography sx={{marginLeft:'20px',marginTop:'10px',fontFamily:'sans-serif'}}>Roboto</Typography>
</Box>

        </Box>
      </CustomTabPanel>
    
    </Box>
    </Box>
      </Drawer>
    </>
  );
}
