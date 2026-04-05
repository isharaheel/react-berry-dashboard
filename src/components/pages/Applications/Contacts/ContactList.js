import { Box, styled, Tooltip } from "@mui/material"
import React, { useState } from "react"
import {
  Button, Divider, InputAdornment, TextField, Typography,
   Card, CardContent, Avatar, IconButton, Grid,
  useTheme
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { IoIosCall } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { IoCloseCircle } from "react-icons/io5";
// 
const ITEM_HEIGHT = 2;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Work",
  "Personal"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const allUsers = {
  A: [
    { id: 1, name: "Alene", role: "Sr. Customer Manager", avatar: "/images/socialImg-5.png" },
    { id: 2, name: "Agilulf Fuxg", role: "Specialist", avatar: "/images/follow-2.png" },
     {
    id: 3,
    name: "Adaline Bergfalks",
    role: "Shaper",
    avatar: "/images/follow-1.png",
  },
  ],
  K: [{ id: 4, name: "Keefe", role: "Operations", avatar: "/images/follow-3.png" }],

  
L: [
  {
    id: 5,
    name: "Lazaro",
    role: "Resource Investigator",
    avatar: "/images/socialImg-6.png",
  },
  
],
H: [
  {
    id: 6,
    name: "Hazle",
    role: "Teamworker",
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 7,
    name: "Herman Essertg",
    role: "Co-ordinator",
    avatar: "/images/follow-6.png",
  },
  
],
W: [
  {
    id: 8,
    name: "Wilhelmine Durrg",
    role: "Monitor Evaluator",
    avatar: "/images/follow-1.png",
  },
  
],
M:[
  {
    id: 9,
    name: "Midas",
    role: "Leader",
    avatar: "/images/socialImg-5.png",
  },
  

  {
    id: 11,
    name: "Uranus",
    role: "Facilitator",
    avatar: "/images/socialImg-6.png",
  },
  ]

  // 
};

export const Main = styled('div')({
  width: '100%',
  maxWidth: '1200px', 
  margin: 'auto',
  padding: '20px',
  boxSizing: 'border-box',
});



export default function ContactList(params) {
  const [drawerOpen, setDrawerOpen] = useState(false);
     const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  return( 

  <Main>
      <Box sx={{ 
        position: 'relative',
          width: '100%', 
          maxWidth: '1200px', 
          margin: 'auto',
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          bgcolor: 'background.paper',
      }}>
        
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: drawerOpen ? 0 : '-430px',
          width: '250px',
          height: 'auto',
          bgcolor: 'rgb(248,250,252)',
          boxShadow: '-5px 0px 15px rgba(0,0,0,0.05)',
          zIndex: 100,
          transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          p: 3,
          borderLeft: '1px solid #eee'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Avatar/>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <Button variant="outline" sx={{textTransform:'none',border:'1px solid rgb(30,136,229)',width:'70px',fontSize:'12px',height:"30px",color:'rgb(30,136,229)'}}>Upload</Button>
            <Typography fontSize={12}>Image size should <br/> be 125kb Max.</Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)}><IoCloseCircle style={{color:'gray'}}/></IconButton>
            
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" size="small" fullWidth />
            <TextField label="Company" size="small" fullWidth />
            <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
            <TextField label="Job Title" size="small" fullWidth />
            {/*  */}
 <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>

            <TextField label="Email" size="small" fullWidth />
            <TextField label="Phone Number" size="small" fullWidth />
            <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>

             <TextField
          sx={{width:"100%"}}
          id="outlined-multiline-flexible"
          label="Bio"
          multiline
          rows={4}
        
        />


            <Box sx={{width:'100%',display:'flex',gap:'10px'}}>
              <Button variant="contained" size="small" sx={{ mt: 2, bgcolor: 'rgb(30,136,229)', textTransform: 'none',width:'50%' }}>
              Save
            </Button>
            <Button variant="contained" size="small" sx={{ mt: 2, bgcolor: 'rgb(30,136,229)', textTransform: 'none',width:'50%' }}>
              Cancel
            </Button>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontSize: '18px', fontWeight: 600, mt: "20px", ml: '20px' }}>
          Contact List
        </Typography>
        <Divider sx={{ mt: '20px', mb: "20px" }} />

        <Box sx={{ width: '95%', margin: 'auto' }}>
          
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', mb: "20px" }}>
            <TextField
              fullWidth
              sx={{ width: { xs: '95%', sm: '600px',md:'88%' } }}
              placeholder="Search Content"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch size={18} color="gray" />
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              onClick={() => setDrawerOpen(true)}
              size="large" 
              sx={{ background: "rgb(30,136,229)", color: 'white', textTransform: 'none', width:{ xs: '95%', sm: '100px' },
              "&:hover": { bgcolor: "#1565c0" },
           }}
            >
              + Add
            </Button>
          </Box>

          {Object.keys(allUsers).map((letter) => (
            <Box key={letter} sx={{ mb: 4}}>
              <Typography sx={{ fontSize: "18px", color: 'rgb(30,136,229)', fontWeight: 600 }}>
                {letter}
              </Typography>
              <Divider sx={{ mt: '10px', mb: '20px' }} />
              
              <Grid container spacing={2}>
                {allUsers[letter]
                  .map((user) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id} sx={{ display: 'flex', justifyContent: 'center' }} >
                      <Card               sx={{
      borderRadius: '10px',
      width: { xs: '300px', sm: '330px',md:'1130px' },
      minHeight: 'auto', 
      border: '1px solid #e5e7eb',
      bgcolor: 'background.userdata',
      transition: '0.3s',
      "&:hover": { border: '1px solid rgb(30,136,229)' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
    }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                            <Box sx={{display:'flex',gap:'20px',alignItems:'center' }}>
                            <Avatar src={user.avatar} sx={{ width: 50, height: 50 }} />
                            <Box>
                            <Typography fontWeight={500} fontSize="13px">{user.name}</Typography>
                            <Typography fontSize="12px" color="text.secondary">{user.role}</Typography>
                          </Box>
                          </Box>
                       
                          <Box sx={{display: "flex", gap: 1 ,alignItems:'center' }}>
                             <Tooltip title="Message" placement="top">
                           <ChatBubbleOutlineIcon sx={{
                             padding: '6px',
                             borderRadius: '5px',
                             border:'1px solid rgb(30,136,229)',
                             color:'rgb(30,136,229)',
                             fontSize:"30px",
                             width:'30px',
                             height:'30px'
                           }}/>
                           </Tooltip>
                            <Tooltip title="Call" placement="top">
                            <IoIosCall style={{
                             
                             padding: '6px',
                             borderRadius: '5px',
                             border:'1px solid rgb(103,58,183)',
                             color:'rgb(103,58,183)',
                             fontSize:"30px",
                             width:'30px',
                             height:'30px'
                            }}/>
                            </Tooltip>
                          </Box>
                             
          
                          </Box>
                          
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Main>
  )
} 
  