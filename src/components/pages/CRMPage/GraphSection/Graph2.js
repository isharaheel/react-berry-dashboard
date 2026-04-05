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

const barData = [280, 180, 130, 160, 210, 230, 200, 260, 240, 160];
const lineData = [0, 130, 40, 110, 30, 210, 45, 54, 30, 60];

export default function Graph2() {
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
            scalePadding: 0.5,
            tickLabelStyle: {
              fontSize: isMobile ? 10 : 12, 
            }
          }]}
          series={[
            {
              type: "bar",
              label: "Cashflow",
              data: barData,
              color: "rgb(237,231,246)",
            },
            {
              type: "line",
              label: "Revenue",
              data: lineData,
              color: "rgb(123,84,192)",
              curve: "linear",
            },
          ]}
        >
          <BarPlot categoryGapRatio={isMobile ? 0.4 : 0.7} />
          <LinePlot />

          <ChartsXAxis />
          <ChartsYAxis 
            tickLabelStyle={{ fontSize: isMobile ? 10 : 12 }}
          />

          <ChartsTooltip
            slotProps={{
              paper: {
                elevation: 4,
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