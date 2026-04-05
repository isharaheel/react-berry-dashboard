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

const barData = [300, 150, 110, 190, 280, 250, 180, 230, 225, 140];
const lineData = [0, 185, 50, 145, 50, 260, 50, 35, 0, 45];

export default function Graph3(params) {
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
              color: "rgb(247,204,204)",
              barWidth: isMobile ? 3 : 5,      
              gapRatio: 0.33,
            },
            {
              type: "line",
              label: "Revenue",
              data: lineData,
              color: "rgb(244,76,64)",
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