import React from "react";
import styled from "styled-components";
import { Box, Typography, Button, Divider, Stack } from "@mui/material";

const clients = [
  { name: "Agilulf Fuxg", amount: "£5678.09", status: "10% Loss", color: "#ff4d4f" },
  { name: "Adaline Bergfalks", amount: "£5678.09", status: "10% Profit", color: "#4CAF50" },
  { name: "Hazle", amount: "£5678.09", status: "10% Loss", color: "#ff4d4f" },
  { name: "Herman Essertg", amount: "£5678.09", status: "10% Loss", color: "#ff4d4f" },
  { name: "Adaline Bergfalks", amount: "£5678.09", status: "10% Profit", color: "#4CAF50" },
  { name: "Wilhelmine Durrg", amount: "£5678.09", status: "10% Profit", color: "#4CAF50" },
];

const MainDiv = styled('div')(() => ({
  width: '100%',
  maxWidth: '350px', 
  height: '500px', 
  borderRadius: '10px',
  boxSizing: 'border-box',
}));

export default function RightSide() {
  return (
    <MainDiv>
      <Box
        sx={{
          width: '100%',
          height: '100%', 
          bgcolor: "background.paper",
          borderRadius: 4,
          p: { xs: 2, sm: 3 }, 
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          fontFamily: "Inter, sans-serif",
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: "18px", color: "text.primary", mb: 1 }}
        >
          Client Insights
        </Typography>

        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          {clients.map((client, i) => (
            <React.Fragment key={i}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ py: 1 }}
              >
                <Box>
                  <Typography sx={{ 
                    fontWeight: 600, 
                    fontSize: { xs: "14px", sm: "15px" } 
                  }}>
                    {client.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: client.color,
                    }}
                  >
                    {client.status}
                  </Typography>
                </Box>

                <Box textAlign="right">
                  <Button
                    variant="text"
                    sx={{
                      color: "#1A73E8",
                      textTransform: "none",
                      fontSize: "13px",
                      padding: 0,
                      minWidth: "auto",
                    }}
                  >
                    History
                  </Button>
                </Box>
              </Stack>

              {i !== clients.length - 1 && (
                <Divider sx={{ borderColor: "#e5e7eb", my: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </Box>

        <Button
          variant="text"
          sx={{
            color: "#1A73E8",
            textTransform: "none",
            fontWeight: 600,
            display: "flex",
            mx: "auto",
            marginTop: 'auto',
            pt: 1
          }}
        >
          View All →
        </Button>
      </Box>
    </MainDiv>
  );
}