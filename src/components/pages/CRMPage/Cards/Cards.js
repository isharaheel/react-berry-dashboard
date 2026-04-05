import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TbCalculator } from "react-icons/tb";
import { MdVideoCameraFront } from "react-icons/md";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { TiUserAdd } from "react-icons/ti";

const MainDiv = styled('div')(() => ({
    width: '100%',
    height: 'auto',
    paddingTop: '5px',
    borderRadius: '10px'
}))

const DemoPaper = styled(Paper)(({ theme }) => ({
    flex: '1 1 233px', 
    maxWidth: 270,
    height: 80,
    display: 'flex',
    gap: '10px',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    background: 'rgb(30,136,229)',
    border: '1px solid white',
    borderRadius: '10px',
    position: "relative",
    overflow: "hidden",

    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    }
}));

const LeftData = styled('div')(() => ({
    width: '20%',
    height: '100%',
    background: 'rgb(21,101,192)',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '30px',
    color: 'white',
    zIndex: 1 
}))

const RightData = styled('div')(() => ({
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    zIndex: 1 
}))

const Text = styled('p')(() => ({
    color: 'whitesmoke',
    fontSize: '15px',
    fontWeight: 600,
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0
}))

const BackgroundCircle = styled("div")(() => ({
    position: "absolute",
    right: "-40px",
    top: "-20px",
    width: "120px",
    height: "100px",
    background: "linear-gradient(90deg, #fff8e1, #ffe9b3)",
    borderRadius: "50%",
    opacity: 0.7,
    zIndex: 0
}));

export default function Cards() {
    return (
        <MainDiv>
            <Stack 
                direction="row" 
                spacing={2} 
                useFlexGap 
                flexWrap="wrap"
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >

                <DemoPaper square={false} sx={{ bgcolor: 'background.card' }}>
                    <BackgroundCircle style={{ background: 'lightblue', width: "100px", height: '80px', top: '-28px' }} />
                    <BackgroundCircle style={{ background: "linear-gradient(90deg, #bfd0f3ff, #71b5f0ff)", width: "120px", height: '100px', top: '13px' }} />
                    <LeftData>
                        <TbCalculator style={{ marginTop: '9px' }} />
                    </LeftData>
                    <RightData>
                        <Text>$203K</Text>
                        <Text style={{ fontWeight: 'normal' }}>Total Income</Text>
                    </RightData>
                </DemoPaper>

                <DemoPaper square={false} sx={{ bgcolor: 'background.paper' }}>
                    <BackgroundCircle style={{ background: 'rgba(238, 216, 144, 1)', width: "100px", height: '80px', top: '-28px' }} />
                    <BackgroundCircle style={{ background: "linear-gradient(90deg, #fff8e1, #f0cc71ff)", width: "120px", height: '100px', top: '13px', border: '1px solid yellow' }} />
                    <LeftData style={{ background: 'rgb(251,230,230)', color: 'rgb(198,40,40)' }}>
                        <MdVideoCameraFront style={{ marginTop: '9px' }} />
                    </LeftData>
                    <RightData>
                        <Text sx={{color: 'text.primary' }}>$201K</Text>
                        <Text style={{ fontWeight: 'normal', color: 'gray' }}>Meeting attends</Text>
                    </RightData>
                </DemoPaper>

                <DemoPaper square={false} sx={{ bgcolor: 'background.paper' }}>
                    <BackgroundCircle style={{ background: 'rgba(238, 216, 144, 1)', width: "100px", height: '80px', top: '-28px' }} />
                    <BackgroundCircle style={{ background: "linear-gradient(90deg, #fff8e1, #f0cc71ff)", width: "120px", height: '100px', top: '13px', border: '1px solid yellow' }} />
                    <LeftData style={{ background: 'rgb(255,248,225)', color: 'rgb(255,193,7)' }}>
                        <StorefrontIcon style={{ marginTop: '12px' }} />
                    </LeftData>
                    <RightData>
                        <Text sx={{color: 'text.primary' }}>$234K</Text>
                        <Text style={{ fontWeight: 'normal', color: 'gray' }}>Sales Improve</Text>
                    </RightData>
                </DemoPaper>

                <DemoPaper square={false} sx={{ bgcolor: 'background.paper' }}>
                    <BackgroundCircle style={{ background: 'rgba(238, 216, 144, 1)', width: "100px", height: '80px', top: '-28px' }} />
                    <BackgroundCircle style={{ background: "linear-gradient(90deg, #fff8e1, #f0cc71ff)", width: "120px", height: '100px', top: '13px', border: '1px solid yellow' }} />
                    <LeftData style={{ background: 'rgb(255,248,225)', color: 'rgb(255,193,7)' }}>
                        <TiUserAdd style={{ marginTop: '12px' }} />
                    </LeftData>
                    <RightData>
                        <Text sx={{color: 'text.primary' }}>$234K</Text>
                        <Text style={{ fontWeight: 'normal', color: 'gray' }}>New Users</Text>
                    </RightData>
                </DemoPaper>

            </Stack>
        </MainDiv>
    );
}