import React from "react";
import styled from "styled-components";
import CardsGraph from "./linegraphs";

const MainDiv = styled('div')(() => ({
    width: '100%',
    height: 'auto', 
    display: 'flex',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'nowrap', 

    '@media (max-width: 1100px)': {
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}))

const Cards = styled('div')(() => ({
    flex: '1 1 0px', 
    minWidth: '220px', 
    height: '130px',
    bgcolor: 'theme.palette.background.paper',
    borderRadius: '10px',
    padding: '15px',
    boxSizing: 'border-box',
    border:'1px solid lightgray',
    
    '@media (max-width: 600px)': {
        flex: '1 1 100%',
        maxWidth: '100%',
    }
}))

const Text = styled('p')(() => ({
    fontSize: '15px',
    color: 'gray',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif'
}))

export default function GraphCards() {
    return (
        <MainDiv>
            <Cards>
                <Text>New</Text>
                <Text style={{ fontWeight: 'bold', color: 'theme.palette.text.primary', marginTop: '6px', fontSize: '17px' }}>180</Text>
                <CardsGraph />
            </Cards>

            <Cards>
                <Text>Paid</Text>
                <Text style={{ fontWeight: 'bold', color: 'theme.palette.text.primary', marginTop: '6px', fontSize: '17px' }}>25, 890</Text>
                <CardsGraph color="rgb(0,200,83)" />
            </Cards>

            <Cards>
                <Text>Pending</Text>
                <Text style={{ fontWeight: 'bold', color: 'theme.palette.text.primary', marginTop: '6px', fontSize: '17px' }}>3400</Text>
                <CardsGraph color="rgb(138,104,200)" />
            </Cards>

            <Cards>
                <Text>Overdue</Text>
                <Text style={{ fontWeight: 'bold', color: 'theme.palette.text.primary', marginTop: '6px', fontSize: '17px' }}>55, 865</Text>
                <CardsGraph color="rgb(255,175,151)" />
            </Cards>
        </MainDiv>
    );
}