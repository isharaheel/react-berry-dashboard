import { Breadcrumbs, Chip, Divider, styled, Typography } from "@mui/material";
import React, { useState } from "react"
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Button,
  TextField,
  Grid,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BlockIcon from "@mui/icons-material/Block";

export const users = [
  {
    id: 1,
    name: "Laurence",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-5.png",
  },
  {
    id: 2,
    name: "Melyssa",
    status: "Rejected",
    color:'red',
    background:'rgb(246,226,228)',
    avatar: "/images/follow-3.png",
  },
  {
    id: 3,
    name: "Montana",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-6.png",
  },
  {
    id: 4,
    name: "Johnathan",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 5,
    name: "Joanne",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-6.png",
  },
  {
    id: 6,
    name: "Lisandro",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-1.png",
  },
  {
    id: 7,
    name: "Geovany",
    status: "Rejected",
    color:'red',
    background:'rgb(246,226,228)',
    avatar: "/images/follow-2.png",
  },
  {
    id: 8,
    name: "Lucius",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-5.png",
  },
  {
    id: 9,
    name: "River",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-5.png",
  },
  {
    id: 10,
    name: "Haylee",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-6.png",
  },
  {
    id: 11,
    name: "John",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 12,
    name: "Jeanne",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-6.png",
  },
  {
    id: 13,
    name: "Maryam",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-1.png",
  },{
    id: 14,
    name: "Alexandre",
    status: "Rejected",
    color:'red',
    background:'rgb(246,226,228)',
    avatar: "/images/follow-2.png",
  },
  {
    id: 15,
    name: "Johnathan",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-5.png",
  },
  {
    id: 16,
    name: "Jordi",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-5.png",
  },
  {
    id: 17,
    name: "Sharon",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-6.png",
  },
  {
    id: 18,
    name: "Trycia",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 19,
    name: "Mazie",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-6.png",
  },
  {
    id: 20,
    name: "Virgie",
    status: "Active",
    color:'rgb(35,200,134)',
    background:'rgb(217,248,227)',
    avatar: "/images/follow-1.png",
  },
 
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
}

export default function StyleTwo() {
  const [search, setSearch] = useState('');

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Main>
      {/* HEADER */}
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Style 02</Typography>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link to="/" color="text.home" style={{ display: 'flex', alignItems: 'center' }}>
              <IoHome />
            </Link>
            <Typography sx={{ fontSize: '13px' }}>Cards</Typography>
            <Typography sx={{ fontSize: '13px' }}>Style 02</Typography>
          </Breadcrumbs>
        </div>
      </SectionOne>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: '10px', height: 'auto' }}>
        {/* Search */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Cards</Typography>
          <TextField
            placeholder="Search Users"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { xs: '100%', sm: '200px' } }}
          />
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2} alignItems="flex-start" justifyContent={{ xs: 'center', sm: 'center', md: 'center' }} >
          {filtered.map(user => (
            <Grid item xs={12} sm={6} md={3} key={user.id} display="flex" justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start' }}>
              <Card
                sx={{
                  width: '265px',
                  height: 'auto', 
                  borderRadius: '10px',
                  bgcolor: 'background.usercard',
                  border: '1px solid #e5e7eb',
                  transition: '0.25s',
                  "&:hover": { border: '1px solid rgb(30,136,229)' },
                }}
              >
                <CardContent>
                  {/* Avatar */}
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />
                  </Box>

                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography fontWeight={600} fontSize="18px">{user.name}</Typography>
                    <Chip
                      label={user.status}
                      sx={{
                        backgroundColor: user.background,
                        color: user.color,
                        fontWeight: 500,
                        fontSize: '12px',
                        height: '24px',
                        borderRadius: '6px',
                      }}
                    />
                  </Box>

                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        textTransform: 'none',
                        borderColor: 'rgb(211,221,238)',
                        color: 'rgb(66,103,178)',
                        bgcolor: 'background.btn',
                        height: '40px',
                        fontSize: '20px',
                        "&:hover": { background: 'rgb(66,103,178)', color: 'rgb(211,221,238)' },
                      }}
                    >
                      <FaSquareFacebook />
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        textTransform: 'none',
                        // borderColor: 'rgb(204,232,250)',
                        color: 'rgb(29,161,242)',
                        bgcolor: 'background.btn',
                        height: '40px',
                        fontSize: '20px',
                        "&:hover": { background: 'rgb(29,161,242)', color: 'rgb(204,232,250)' },
                      }}
                    >
                      <FaTwitterSquare />
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        textTransform: 'none',
                        // borderColor: 'rgb(220,234,241)',
                        color: 'rgb(14,118,168)',
                        bgcolor: 'background.btn',
                        height: '40px',
                        fontSize: '20px',
                        "&:hover": { background: 'rgb(14,118,168)', color: 'rgb(220,234,241)' },
                      }}
                    >
                      <FaLinkedin />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Pagination count={10} size="small" />
          <Select size="small" value={10}>
            <MenuItem value={5}>5 Rows</MenuItem>
            <MenuItem value={10}>10 Rows</MenuItem>
            <MenuItem value={20}>20 Rows</MenuItem>
          </Select>
        </Box>
      </Box>
    </Main>
  );
}


