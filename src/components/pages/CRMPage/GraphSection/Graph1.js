import React from "react";
import {
  ChartContainer,
  BarPlot,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsTooltip,
  ChartsLegend,
} from "@mui/x-charts";
import { useTheme, useMediaQuery } from "@mui/material";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May",
  "Jun", "Jul", "Aug", "Sep", "Oct"
];

const barData = [300, 220, 150, 210, 250, 260, 160, 250, 260, 110];
const lineData = [0, 220, 60, 120, 60, 250, 60, 60, 10, 50];

export default function Graph1(params) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
   
      <div style={{ 
        width: "100%", 
        height: isMobile ? 250 : 350, 
        cursor: 'crosshair',
        overflowX: 'auto' 
      }}>
        <ChartContainer
          xAxis={[{ 
            scaleType: "band", 
            data: months,
            tickLabelStyle: {
              fontSize: isMobile ? 10 : 12,
            }
          }]}
          series={[
            {
              type: "bar",
              label: "Cashflow",
              data: barData,
              color: "rgba(33,150,243,0.18)",
              barWidth: 1,      
              gapRatio: isMobile ? 1.5 : 3, 
            },
            {
              type: "line",
              label: "Revenue",
              data: lineData,
              color: "#1976d2",
              strokeWidth: 3,
              curve: "linear",   
            },
          ]}
        >
          <BarPlot />
          <LinePlot />

          <ChartsXAxis />

          <ChartsYAxis 
             tickLabelStyle={{ fontSize: isMobile ? 10 : 12 }}
          />

          <ChartsTooltip
            slotProps={{
              paper: {
                elevation: 3,
                style: {
                  borderRadius: 8,
                  padding: "8px 10px",
                  fontSize: 13,
                },
              },
            }}
          />

          <ChartsLegend position="none" />
        </ChartContainer>
      </div>
    </>
  );
}