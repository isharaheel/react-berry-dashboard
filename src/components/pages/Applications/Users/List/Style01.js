import React from "react";
import {
  Breadcrumbs,
  Divider,
  MenuItem,
  Pagination,
  Select,
  styled,
  TextField,
  Typography,
  Box,
  Avatar,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { MdBlock } from "react-icons/md";

function createData(avatar, name, email, country, friend, follower, status) {
  return { avatar, name, email, country, friend, follower, status };
}

const rows = [
  createData("/images/socialImg-5.png", "Curtis", "wiegand@hotmail.com", "Saucerize", 834, 3645, "Active"),
  createData("/images/follow-3.png", "Xavier", "tyrell86@company.com", "South Bradfordstad", 634, 2345, "Pending"),
  createData("/images/socialImg-6.png", "Lola", "aufderhar56@yahoo.com", "North Tannermouth", 164, 9345, "Rejected"),
  createData("/images/socialImg-7.png", "Milton", "dikinson49@hotmail.com", "North Anika", 684, 3654, "Pending"),
  createData("/images/follow-6.png", "Lysanne", "zack.turner49@company.com", "Betteland", 842, 5863, "Active"),
  createData("/images/follow-1.png", "Bonita", "keebler57@company.com", "Alexburgh", 543, 8965, "Rejected"),
  createData("/images/follow-2.png", "Retta", "mathew92@yahoo.com", "East Bryceland", 871, 9321, "Active"),
  createData("/images/follow-3.png", "Zoie", "hulda1@hotmail.com", "Beattytown", 354, 1686, "Pending"),
  createData("/images/follow-4.png", "Easton", "hilpert66@hotmail.com", "North Pedromouth", 546, 9562, "Active"),
  createData("/images/follow-5.png", "Brianne", "noe45@hotmail.com", "New Alexanderborough", 1482, 10865, "Active"),
];

const statusStyles = {
  Active: { color: "#15803d", bg: "#dcfce7" },
  Rejected: { color: "#b91c1c", bg: "#fee2e2" },
  Pending: { color: "#a16207", bg: "#fef3c7" },
};

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

export default function ListStyledOne() {
  return (
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Style 01</Typography>
        <Breadcrumbs separator="›">
          <Link to="/" style={{ color: "inherit", display: "flex", alignItems: "center" }}>
            <IoHome size={14} />
          </Link>
          <Typography sx={{ fontSize: "13px" }}>List</Typography>
          <Typography sx={{ fontSize: "13px" }}>Style 01</Typography>
        </Breadcrumbs>
      </SectionOne>

      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: "10px",
          width: "100%",
          p: { xs: 2, md: 3 },
          boxSizing: "border-box",
        }}
      >
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
          <Typography sx={{ fontWeight: "bold" }}>List</Typography>
          <TextField placeholder="Search" size="small" sx={{ width: { xs: "100%", sm: "200px" } }} />
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            width: "100%",
            overflowX: "auto", 
            borderRadius: "8px",
          }}
        >
          <TableContainer component={Paper} sx={{ boxShadow: "none",
            overflowX:{xs:'auto',sm:'auto',md:'scroll'},
            width:{xs:'310px' , sm:'750px',md:'auto' }

           }}>
            <Table sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'background.default' }}>
                  <TableCell>User Profile</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Friends</TableCell>
                  <TableCell>Followers</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar src={row.avatar} />
                        <Box>
                          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{row.name}</Typography>
                          <Typography sx={{ fontSize: "12px", color: "gray" }}>{row.email}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.friend}</TableCell>
                    <TableCell>{row.follower}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        sx={{
                          height: 22,
                          fontSize: "12px",
                          backgroundColor: statusStyles[row.status].bg,
                          color: statusStyles[row.status].color,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                        <IconButton size="small">
                          <CiChat1 color="#2196f3" />
                        </IconButton>
                        <IconButton size="small">
                          <MdBlock color="red" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Pagination count={10} size="small" />
          <Select size="small" defaultValue={10}>
            <MenuItem value={5}>5 Rows</MenuItem>
            <MenuItem value={10}>10 Rows</MenuItem>
            <MenuItem value={20}>20 Rows</MenuItem>
          </Select>
        </Box>
      </Box>
    </Main>
  );
}
