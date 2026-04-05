import React from "react";
import { FaCaretDown, FaSortDown, FaCaretUp } from "react-icons/fa";
import { Box, Divider, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

const data = [
  { icon: <FaSortDown />, name: "Bitcoin", price: "$45,000", color: 'red' },
  { icon: <FaCaretUp />, name: "More Web", price: "$1,200", color: 'green' },
  { icon: <FaSortDown />, name: "Ethereum", price: "$3,200", color: 'red' },
  { icon: <FaCaretUp />, name: "Neo", price: "$3,200", color: 'green' },
  { icon: <FaCaretDown />, name: "Ripple", price: "$3,200", color: 'red' },
  { icon: <FaSortDown />, name: "Bitcoin", price: "$45,000", color: 'red' },
  { icon: <FaCaretUp />, name: "More Web", price: "$1,200", color: 'green' },
  { icon: <FaSortDown />, name: "Ethereum", price: "$3,200", color: 'red' },
  { icon: <FaCaretUp />, name: "Neo", price: "$3,200", color: 'green' },
  { icon: <FaCaretDown />, name: "Ripple", price: "$3,200", color: 'red' },
];

export default function Revenue() {
return (
<Box sx={{width: '100%',height: '440px', borderRadius: '10px',background: 'background.paper',overflowY: 'auto', overflowX: 'hidden', border: '1px solid #e5e7eb',boxSizing: 'border-box',}}>
<Box sx={{position: 'sticky',top: 0,background: 'background.default',zIndex: 20,paddingTop: '20px',}}>
<Typography sx={{  fontSize: '18px',fontWeight: 'bold',fontFamily: 'sans-serif',marginLeft: '20px',marginBottom: '15px',color: 'text.primary'}}>Total Revenue</Typography>
<Divider sx={{ background: 'lightgray', height: '1px', border: 'none', margin: 0 }} />
</Box>
<Table 
sx={{ minWidth: '100%', tableLayout: 'fixed' }}>
<TableBody>
{data.map((row, index) => (
<TableRow key={index} sx={{ '&:last-child td': { border: 0 } }}>
<TableCell style={{color: row.color === 'red' ? 'red' : 'green', width: '40px', paddingLeft: '15px',paddingRight: '0px'}}>{row.icon}</TableCell>
<TableCell style={{ 
fontFamily: 'sans-serif', fontWeight: 500,fontSize: '14px',paddingLeft: '10px',whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>{row.name}</TableCell>
<TableCell align="right" style={{color: 'green',fontWeight: 'bold',paddingRight: '15px',  fontSize: '14px',width: '100px' }}>{row.price}
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</Box>
);
}