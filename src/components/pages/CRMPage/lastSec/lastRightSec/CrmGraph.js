import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const zData = [2000, 1500, 1000, 2000, 2600 , 1700 , 1200]
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export default function CrmGraph() {
  return (
    <Box sx={{ width: '100%', height: 350 }}>
      <BarChart
        series={[
          {
            data: uData,
            stack: 'total',
            barWidth: 12, 
           color:'rgb(144,202,249)'
          },
          {
            data: zData,
            stack: 'total',
            barWidth: 12, 
            color:'rgb(30,136,229)'
          },
          {
            data:  pData,
            stack: 'total',
            barWidth: 12, 
             color:'rgb(237,231,246)'
          }
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: 'band',
            categoryGapRatio: 0.6, 
            barGapRatio: 0.2,     
          },
        ]}
        yAxis={[{ width: 45 }]}
        slotProps={{
          legend: {
            hidden: true, 
          },
        }}
      />
    </Box>
  );
}
