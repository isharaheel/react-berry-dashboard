import { styled } from "@mui/material";
import * as React from "react";
import { MdWidthFull } from "react-icons/md";
import AnalyticsSummary from "./AnalyticsSummary";
import SecondSec from "./SecondSec/SecondSec";

const MainDiv = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: '0 15px', 
    boxSizing: 'border-box',
    overflowX: 'hidden' 
}))
export default function BlogPage() {
 return(
    <>
    
    <MainDiv>
<AnalyticsSummary/>
<SecondSec/>

    </MainDiv>
    


    
    </>
 )   
}