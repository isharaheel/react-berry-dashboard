import React, { useState } from "react";
import {
  Box,
  Card,
  Avatar,
  Button,
  Chip,
  Grid,
  Divider,
  Pagination,
  Select,
  MenuItem,
  TextField,
  Typography,
  Breadcrumbs,
  styled,
} from "@mui/material";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";


export const users = [
  {
    name: "Perry",
    role: "Direct Implementation Developer",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/follow-2.png",
    cover: "/images/style-1.png",
  },
  {
    name: "Jennyfer",
    role: "Lead Intranet Planner",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/follow-1.png",
    cover: "/images/style-2.png",
  },
  {
    name: "Antonette",
    role: "Regional Division Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/follow-6.png",
    cover: "/images/style-3.png",
  },
  {
    name: "Mekhi",
    role: "Central Brand Coordinator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-7.png",
    cover: "/images/style-4.png",
  },
  {
    name: "Margie",
    role: "Product Tactics Facilitator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-6.png",
    cover: "/images/style-5.png",
  },
  {
    name: "Wilfrid",
    role: "Lead Directives Analyst",
    status: "Rejected",
    statusColor: "#dc2626",
    statusBg: "#fee2e2",
    avatar: "/images/follow-3.png",
    cover: "/images/gallery-12.png",
  },
  {
    name: "Kennedy",
    role: "Principal Marketing Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-5.png",
    cover: "/images/style-6.png",
  },
  {
    name: "Ida",
    role: "Direct Assurance Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-7.png",
    cover: "/images/style-7.png",
  },
   {
    name: "Madyson",
    role: "Direct Assurance Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/follow-5.png",
    cover: "/images/style-8.png",
  },
   {
    name: "Murphy",
    role: "Direct Assurance Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/follow-6.png",
    cover: "/images/style-9.png",
  },
   {
    name: "Lucie",
    role: "Direct Assurance Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-5.png",
    cover: "/images/style-10.png",
  },
   {
    name: "Sonny",
    role: "Direct Assurance Administrator",
    status: "Active",
    statusColor: "#16a34a",
    statusBg: "#dcfce7",
    avatar: "/images/socialImg-7.png",
    cover: "/images/style-11.png",
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


export default function StyleThree() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography fontWeight={600}>Style 03</Typography>

        <Breadcrumbs separator="›">
          <Link to="/" color="text.home">
            <IoHome size={14} />
          </Link>
          <Typography fontSize={13}>Cards</Typography>
          <Typography fontSize={13}>Style 03</Typography>
        </Breadcrumbs>
      </SectionOne>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography fontWeight="bold">Cards</Typography>

          <TextField
            placeholder="Search"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", sm: 200 },
            }}
          />
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Cards */}
        <Grid container spacing={3} justifyContent={{ xs: "center", md: "center" }}
>
          {filtered.map((user, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card
                sx={{
                  width: { xs: "100%", sm: 260, lg: 260 },
    mx: "auto",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  transition: "0.25s",

                  "&:hover": {
                    border: "1px solid rgb(30,136,229)",
                  },
                }}
              >
                {/* Cover */}
                <Box
                  sx={{
                    height: 120,
                    backgroundImage: `url(${user.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Avatar */}
                <Avatar
                  src={user.avatar}
                  sx={{
                    width: 72,
                    height: 72,
                    border: "4px solid white",
                    mx: "auto",
                    mt: "-36px",
                  }}
                />

                <Box sx={{ p: 2, textAlign: "center" }}>
                  <Typography fontWeight={600}>{user.name}</Typography>
                  <Typography fontSize={13} color="text.secondary">
                    {user.role}
                  </Typography>

                  <Chip
                    label={user.status}
                    sx={{
                      mt: 1,
                      height: 22,
                      fontSize: 12,
                      bgcolor: user.statusBg,
                      color: user.statusColor,
                    }}
                  />

                  <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                    <Button fullWidth sx={{ bgcolor: "#d3ddee", fontSize: 20 }}>
                      <FaSquareFacebook />
                    </Button>
                    <Button fullWidth sx={{ bgcolor: "#cce8fa", fontSize: 20 }}>
                      <FaTwitterSquare />
                    </Button>
                    <Button fullWidth sx={{ bgcolor: "#dceaf1", fontSize: 20 }}>
                      <FaLinkedin />
                    </Button>
                  </Box>

                  <Button
                    fullWidth
                    startIcon={<MdOutlineComment />}
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      border: "1px solid rgb(40,150,243)",
                      color: "rgb(40,150,243)",
                    }}
                  >
                    Message
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
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
