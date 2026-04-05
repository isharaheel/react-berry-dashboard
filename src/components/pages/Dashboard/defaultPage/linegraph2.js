import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
return (
<LineChart
yAxis={[
{
display: false   
}
]}
xAxis={[{ data: [1, 2, 3, 5, 8, 10],
display: false    }]}
series={[
{
data: [2, 5.5, 2, 8.5, 1.5, 5],
showMark: false, 
},
]}
grid={{ horizontal: false, vertical: false }} 
height={100}
sx={{
"& .MuiChartsAxis-root": { display: "none" }, 
}}
/>
);
}