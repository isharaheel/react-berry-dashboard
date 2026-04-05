import React from "react";
import { PieChart } from "@mui/x-charts";

const data = [
  { label: "Social Media", value: 59, color: "#64B5F6", display: "9" },
  { label: "Website", value: 80, color: "#1E88E5", display: "100+" },
  { label: "Phone Call", value: 60, color: "gray", display: "100+" },
  { label: "Mail", value: 50, color: "#6A1B9A", display: "100+" },
];

export default function RadialChart() {
  return (
    <div style={{ width: 300, textAlign: {xs:'left',sm:'center',md:"center"} }}>
      <PieChart
        series={[
          {
            data,
            innerRadius: 0,
            outerRadius: 80,
            label: null,
          },
        ]}
        width={400}
        height={200}
        slotProps={{
          legend: { hidden: true, visible: false },
          tooltip: {
            trigger: "item",
            render: (params) => {
              const p = Array.isArray(params) ? params[0] : params;
              return (
                <div style={{ padding: 6, fontSize: 14 }}>
                  {p.label}: {p.value}
                </div>
              );
            },
          },
        }}
        sx={{
          "& .MuiChartsLegend-root": { display: "none !important" },
          "& .MuiChartsLegend": { display: "none !important" },
          "& .MuiLegend-root": { display: "none !important" },
          "& .MuiChartsTooltip-color": { display: "none !important" }, 
        }}
      />

      <div style={{ marginTop: 20}}>
        {data.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              marginBottom: 6,
              marginLeft:'20px',
              width:'360px',
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "100%",
                backgroundColor: item.color,
                marginRight: 8,
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                fontFamily: "sans-serif",
              }}
            >
              <span style={{ fontSize: 17, color: "#555" }}>
                {item.label}
              </span>
              <span
                style={{
                  fontSize: 15,
                  color: "#555",
                  width: "50px",
                  border:'1px solid #ddd',
                  borderRadius:'10px',
                  background:'lightgray',
                  textAlign: "center",
                }}
              >
                {item.display}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
