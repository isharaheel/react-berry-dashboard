import {
  Breadcrumbs,
  Divider,
  styled,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Grid,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BlockIcon from "@mui/icons-material/Block";

export const users = [
  {
    id: 1,
    name: "Phoebe",
    role: "Dynamic Operations Officer",
    desc: "The TCP hard drive is down, navigate the redundant driver so we can connect the SMS sensor!",
    email: "claudia_kuhn@yahoo.com",
    phone: "474-215-1871",
    location: "Alizaville",
    avatar: "/images/socialImg-5.png",
  },
  {
    id: 2,
    name: "Gaetano",
    role: "Investor Division Strategist",
    desc: "You can program the protocol without parsing the 1080p PNG bandwidth!",
    email: "alia_shields25@yahoo.com",
    phone: "235-802-6863",
    location: "Brandonville",
    avatar: "/images/follow-3.png",
  },
  {
    id: 3,
    name: "Elisabeth",
    role: "Future Markets Associate",
    desc: "Use the solid state JBOD application, then you can generate the multi-byte pixel!",
    email: "kieran.mertz87@hotmail.com",
    phone: "712-162-3638",
    location: "Manuelstad",
    avatar: "/images/socialImg-6.png",
  },
  {
    id: 4,
    name: "Rosalia",
    role: "Global Brand Planner",
    desc: "Use the 1080p HDD circuit, then you can calculate the open-source interface!",
    email: "luis.nader30@hotmail.com",
    phone: "192-612-2096",
    location: "Lake Keenan",
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 5,
    name: "Lizeth",
    role: "District Intranet Executive",
    desc: "Use the neural RSS application, then you can program the bluetooth firewall! #DOO",
    email: "alicia.ohara@company.com",
    phone: "192-612-2096",
    location: "Lake Keenan",
    avatar: "/images/follow-6.png",
  },
  {
    id: 6,
    name: "Jessyca",
    role: "Future Accountability Liaison",
    desc: "Try to connect the SAS transmitter, maybe it will index the optical hard drive!",
    email: "titus.kunde76@hotmail.com",
    phone: "712-162-3638",
    location: "Manuelastad",
    avatar: "/images/follow-1.png",
  },
  {
    id: 7,
    name: "Roberto",
    role: "Product Communications Analyst",
    desc: "If we calculate the monitor, we can get to the CSS sensor through the open-source AGP application!",
    email: "keira61@hotmail.com",
    phone: "192-612-2096",
    location: "Lake Keenan",
    avatar: "/images/follow-2.png",
  },
  {
    id: 8,
    name: "Ava",
    role: "Forward Accounts Assistant",
    desc: "The SCSI program is down, override the cross-platform sensor so we can quantify the SAS firewall!",
    email: "jalyn.wilderman@company.com",
    phone: "192-612-2096",
    location: "Lake Keenan",
    avatar: "/images/follow-3.png",
  },
  {
    id: 9,
    name: "Dillon",
    role: "Future Factors Strategist",
    desc: "Use the 1080p HDD circuit, then you can calculate the open-source interface!",
    email: "caesar80@yahoo.com",
    phone: "798-877-8614",
    location: "Russelfurt",
    avatar: "/images/socialImg-7.png",
  },
  {
    id: 10,
    name: "Domingo",
    role: "Investor Identity Facilitator",
    desc: "The CSS program is down, copy the mobile capacitor so we can override the AI alarm!",
    email: "hudson.welch54@company.com",
    phone: "642-979-7584",
    location: "Itzelview",
    avatar: "/images/follow-5.png",
  },
  {
    id: 11,
    name: "Connor",
    role: "Dynamic Intranet Strategist",
    desc: "Parsing the monitor won't do anything, we need to navigate the back-end JBOD bus!",
    email: "reese_daniel54@yahoo.com",
    phone: "838-147-6612",
    location: "Margarettstad",
    avatar: "/images/follow-3.png",
  },
  {
    id: 12,
    name: "Delfina",
    role: "Chief Response Orchestrator",
    desc: "The PNG alarm is down, navigate the back-end application so we can generate the FTP driver!",
    email: "stevie.corwin25@company.com",
    phone: "777-709-1293",
    location: "North Monty",
    avatar: "/images/socialImg-5.png",
  },
  // duplicate till 12
  // ...Array.from({ length: 8 }).map((_, i) => ({
  //   id: i + 5,
  //   name: `User ${i + 5}`,
  //   role: "Dynamic Intranet Strategist",
  //   desc: "The CSS program is down, copy the mobile capacitor so we can override the AI alarm!",
  //   email: `user${i + 5}@yahoo.com`,
  //   phone: "777-709-1293",
  //   location: "North Monty",
  //   avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
  // })),
];

export const Main = styled("div")(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "0 auto",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  height: "auto", 
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

export default function StyleOne() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography fontWeight={600}>Style 01</Typography>

        <Breadcrumbs separator="›">
          <Link to="/" color="text.home" style={{ display: "flex", alignItems: "center" }}>
            <IoHome />
          </Link>
          <Typography fontSize="13px">Cards</Typography>
          <Typography fontSize="13px">Style 01</Typography>
        </Breadcrumbs>
      </SectionOne>

      <Box
        sx={{
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: "10px",
          height: "auto",
        }}
      >
        {/*  */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography fontWeight="bold">Cards</Typography>

          <TextField
            placeholder="Search Users"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { xs: "100%", sm: "200px" } }}
          />
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={2}
          alignItems="flex-start" 
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center", 
          }}
        >
          {filtered.map((user) => (
            <Grid key={user.id} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "265px",
                  height: "auto", 
                  mx: { xs: "auto", md: 0 }, 
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  transition: "0.25s",
                  "&:hover": { border: "1px solid rgb(30,136,229)" },
                }}
              >
                <CardContent>
                  <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />

                  <Box mt={2}>
                    <Typography fontWeight={600} fontSize="18px">
                      {user.name}
                    </Typography>
                    <Typography fontSize="12px" color="text.secondary">
                      {user.role}
                    </Typography>
                  </Box>

                  <Typography fontSize="12px" color="text.secondary" mt={2}>
                    {user.desc}
                  </Typography>

                  <Box mt={2}>
                    <Typography fontSize="13px" fontWeight="bold" color="gray">
                      Email
                    </Typography>
                    <Typography fontSize="13px">{user.email}</Typography>
                  </Box>

                  <Box mt={3} display="flex" justifyContent="space-between">
                    <Box>
                      <Typography
                        fontSize="13px"
                        fontWeight="bold"
                        color="gray"
                      >
                        Phone
                      </Typography>
                      <Typography fontSize="13px">{user.phone}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize="13px"
                        fontWeight="bold"
                        color="gray"
                      >
                        Location
                      </Typography>
                      <Typography fontSize="13px">{user.location}</Typography>
                    </Box>
                  </Box>

                  <Box mt={2} display="flex" gap={1}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<ChatBubbleOutlineIcon />}
                      sx={{
                        textTransform: "none",
                        borderColor: "#3b82f6",
                        color: "#3b82f6",
                        height: "34px",
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<BlockIcon />}
                      sx={{
                        textTransform: "none",
                        borderColor: "#ef4444",
                        color: "#ef4444",
                        height: "34px",
                      }}
                    >
                      Block
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          mt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
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
