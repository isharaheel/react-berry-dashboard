import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RadialChart from "./pie";

const Main1 = styled('div')(() => ({
    width: '100%',
    minHeight: '470px',
    background: 'white',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxSizing: 'border-box'
}))

const Main2 = styled('div')(() => ({
    width: '100%',
    background: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px',
    boxSizing: 'border-box'
}))

const HeaderDiv = styled('div')(() => ({
    width: '100%',
    height: 'auto',
    minHeight: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box'
}))

const GraphDiv = styled('div')(() => ({
    width: '100%',
    height: '190px',
}))

const GraphLies = styled('div')(() => ({
    width: '100%',
    height: '210px',
}))

const Header = styled('div')(() => ({
    width: 'auto',
    height: '100%',
}))

const Heading = styled('p')(() => ({
    color: 'black',
    fontFamily: 'sans-serif',
    margin: 0, 
    fontSize: '20px'
}))

const DropDown = styled('div')(() => ({
    width: 'auto',
    height: '100%',
}))

const Header2 = styled('div')(() => ({
    width: '100%',
    height: 'auto',
}))

const Head = styled('p')(() => ({
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: "sans-serif",
    margin: '10px 0'
}))

const BtnSec = styled('div')(() => ({
    width: '100%',
    height: 'auto',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Numbers = styled('p')(() => ({
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0
}))

export default function LeftSection(params) {
    const [range, setRange] = React.useState("Today");
    return (
        <>
            <Box sx={{  width: '100%',
    minHeight: '470px',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxSizing: 'border-box'}}>
                <HeaderDiv>
                    <Header>
                        <Typography sx={{  color: 'text.primary',
    fontFamily: 'sans-serif',
    margin: 0, 
    fontSize: '20px'}}>Lead Source</Typography>
                    </Header>
                    <DropDown>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Select
                                size="small"
                                value={range}
                                onChange={(e) => setRange(e.target.value)}
                                sx={{
                                    bgcolor: "background.paper",
                                    borderRadius: "8px",
                                    fontSize: 14,
                                    height: 36,
                                }}
                            >
                                <MenuItem value="Today">Today</MenuItem>
                                <MenuItem value="Week">This Week</MenuItem>
                                <MenuItem value="Month">This Month</MenuItem>
                                <MenuItem value="Year">This Year</MenuItem>
                            </Select>
                        </Box>
                    </DropDown>
                </HeaderDiv>
                <GraphDiv>
                    <RadialChart />
                </GraphDiv>
                <GraphLies></GraphLies>
            </Box>

            <Box sx={{   width: '100%',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px',
    boxSizing: 'border-box'}}>
                <Header2>
                    <Head>Upcoming Task & Follow-ups</Head>
                </Header2>
                <BtnSec>
                    <Numbers>200</Numbers>
                    <Button
                        color="primary"
                        sx={{ 
                            borderRadius: "150px", 
                            height: '30px', 
                            background: 'rgb(227,242,253)', 
                            fontSize: '12px' 
                        }}
                    >
                        Follow-up
                    </Button>
                </BtnSec>
            </Box>
        </>
    )
}