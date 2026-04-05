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

const barData = [240, 140, 90, 200, 240, 270, 190, 210, 220, 170];
const lineData = [0, 190, 63, 125, 25, 275, 75, 68, 90, 70];

export default function Graph4(params) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div style={{ 
        width: "100%", 
        height: isMobile ? 250 : 350, 
        cursor: 'crosshair' 
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
              color: "rgb(255,248,225)",
              barWidth: 1,      
              gapRatio: isMobile ? 1.5 : 3, 
            },
            {
              type: "line",
              label: "Revenue",
              data: lineData,
              color: "rgb(255,229,127)",
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