import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function AnalysticsTable() {
  const theme = useTheme();

  const customers = [
    { flag: "/images/c3.jpg", country: "Germany", name: "Angelina Jolly", percent: "56.23%" },
    { flag: "/images/c5.jpg", country: "USA", name: "John Deo", percent: "25.23%" },
    { flag: "/images/c1.jpg", country: "Australia", name: "Jenifer Vintage", percent: "12.45%" },
    { flag: "/images/c4.jpg", country: "United Kingdom", name: "Lori Moore", percent: "8.65%" },
    { flag: "/images/c2.jpg", country: "Brazil", name: "Allianz Dacron", percent: "3.56%" }
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "divider",
        p: 3,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "17px",
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        Latest Customers
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 350,
          overflowX: "auto",
          overflowY: "auto",
          mt: 2,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
        }}
      >
        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "separate",
            minWidth: 500,
          }}
        >
          <Box component="thead">
            <Box component="tr">
              {["#", "Country", "Name", "Average"].map((head, i) => (
                <Box
                  key={i}
                  component="th"
                  sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    textAlign: i === 3 ? "right" : "left",
                    p: 2,
                    fontSize: "14px",
                    fontWeight: 600,
                    bgcolor: "background.default",
                    color: "text.secondary",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {head}
                </Box>
              ))}
            </Box>
          </Box>

          <Box component="tbody">
            {customers.map((c, i) => (
              <Box
                key={i}
                component="tr"
                sx={{
                  bgcolor:
                    i % 2 === 1
                      ? theme.palette.action.hover
                      : "transparent",
                }}
              >
                <Box component="td" sx={cellStyle}>
                  <img
                    src={c.flag}
                    alt=""
                    style={{ width: 30, height: 20, borderRadius: 3 }}
                  />
                </Box>

                <Box component="td" sx={cellStyle}>
                  {c.country}
                </Box>

                <Box component="td" sx={cellStyle}>
                  {c.name}
                </Box>

                <Box
                  component="td"
                  sx={{
                    ...cellStyle,
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  {c.percent}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2, textAlign: "right" }}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          View All Latest Customers
        </Typography>
      </Box>
    </Box>
  );
}

const cellStyle = {
  p: 2,
  fontSize: "14px",
  color: "text.primary",
  borderBottom: "1px solid",
  borderColor: "divider",
};
