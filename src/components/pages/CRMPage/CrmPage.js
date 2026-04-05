import React from "react";
import { styled } from "@mui/material/styles"; 
import GraphSec from "./GraphSection/GraphSec";
import Cards from "./Cards/Cards";
import LastSec from "./lastSec/LastSection";

const Maindiv = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1150px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '0 10px',
    boxSizing: 'border-box',
    overflowX: 'hidden', 
    position: 'relative',

    [theme.breakpoints.up('lg')]: {
        width: '1150px',
    }
}));
export default function CrmPage() {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <Maindiv>
                <GraphSec />
                <Cards />
                <LastSec />
            </Maindiv>
        </div>
    );
}