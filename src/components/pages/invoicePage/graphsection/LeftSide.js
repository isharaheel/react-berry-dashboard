import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import styled from "styled-components";

const LossData = [2400, 1398, 3800, 3908, 4800, 3800, 4300];
const MaintainanceData = [2000, 3700, 9850, 2500, 4300, 9700, 4320];

const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const MainDiv = styled('div')(() => ({
  width: '100%',
  maxWidth: '740px', 
  height: '470px',
  display: 'flex',
  gap: '20px',
  boxSizing: 'border-box'
}));

export default function LeftSide() {
  const [range, setRange] = React.useState("Today");

  return (
    <Box sx={{width: '100%',
  maxWidth: '740px', 
  height: '500px',
  display: 'flex',
  gap: '20px',
  boxSizing: 'border-box'}}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          p: { xs: 1, sm: 2 }, 
          borderRadius: 3,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          overflow: 'hidden' ,
          // border:'2px solid red',
          // paddingBottom:'50px'
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: { xs: 1, sm: 2 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Total Revenue Trends
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                $999.00
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Select
                size="small"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                sx={{
                  background: "background.paper",
                  borderRadius: "8px",
                  fontSize: 14,
                  height: 36,
                }}
              >
                <MenuItem value="Today">Today</MenuItem>
                <MenuItem value="Week">This Week</MenuItem>
                <MenuItem value="Month">This Month</MenuItem>
                <MenuItem value="Year">This Year</MenuItem>
              </Select>
            </Box>
          </Box>

          <Box sx={{ 
            width: "100%", 
            height: 380, 
            minWidth: 0,
            '& svg': { width: '100% !important' } 
          }}>
            <BarChart
              grid={{ horizontal: true }}
              yAxis={[{ width: 40 }]}
              margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
              slotProps={{
                legend: { 
                  position: { vertical: "bottom", horizontal: "middle" }, 
                  
                },
              }}
              series={[
                { data: LossData, label: "Loss", stack: "total", color: "rgb(30,136,229)" },
                { data: MaintainanceData, label: "Maintenance", stack: "total", color: "rgb(227,242,253)" },
              ]}
              xAxis={[{
                data: xLabels,
                scaleType: "band",
              }]}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}