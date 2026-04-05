import * as React from 'react';
import {
  Box,
  Card,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const STATS = {
  week: 50,
  month: 1230,
  all: 20987,
};

const CHART_DATA = {
  week: {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    blog: [0, 5, 0, 0, 0, 8, 0, 0, 3, 0, 7, 0, 0, 0, 9, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 6, 11, 0],
    none: [14, 0, 8, 5, 6, 0, 7, 10, 0, 6, 0, 9, 11, 14, 0, 7, 5, 8, 0, 2, 12, 4, 8, 10, 6, 5, 9, 0, 0, 3],
  },
  month: {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    blog: [0, 0, 0, 0, 6, 7, 10, 18, 10, 12, 0, 14, 11, 7, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 12, 6, 4, 2],
    none: [4, 16, 7, 7, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 22, 6, 11, 7, 3, 4, 6, 8, 10, 8, 0, 0, 0, 0, 0],
  },
  all: {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    blog: [0, 5, 0, 0, 0, 8, 0, 0, 5, 0, 7, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 6, 11, 0],
    none: [14, 0, 8, 5, 6, 0, 7, 10, 0, 10, 0, 9, 11, 14, 0, 7, 5, 8, 0, 2, 12, 4, 8, 10, 6, 5, 9, 0, 0, 3],
  },
};

const MainCardsDiv = styled('div')(() => ({
  width: '100%',
  height: 'auto', 
  background: 'rgb(238,242,246)',
  borderRadius: '12px',
  padding: '12px',
  boxSizing: 'border-box',
  marginTop: '15px'
}));

export default function AnalyticsSummary() {
  const [active, setActive] = React.useState('month');

  return (
    <Card sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: 'none', border: '1px solid #f0f0f0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography fontWeight={600}>Analytics Summary</Typography>
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <hr style={{ border: 'none', height: '1px', backgroundColor: '#f0f0f0', margin: '15px 0' }} />

      <Box sx={{  width: '100%',
  height: 'auto', 
  bgcolor: 'background.paper',
  borderRadius: '12px',
  padding: '12px',
  boxSizing: 'border-box',
  marginTop: '15px'}}>
        <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={4} sx={{ width: { xs: '100%', md: '32%' } }}>
            <StatTab
              value={STATS.week}
              label="Views (7 Days)"
              active={active === 'week'}
              onClick={() => setActive('week')}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: { xs: '100%', md: '33%' } }}>
            <StatTab
              value={STATS.month}
              label="Views (30 Days)"
              active={active === 'month'}
              onClick={() => setActive('month')}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: { xs: '100%', md: '32%' } }}>
            <StatTab
              value={STATS.all}
              label="Views (All Time)"
              active={active === 'all'}
              onClick={() => setActive('all')}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mt={4} sx={{ height: { xs: 250, md: 350 }, width: '100%' }}>
        <BarChart
          xAxis={[{
            data: CHART_DATA[active].labels,
            scaleType: 'band',
          }]}
          series={[
            { data: CHART_DATA[active].blog, color: '#2196F3' },
            { data: CHART_DATA[active].none, color: '#E6EAF0' },
          ]}
          slotProps={{ legend: { hidden: true } }}
          margin={{ left: 30, right: 10, top: 20, bottom: 30 }}
        />
      </Box>

      <Box display="flex" justifyContent="center" gap={3} mt={2}>
        <LegendDot color="#2196F3" label="Blog views" />
        <LegendDot color="#E6EAF0" label="None" />
      </Box>
    </Card>
  );
}

function StatTab({ value, label, active, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'left',
        bgcolor: active ? '#2196F3' : '#fff',
        color: active ? '#fff' : '#000',
        transition: '0.25s',
        '&:hover': { bgcolor: active ? '#1E88E5' : '#fcfcfc' },
      }}
    >
      <Typography sx={{ fontSize: { xs: 18, md: 22 } }} fontWeight={700}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: 12 }} opacity={0.85}>
        {label}
      </Typography>
    </Box>
  );
}

function LegendDot({ color, label }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color }} />
      <Typography fontSize={12}>{label}</Typography>
    </Box>
  );
}