import React, { useState } from "react";
import {
  Button, Divider, InputAdornment, styled, TextField, Typography,
  Box, Card, CardContent, Avatar, IconButton, Grid,
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
    { id: 1, name: "Alene", role: "Sr. Customer Manager", email: "claudia_kuhn@yahoo.com", phone: "474-215-1871", location: "Alizaville", avatar: "/images/socialImg-5.png" },
    { id: 2, name: "Agilulf Fuxg", role: "Specialist", email: "alia_shields25@yahoo.com", phone: "235-802-6863", location: "Brandonville", avatar: "/images/follow-2.png" },
     {
    id: 3,
    name: "Adaline Bergfalks",
    role: "Shaper",
    
    email: "kieran.mertz87@hotmail.com",
    phone: "712-162-3638",
    location: "Manuelstad",
    avatar: "/images/follow-1.png",
  },
  ],
  K: [{ id: 4, name: "Keefe", role: "Operations", email: "keefe@mail.com", phone: "474-215-1871", location: "Afghanistan", avatar: "/images/follow-3.png" }],

  
L: [
  {
    id: 5,
    name: "Lazaro",
    role: "Resource Investigator",
    email: "lazaro_work@gmil.com",
    phone: "474-215-1871",
    location: "Albania",
    avatar: "/images/socialImg-6.png",
  },
  
],
H: [
  {
    id: 6,
    name: "Hazle",
    role: "Teamworker",
    email: "hazle_work@gmil.com",
    phone: "474-215-1871",
    location: "Algeria",
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 7,
    name: "Herman Essertg",
    role: "Co-ordinator",
    email: "herman_essertg_work@gmil.com",
    phone: "474-215-1871",
    location: "Andorra",
    avatar: "/images/follow-6.png",
  },
  
],
W: [
  {
    id: 8,
    name: "Wilhelmine Durrg",
    role: "Monitor Evaluator",
    email: "wilhelmine_durrg_work@gmil.com",
    phone: "380-293-0177",
    location: "Angola",
    avatar: "/images/follow-1.png",
  },
  
],
M:[
  {
    id: 9,
    name: "Midas",
    role: "Leader",
    email: "midas_work@gmil.com",
    phone: "474-215-1871",
    location: "Algeria",
    avatar: "/images/socialImg-5.png",
  },
  

  {
    id: 11,
    name: "Uranus",
    role: "Facilitator",
    email: "uranus_work@gmil.com",
    phone: "474-215-1871",
    location: "Algeria",
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

export default function ContactCards() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  
  return (
    <Main>
      <Box
        sx={{
          position: 'relative',
          width: '100%', 
          maxWidth: '1200px', 
          margin: 'auto',
          border: '.5px solid #e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: drawerOpen ? 0 : { xs: '-100%', sm: '-430px' }, 
            width: { xs: '100%', sm: '250px' }, 
            height: 'auto',
            bgcolor: 'background.paper',
            boxShadow: '-5px 0px 15px rgba(0,0,0,0.05)',
            zIndex: 100,
            transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            p: 3,
            borderLeft: '1px solid #eee',
          }}
        >
        </Box>

        <Typography sx={{ fontSize: '18px', fontWeight: 600, mt: 2, ml: { xs: 1, sm: 2 } }}>
          Contact Cards
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />

        <Box sx={{ width: 'auto', margin: 'auto',px:{md:2 , xs:.5 , sm: 1}}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, 
              gap: 2,
              alignItems: 'center',
              mb: 2,
            }}
          >
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
              sx={{
                background: 'rgb(30,136,229)',
                color: 'white',
                textTransform: 'none',
                width: { xs: '95%', sm: '100px' }, 
                "&:hover": { bgcolor: "#1565c0" },
              }}
            >
              + Add
            </Button>
          </Box>

          {Object.keys(allUsers).map((letter) => (
            <Box key={letter} sx={{ mb: 4 }}>
              <Typography sx={{ fontSize: '18px', color: 'rgb(30,136,229)', fontWeight: 600 }}>
                {letter}
              </Typography>
              <Divider sx={{ mt: 1, mb: 2 }} />

              <Grid
                container
                spacing={3}
                justifyContent={{ xs: 'center', sm: 'flex-start' }} 
              >
                {allUsers[letter].map((user) => (
                  <Grid
                 item xs={12} sm={6} md={4} key={user.id} sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Card
                      sx={{
      borderRadius: '10px',
      width: { xs: '300px', sm: '330px' },
      minHeight: 'auto', 
      border: '1px solid #e5e7eb',
      bgcolor: 'background.usercard',
      transition: '0.3s',
      "&:hover": { border: '1px solid rgb(30,136,229)' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
    }}
                    >
                      <CardContent sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Avatar src={user.avatar} sx={{ width: 60, height: 60 }} />
                          <IconButton><BiDotsHorizontalRounded /></IconButton>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Typography fontWeight={600} fontSize="18px">{user.name}</Typography>
                          <Typography fontSize="12px" color="text.secondary">{user.role}</Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'gray', textTransform: 'uppercase' }}>Email</Typography>
                          <Typography sx={{ fontSize: '13px' }}>{user.email}</Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Box sx={{ mb: { xs: 1, sm: 0 } }}>
                              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'gray' }}>Phone</Typography>
                              <Typography sx={{ fontSize: '12px' }}>{user.phone}</Typography>
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'gray' }}>Location</Typography>
                              <Typography sx={{ fontSize: '12px' }}>{user.location}</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
                          <Button fullWidth variant="outlined" startIcon={<ChatBubbleOutlineIcon />} sx={{ textTransform: 'none', color: '#3b82f6', borderColor: '#3b82f6' }}>Message</Button>
                          <Button fullWidth variant="outlined" startIcon={<IoIosCall />} sx={{ textTransform: 'none', color: 'rgb(103,58,183)', borderColor: 'rgb(103,58,183)' }}>Call</Button>
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
  );
}
