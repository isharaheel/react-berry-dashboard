import React from "react";
import styled from "styled-components";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoMdBug } from "react-icons/io";
import { Box, Button, Typography } from "@mui/material";

const customers = [
  { icon: <TbFileInvoice />, name: "Invoice Detail", text: "View", color: "rgb(0,230,118)", background: 'rgb(229,249,237)' },
  { icon: <HiOutlineUserAdd />, name: "How To Add Client?", text: "View", color: "rgb(33,150,243)", background: 'rgb(232,243,252)' },
  { icon: <GrPersonalComputer />, name: "How To Add Bill?", text: "View", color: "rgb(103,58,183)", background: 'rgb(239,234,247)' },
  { icon: <TbFileInvoice />, name: "Create Invoice", text: "View", color: "rgb(255,229,127)", background: 'rgb(255,249,230)' },
  { icon: <IoMdBug />, name: "Generate Error", text: "View", color: "rgb(244,67,54)", background: 'rgb(251,236,231)' },
];

const TipsDiv = styled.div`
  width: 100%;
  max-width: 470px; /* Maintains original size on laptop */
  min-height: 350px;
  height: auto;
  display: flex;
  flex-direction: column; /* Stack rows vertically */
  gap: 15px; /* Spacing between rows */
  padding-bottom: 20px;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Space between icon and text */
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px; /* Prevents icon from shrinking */
  border-radius: 8px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 15px;
  color: black;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  /* Ensures text handles small screens gracefully */
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export default function TipsTab() {
  return (
    <TipsDiv>
      {customers.map((item, index) => (
        <RowWrapper key={index}>
          <LeftSide>
            <IconBox style={{ background: item.background, color: item.color }}>
              {item.icon}
            </IconBox>
            
            <Typography sx={{ fontSize: '15px',
  color: 'text.primary',
  fontFamily: 'sans-serif',
  margin: 0,
  padding: 0}}>{item.name}</Typography>
          </LeftSide>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#1A73E8",
                textTransform: "none",
                fontSize: "13px",
                padding: 0,
                minWidth: "auto",
                fontWeight: 600
              }}
            >
              History
            </Button>
          </Box>
        </RowWrapper>
      ))}
    </TipsDiv>
  );
}