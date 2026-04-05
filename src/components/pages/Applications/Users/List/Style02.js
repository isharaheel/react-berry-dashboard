import React from 'react';
import { 
  Box, Avatar, Typography, LinearProgress, Button, AvatarGroup, Divider, Stack, 
  styled,
  Breadcrumbs,
  TextField,
  Pagination,
  Select,
  MenuItem
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BlockIcon from '@mui/icons-material/Block';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

const userData = [
  {
    name: "Elnora",
    role: "Lead Marketing Facilitator",
    quote: "We need to generate the virtual CSS hard drive!",
    email: "Reid_OConnell4@yahoo.com",
    phone: "506-654-1653",
    location: "Saucerize",
    img: "/images/socialImg-5.png"
  },
  {
    name: "Hirohito",
    role: "Investor Creative Liaison",
    quote: "If we synthesize the protocol, we can get to the RSS circuit through.",
    email: "Conner22@hotmail.com",
    phone: "673-157-1670",
    location: "Port Narcos",
    img: "/images/follow-3.png"
  },
  {
    name: "Kathie",
    role: "Human Accountability Strategist",
    quote: "We need to generate the virtual CSS hard drive!",
    email: "Dangelo40@company.com",
    phone: "506-654-1653",
    location: "Saucerize",
    img: "/images/socialImg-6.png"
  }
];

export const Main = styled('div')(() => ({
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  padding: '16px',
  boxSizing: 'border-box',
  height: 'auto', 
  minHeight: '0', 
}));


export const SectionOne = styled("div")(() => ({
  width: "100%",
  height: "35px",
  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  // background: "white",
  boxSizing: "border-box",
}));


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ListStyledTwo() {
  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Style 02</Typography>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', fontSize: '13px' }}>
              <IoHome />
            </Link>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>List</Typography>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>Style 02</Typography>
          </Breadcrumbs>
        </div>
      </SectionOne>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: '10px' }}>
        {/* Header */}
        <Box sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1
        }}>
          <Typography sx={{ fontWeight: 'bold' }}>List</Typography>
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: { xs: '100%', sm: '200px' }, borderRadius: '8px' }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {userData.map((user, index) => (
          <Box key={index}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: { xs: 'center', md: 'flex-start' },
              justifyContent: 'space-between',
              py: 3,
              gap: { xs: 2, md: 0 }
            }}>
              <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                width: { xs: '100%', md: 'auto' },
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Avatar src={user.img} sx={{ width: 56, height: 56 }} />
                <Box>
                  <Stack direction="row" alignItems="center" spacing={0.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <Typography variant="subtitle1" fontWeight="bold">{user.name}</Typography>
                    <CheckCircleIcon sx={{ fontSize: 16, color: '#2ecc71' }} />
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {user.role}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ maxWidth: { xs: '100%', md: 220 } }}>
                    {user.quote}
                  </Typography>
                </Box>
              </Box>

              {/* Contact Info */}
              <Box sx={{
                mt: { xs: 2, md: 0 },
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography variant="caption" color="text.secondary">Email</Typography>
                <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>{user.email}</Typography>
                <Typography variant="caption" color="text.secondary">Phone</Typography>
                <Typography variant="body2" fontWeight="500">{user.phone}</Typography>
              </Box>

              {/* Location & Avatars */}
              <Box sx={{
                mt: { xs: 2, md: 0 },
                textAlign: { xs: 'center', md: 'left' },
                width: { xs: '100%', md: 200 }
              }}>
                <Typography variant="caption" color="text.secondary">Location</Typography>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>{user.location}</Typography>
                <AvatarGroup max={4} sx={{
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  flexDirection: 'row-reverse',
                  '& .MuiAvatar-root': {
                    width: 27,
                    height: 27,
                    fontSize: 12,
                    border: '2px solid white'
                  }
                }}>
                  <Avatar src="/images/socialImg-5.png" />
                  <Avatar src="/images/socialImg-6.png" />
                  <Avatar src="/images/follow-3.png" />
                  <Avatar sx={{ bgcolor: '#90caf9' }}>+2</Avatar>
                </AvatarGroup>
              </Box>

              <Box sx={{
                mt: { xs: 2, md: 0 },
                width: { xs: '100%', md: 350 }
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  gap: 1,
                  flexDirection: { xs: 'column', md: 'row' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <Typography variant="caption" color="text.secondary">Progress</Typography>
                  <LinearProgress variant="determinate" value={78}
                    sx={{
                      flexGrow: 1,
                      height: 6,
                      borderRadius: 3,
                      bgcolor: '#e3f2fd',
                      '& .MuiLinearProgress-bar': { bgcolor: '#2196f3' },
                      width: { xs: '100%', md: 'auto' }
                    }} />
                  <Typography variant="body2" fontWeight="bold">78%</Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                  <Button fullWidth variant="outlined" startIcon={<ChatBubbleOutlineIcon />}
                    sx={{ textTransform: 'none', color: '#2196f3', borderColor: '#bbdefb' }}>
                    Message
                  </Button>
                  <Button fullWidth variant="outlined" color="error" startIcon={<BlockIcon />}
                    sx={{ textTransform: 'none', borderColor: '#ffcdd2' }}>
                    Block
                  </Button>
                </Stack>
              </Box>

            </Box>
            {index !== userData.length - 1 && <Divider />}
          </Box>
        ))}

        <Box sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1
        }}>
          <Pagination count={10} size="small" />
          <Select size="small" value={10} sx={{ width: { xs: '100%', sm: 100 } }}>
            <MenuItem value={5}>5 Rows</MenuItem>
            <MenuItem value={10}>10 Rows</MenuItem>
            <MenuItem value={20}>20 Rows</MenuItem>
          </Select>
        </Box>

      </Box>
    </Main>
  );
}
