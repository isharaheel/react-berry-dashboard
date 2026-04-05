import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
//   IconButton,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import styled from "styled-components";
const LossData = [2400, 1398, 3800, 3908, 4800, 3800, 4300];
const MaintainanceData = [2000, 3700, 9850, 2500, 4300, 9700, 4320];

const xLabels = [
  'Mon','Tue','Wed','Thu','Fri','Sat','Sun'
];
const MainDiv = styled('div')(() => ({
 width: '100%',
 height:'100%',
 display:'flex',
 gap:'20px',


  "@media (max-width: 1450px)": {
    width:'1000px',
    
    border:'1px solid black'
  },

}));
export default function InvoiceGraph() {
      const [range, setRange] = React.useState("Today");
    
    return(
        <>
        <MainDiv>
          <Card
              sx={{
                width: "100%",
                p: 2,
                borderRadius: 3,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                backgroundColor: "white",
              }}
            >
              <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    width: "100%",
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
                        background: "#fff",
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
        
                <Box sx={{ width: "100%", height: { xs: 300, sm: 400, md: 383 } }}>
                  <BarChart
                    grid={{ horizontal: true }}
                    yAxis={[{ width: 40 }]}
                    margin={{ top: 20, right: 20, bottom: 60, left: 10 }}
                    slotProps={{
                      legend: { position: { vertical: "bottom", horizontal: "middle" } },
                    }}
                    series={[
                     
                      { data: LossData, label: "Loss", stack: "total", color: "rgb(30,136,229)" },
                      
                      { data: MaintainanceData, label: "Maintenance", stack: "total", color: "rgb(227,242,253)" },
                    ]}
                    xAxis={[{
                      data: xLabels,
                      scaleType: "band",
                      tickLabelStyle: { fontSize: 12 },
                    }]}
                  />
                </Box>
              </CardContent>
            </Card>
        </MainDiv>
        
        
        </>
    )
}