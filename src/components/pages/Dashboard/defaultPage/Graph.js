import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import styled from "styled-components";
import PopularStocksCard from "./populatCard";

const ProfitData = [4200, 9300, 2000, 2780, 1890, 2390, 3490, 2789, 2690, 3990, 5270, 4500];
const LossData = [2400, 1398, 3800, 3908, 4800, 3800, 4300, 1990, 2990, 2290, 1300, 5000];
const InvestData = [2420, 1380, 9850, 3930, 4700, 3870, 4320, 1600, 2490, 2290, 1340, 5309];
const MaintainanceData = [0, 0, 9850, 0, 0, 0, 4320, 0, 0, 0, 0, 5309];

const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MainDiv = styled('div')`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: stretch; /* This ensures both cards have the same height */
  flex-wrap: wrap; 
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default function Graph() {
  const [range, setRange] = React.useState("Today");
  const theme = useTheme();
  
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const chartHeight = isTablet ? 350 : 450;

return (
<MainDiv>
<Card
sx={{width: { xs: "100%", md: "calc(66% - 10px)" },borderRadius: 3,boxShadow: "0 2px 10px rgba(0,0,0,0.05)",display: 'flex',flexDirection: 'column',minHeight: { md: '550px' } }}>
<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
<Box>
<Typography variant="subtitle2" sx={{ color: "text.secondary" }}>Total Growth</Typography>
<Typography variant="h5" sx={{ fontWeight: 600 }}>$2,324.00</Typography>
</Box>

<Select
size="small"
value={range}
onChange={(e) => setRange(e.target.value)}
sx={{ borderRadius: "8px", height: 36 }}
>
<MenuItem value="Today">Today</MenuItem>
<MenuItem value="Week">This Week</MenuItem>
<MenuItem value="Month">This Month</MenuItem>
<MenuItem value="Year">This Year</MenuItem>
</Select>
</Box>

<Box sx={{ width: "100%", flexGrow: 1, minHeight: chartHeight }}>
<BarChart
height={chartHeight}
grid={{ horizontal: true }}
margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
series={[
  { data: InvestData, label: "Investment", stack: "total", color: "#90caf9" },
  { data: LossData, label: "Loss", stack: "total", color: "#1e88e5" },
  { data: ProfitData, label: "Profit", stack: "total", color: "#673ab7" },
  { data: MaintainanceData, label: "Maint.", stack: "total", color: "#E6E6FA" },
]}
xAxis={[{
  data: xLabels,
  scaleType: "band",
  tickLabelStyle: { fontSize: 11 },
}]}
slotProps={{
  legend: { 
    position: { vertical: "bottom", horizontal: "middle" },
    padding: 0
},
}}
/>
</Box>
</CardContent>
</Card>

<Box sx={{ 
width: { xs: "100%", md: "calc(34% - 10px)" },
display: 'flex',
flexDirection: 'column'
}}>
<Box sx={{ flexGrow: 1, height: '100%' }}>
<PopularStocksCard />
</Box>
</Box>
</MainDiv>
);
}