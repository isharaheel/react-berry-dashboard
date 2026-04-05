import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import AnalyticGraph from "./AnalyticGraph";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import AnalysticsTable from "./AnalyticsTable";
import SensorsIcon from '@mui/icons-material/Sensors';
import { MdOutlineShare } from "react-icons/md";
import { TbChartBubble } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import Revenue from "./Revenue";

export const Main = styled('div')(() => ({
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  padding: '16px',
  boxSizing: 'border-box',
  height: 'auto', 
  minHeight: '0', 
}));


export default function AnalyticsPage() {
return (
<Main>
<Box sx={{  width: '100%',margin: '20px auto',display: 'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap: '20px',boxSizing: 'border-box',overflowX: 'hidden'}}>  
<Box sx={{width:{xs:'100%',sm:'100%',md:'60%'},height:'auto',display:'flex',flexDirection:'column',gap:'20px'}}>
<AnalyticGraph/>
<Box sx={{width: '100%',display: 'flex',gap: '20px',flexWrap: 'wrap',boxSizing: 'border-box',}}>
<Box sx={{flex: '1 1 calc(50% - 20px)',minWidth: '260px',minHeight: '130px',background: 'rgb(103,58,183)',borderRadius: '10px',display: 'flex',justifyContent: 'space-between',padding: '20px',boxSizing: 'border-box',overflow: 'hidden'}}>
<Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center',flex: 1,minWidth: 0}}>
<Typography sx={{margin: 0,padding: 0,color: 'white',fontFamily: 'sans-serif',fontSize: '15px',
marginBottom: '5px',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>Revenue</Typography>
<Typography sx={{margin: 0,padding: 0,color: 'white',fontFamily: 'sans-serif',marginBottom: '5p/x',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',fontWeight: 'bold',fontSize: '24px',margin: '5px 0'}}>
$42,562
</Typography>
<Typography sx={{margin: 0,padding: 0,color: 'white',fontFamily: 'sans-serif',marginBottom:'5px',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',fontSize: '14px', opacity: 0.8 }}>$50,032 Last Month</Typography>
</Box>
<Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginLeft: '10px',flexShrink: 0}}>
<Box sx={{width: '85px',height: '85px',borderRadius: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center',background: 'rgb(126,88,194)',flexShrink: 0, }}>
<LuCircleDollarSign style={{fontSize: '70px', color: 'rgb(179,157,219)' }} />
</Box>
</Box>
</Box >
<Box sx={{flex: '1 1 calc(50% - 20px)',minWidth: '260px',minHeight: '130px',background: 'rgb(33,150,243)',borderRadius: '10px',display: 'flex',justifyContent: 'space-between',padding: '20px',boxSizing: 'border-box',overflow: 'hidden'}}>
<Box sx={{ display: 'flex',
flexDirection: 'column', justifyContent: 'center', flex: 1,  minWidth: 0, }}>
<Typography sx={{margin: 0, padding: 0, color: 'white', fontFamily: 'sans-serif', fontSize: '15px', marginBottom: '5px', whiteSpace: 'nowrap', overflow: 'hidden',textOverflow: 'ellipsis',}}>Orders Received</Typography>
<Typography sx={{margin: 0,padding: 0,color: 'white',fontFamily: 'sans-serif',marginBottom: '5p/x',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',fontWeight: 'bold', fontSize: '24px', margin: '5px 0'}}>
486</Typography>
<Typography  sx={{margin: 0,padding: 0,color: 'white',fontFamily: 'sans-serif',marginBottom:'5px',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis',fontSize: '14px', opacity: 0.8 }}>20% Increase</Typography>
</Box>
<Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginLeft: '10px',flexShrink: 0, }}>
<Box sx={{width: '85px', height: '85px',borderRadius: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center',background: 'rgb(67,166,245)',flexShrink: 0, }} >      <FaRegUserCircle style={{ fontSize: '70px', color: 'rgb(144,203,249)' }} />
</Box>
</Box>
</Box >
</Box>
<AnalysticsTable/>
</Box>
<Box sx={{width:{xs:'100%',sm:'100%',md:'40%'},height:'auto',display:'flex',flexDirection:'column',gap:'20px'}}>
<Box sx={{width: '100%',height: '200px', borderRadius: '10px',display: 'flex',flexDirection: 'column',bgcolor:'background.default',overflow: 'hidden',border: '1px solid lightgray',boxSizing: 'border-box'}}>
<Box sx={{width: '100%',height: '100px', display: 'flex',}}>
<Box sx={{width: '50%',height: '100%',border: '0.5px solid lightgray',bgcolor: 'background.paper',alignItems: 'center',justifyContent: 'center',display: 'flex',padding: '10px 0',boxSizing: 'border-box',}}>
<Box sx={{width: 'auto',height: '80%',display: 'flex',alignItems: 'center',gap: '15px' }}>
<Box sx={{width: '40px',height: '40px',background: 'rgb(227,242,253)',borderRadius: "7px",display: 'flex',alignItems: 'center',justifyContent: 'center',flexShrink: 0}}>
<MdOutlineShare style={{ fontSize: '22px', color: 'rgb(103,58,183)' }} />
</Box>
<Typography sx={{color: 'text.primary',fontFamily: 'sans-serif',padding: 0,margin: 0,fontSize: '14px',fontWeight: '500',textAlign: 'left', lineHeight: '1.2'}}>1000<br /><span style={{color: 'gray', fontWeight: 'normal', fontSize: '12px'}}>Shares</span></Typography>
</Box>
</Box>

<Box sx={{width: '50%',height: '100%',border: '0.5px solid lightgray',bgcolor: 'background.paper',alignItems: 'center',justifyContent: 'center',display: 'flex',padding: '10px 0',boxSizing: 'border-box'}}>
<Box sx={{width: 'auto',height: '80%',display: 'flex',alignItems: 'center',gap: '15px' }}>
<Box sx={{width: '40px',height: '40px',background: 'rgb(227,242,253)',borderRadius: "7px",display: 'flex',alignItems: 'center',justifyContent: 'center',flexShrink: 0}}>
<SensorsIcon style={{ fontSize: '22px', color: 'rgb(103,58,183)' }} />
</Box>
<Typography sx={{color: 'text.primary',fontFamily: 'sans-serif',padding: 0,margin: 0,fontSize: '14px',fontWeight: '500',textAlign: 'left', lineHeight: '1.2'}}>600<br /><span style={{color: 'gray', fontWeight: 'normal', fontSize: '12px'}}>Network</span></Typography>
</Box>
</Box>
</Box>
<Box sx={{width: '100%',height: '100px', display: 'flex'}}>
<Box sx={{width: '50%',height: '100%',border: '0.5px solid lightgray',bgcolor: 'background.paper',alignItems: 'center',justifyContent: 'center',display: 'flex',padding: '10px 0',boxSizing: 'border-box'}}>
<Box sx={{width: 'auto',height: '80%',display: 'flex',alignItems: 'center',gap: '15px' }}>
<Box sx={{width: '40px',height: '40px',background: 'rgb(227,242,253)',borderRadius: "7px",display: 'flex',alignItems: 'center',justifyContent: 'center',flexShrink: 0}}>
<TbChartBubble style={{ fontSize: '22px', color: 'rgb(103,58,183)' }} />
</Box>
<Typography sx={{color: 'text.primary',fontFamily: 'sans-serif',padding: 0,margin: 0,fontSize: '14px',fontWeight: '500',textAlign: 'left', lineHeight: '1.2'}}>3550<br /><span style={{color: 'gray', fontWeight: 'normal', fontSize: '12px'}}>Returns</span></Typography>
</Box>
</Box>
<Box sx={{width: '50%',height: '100%',border: '0.5px solid lightgray',bgcolor: 'background.paper',alignItems: 'center',justifyContent: 'center',display: 'flex',padding: '10px 0',boxSizing: 'border-box'}}>
<Box sx={{width: 'auto',height: '80%',display: 'flex',alignItems: 'center',gap: '15px' }}>
<Box sx={{width: '40px',height: '40px',background: 'rgb(227,242,253)',borderRadius: "7px",display: 'flex',alignItems: 'center',justifyContent: 'center',flexShrink: 0}}>
<CiCreditCard1 style={{ fontSize: '24px', color: 'rgb(103,58,183)' }} />
</Box>
<Typography sx={{color: 'text.primary',fontFamily: 'sans-serif',padding: 0,margin: 0,fontSize: '14px',fontWeight: '500',textAlign: 'left', lineHeight: '1.2'}}>100%<br /><span style={{color: 'gray', fontWeight: 'normal', fontSize: '12px'}}>Order</span></Typography>
</Box>
</Box>
</Box>
</Box>
<Revenue/>
<Box sx={{width: '100%',height: 'auto',display: 'flex',flexDirection: 'column',borderRadius:'10px',gap: '20px',boxSizing: 'border-box'}}>
<Box sx={{width: '100%',minHeight: '100px',borderRadius: '10px',textAlign: 'center',padding:'15px 0',margin: 0,display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',boxSizing: 'border-box', background: 'rgb(103,58,183)'}}>
<Typography sx={{  fontSize: '19px',color: 'white',padding: 0,margin: 0,fontFamily:'sans-serif',fontWeight: 'bold'}}>1,650</Typography>
<Typography sx={{ color: 'white',padding: 0,margin: 0,fontFamily: 'sans-serif',marginTop: '5px', fontSize: '15px'}}>Daily User</Typography>
</Box>
      
<Box sx={{width: '100%',minHeight: '100px',borderRadius: '10px',textAlign: 'center',padding:'15px 0',margin: 0,display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',boxSizing: 'border-box', background: 'rgb(33,150,243)'}}>
<Typography sx={{fontSize: '19px',color: 'white',padding: 0,margin: 0,fontFamily:'sans-serif',fontWeight: 'bold' }}>1K</Typography>

<Typography sx={{color: 'white',padding: 0,margin: 0,fontFamily: 'sans-serif',marginTop: '5px', fontSize: '15px'}}>Daily Page View</Typography>
</Box>
</Box>
</Box>
</Box>
</Main>
  
  );
}