import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const smallValues = [0, 12, 3, 4, 10, 8, 36, 20, 15, 6, 8, 7, 12];

export default function CardsGraph({ color = "rgb(176,182,191)", labelText = "Value" }) {
  return (
    <Stack sx={{ width: "100%", marginTop: 'auto', overflow: 'hidden' }}>
      <Box sx={{ width: '100%', minWidth: 0, display: 'block' }}>
        <SparkLineChart
          data={smallValues}
          height={40}
          yAxis={{ min: 0, max: 100 }}
          colors={[color]} 
          showTooltip
          valueFormatter={(value) => `${value}% ${labelText}`}
          showArea={true} 
          slotProps={{
            line: {
              style: {
                stroke: color, 
                strokeWidth: 2,
              },
            },
            area: {
              style: {
                fill: color, 
                opacity: 0.2,
              }
            }
          }}
          margin={{ top: 5, bottom: 5, left: 0, right: 0 }}
        />
      </Box>
    </Stack>
  );
}