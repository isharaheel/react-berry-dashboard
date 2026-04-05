import React from "react";
import { styled } from "@mui/material/styles"; 
import LeftSection from "./leftSection";
import LastRightSec from "./lastRightSec/LastRightSec";

const MainDiv = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    }
}));

const Left = styled('div')(({ theme }) => ({
    width: '100%', 
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
        width: '35%',
    }
}));

const Right = styled('div')(({ theme }) => ({
    width: '100%', 
    height: 'auto', 
    minHeight: '530px', 
    borderRadius: '10px',  
    gap: '15px',
    display: 'flex',
    flexDirection: 'column',
    padding: "20px",
    // bgcolor: 'theme.palette.background.paper',
    boxSizing: 'border-box', 
    [theme.breakpoints.up('md')]: {
        width: '60%',
        height: '520px',
    }
}));

export default function LastSec(params) {
    return (
        <MainDiv>
            <Left>
                <LeftSection />
            </Left>
            <Right sx={{bgcolor:'background.paper'}}>
                <LastRightSec />
            </Right>
        </MainDiv>
    );
}