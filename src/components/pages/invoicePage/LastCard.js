import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const data = [
  { id: "#0697", date: "09/05/2023", name: "Adaline Bergfalks", amount: 5678.09 },
  { id: "#0697", date: "09/05/2023", name: "Agilulf Fuxg", amount: 5678.09 },
  { id: "#0697", date: "09/05/2023", name: "John Doe", amount: -5678.09 },
  { id: "#0697", date: "09/05/2023", name: "Wilhelmine Durrg", amount: 5678.09 },
  { id: "#0697", date: "09/05/2023", name: "Herman Essertg", amount: -5678.09 },
  { id: "#0697", date: "09/05/2023", name: "Eadwulf Beckete", amount: -5678.09 },
];

export default function LastCards() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: "580px" }, 
        minHeight: "470px", 
        bgcolor: "background.paper",
        borderRadius: "12px",
        padding: { xs: "15px", sm: "20px" },
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        boxSizing: "border-box",
        flex: "1 1 auto"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ color:'text.primary',fontSize: { xs: 18, sm: 20 }, fontWeight: 600 }}>
          Recent Activity
        </Typography>

        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            fontSize: { xs: 11, sm: 13 },
            padding: "4px 12px",
            color: "text.primary",
            borderColor: "#d5dce3",
            "&:hover": { borderColor: "gray" }
          }}
        >
          Add New
        </Button>
      </Box>

      <Divider />

      {data.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
              gap: 1 
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", minWidth: "80px" }}>
              <Typography sx={{ fontSize: 12, color: "#6c757d", fontWeight: 600 }}>
                {item.id}
              </Typography>
              <Typography sx={{ fontSize: 12, color: "text.primary", fontWeight: 600 }}>
                {item.date}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 600,
                color: "text.primary",
                flex: 1,
                textAlign: "left",
                px: 2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {item.name}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 600,
                color: item.amount > 0 ? "#1bbf54" : "#e6492d",
                textAlign: "right",
                minWidth: "90px"
              }}
            >
              {item.amount > 0 ? "£" + item.amount : `- £${Math.abs(item.amount)}`}
            </Typography>
          </Box>
          <Divider />
        </Box>
      ))}

      <Box
        sx={{
          textAlign: "center",
          mt: 2,
          cursor: "pointer",
          color: "#246bfd",
          fontSize: 14,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          "&:hover": { textDecoration: "underline" }
        }}
      >
        View All <ChevronRightIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
}