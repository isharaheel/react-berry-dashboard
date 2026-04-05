import React from "react"
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Link,
  IconButton,
  styled,
  Breadcrumbs
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import LinkIcon from '@mui/icons-material/Link';
import { IoHome } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

const receiptData = {
    id: "00051449",
    amount: 8593,
    reference: "#00016255",
    createDate: "10/12/2025",
    invoices: [
      { id: "#8795646525453", issueDate: "7/6/2022", dueDate: "7/8/2022", dueAmount: 3000, paymentValue: 3000 },
      { id: "#8795646525452", issueDate: "7/15/2022", dueDate: "2/15/2022", dueAmount: 2030, paymentValue: 2030 },
      { id: "#8795646525451", issueDate: "05/01/2022", dueDate: "06/02/2022", dueAmount: 1000, paymentValue: 1000 },
      { id: "#8795646525455", issueDate: "5/5/2022", dueDate: "7/11/2022", dueAmount: 3000, paymentValue: 2563 },
    ]
  };
const details = [
{ label: 'No. of Invoice', val: receiptData.invoices.length },
{ label: 'Method', val: 'Case' },
{ label: 'Amount', val: `$${receiptData.amount}` },
{ label: 'Reference', val: receiptData.reference },
{ label: 'Bank charges', val: '$76' },
{ label: 'Create Date', val: receiptData.createDate }
]  
const TableDetails =['Issue Date', 'Invoice No.', 'Due Date', 'Due Amount', 'Payment Value']
export const Main = styled('div')(() => ({
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  padding: '16px',
  boxSizing: 'border-box',
  height: 'auto', // let it grow naturally
  minHeight: '0', // remove minHeight
}));


export const SectionOne = styled("div")(() => ({
  width: "100%",
  height: "35px",
  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  // background: "white",
  boxSizing: "border-box",
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function PaymentDetails(params) {
  return(
    <Main>
      <SectionOne sx={{bgcolor:'background.paper'}}>
            <Typography sx={{fontWeight:600}}>Details</Typography>
             <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
            <Link component={RouterLink} to="/default">

  <IoHome size={16} />
</Link>
            <Typography sx={{ color:"inherit",fontSize:'13px' }}>Payment</Typography>
              <Typography sx={{ color:"inherit",fontSize:'13px' }}>Details</Typography>
            </Breadcrumbs>
          </div>
       </SectionOne>
    <Box sx={{bgcolor: 'background.paper', minHeight: '100vh',borderRadiu:'10px' }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: '12px' }}>
        
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#121926' }}>
            Payment Receipt Deatails <Box component="span" sx={{ color: '#919eab', fontWeight: 400 }}>(#{receiptData.id})</Box>
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<PrintIcon />} 
            sx={{ bgcolor: '#2196f3', borderRadius: '8px', textTransform: 'none', px: 3 }}
          >
            Print
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', py: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: '200px' }}>
            <Avatar src="/images/follow-3.png" sx={{ width: 45, height: 45 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Material Ui-SAAS</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="caption" color="textSecondary">CT-205</Typography>
                <Button sx={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', fontWeight: 500 ,textTransform:"none"}}>
                  Get Link <LinkIcon sx={{ fontSize: 14, ml: 0.5 }} />
                </Button>
              </Box>
            </Box>
          </Box>

          {details.map((item, i) => (
            <Box key={i} sx={{ textAlign: 'center', px: 2 }}>
              <Typography variant="caption" sx={{ color: '#697586', display: 'block', mb: 0.5 }}>{item.label}</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{item.val}</Typography>
            </Box>
          ))}
        </Box>

        <Grid container justifyContent={'space-between'} sx={{ mb: 6 }}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Bill To</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 0.5 }}>
              <Typography variant="body2" color="textSecondary">Address</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>128 Rue La Boétie, Paris, Île-de-France 75008, FR</Typography>
              <Typography variant="body2" color="textSecondary">Email</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>accounts@material-ui.com</Typography>
              <Typography variant="body2" color="textSecondary">SIREN</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>852357748</Typography>
              <Typography variant="body2" color="textSecondary">VAT</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>FR93852357748</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Ship To</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>128 Rue La Boétie, Paris, Île-de-France 75008, FR</Typography>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: 'rgb(238,238,238)' }}>
              <TableRow>
                {TableDetails.map((head) => (
                  <TableCell key={head} sx={{ fontWeight: 700, color: '#121926', borderBottom: 'none' }} align={head === 'Payment Value' ? 'right' : 'left'}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {receiptData.invoices.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: 'none', py: 2.5 }}>{row.issueDate}</TableCell>
                  <TableCell sx={{ borderBottom: 'none', py: 2.5 }}>{row.id}</TableCell>
                  <TableCell sx={{ borderBottom: 'none', py: 2.5 }}>{row.dueDate}</TableCell>
                  <TableCell sx={{ borderBottom: 'none', py: 2.5 }}>${row.dueAmount}</TableCell>
                  <TableCell align="right" sx={{ borderBottom: 'none', py: 2.5 }}>${row.paymentValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{alignItems:'right',bgcolor: 'background.amount',}}>

          <Box sx={{display:'flex',justifyContent:'flex-end',gap:{xs:'10px',md:"120px"}}}>
                <Typography sx={{ borderBottom: 'none', fontWeight:700,fontSize:{xs:'15px',md:"16px"},marginRight:{xs:'10px',md:'15px'}, py: 1 }}>Total Payment Amount :</Typography>
                <Typography align="right" sx={{ borderBottom: 'none', fontWeight: 700, py: 1 ,fontSize:{xs:'15px',md:"17px"},marginRight:{xs:'10px',md:'15px'}}}>$8593</Typography>
              </Box>
              <Box sx={{display:'flex',justifyContent:'flex-end',gap:{xs:'10px',md:"120px"} }}>
                <Typography sx={{ borderBottom: 'none', fontWeight: 700,fontSize:{xs:'15px',md:"16px"},marginRight:{xs:'10px',md:'15px'}, py: 1 }}>Total Due Amount :</Typography>
                <Typography align="right" sx={{ borderBottom: 'none', fontWeight: 700, py: 1 ,fontSize:{xs:'15px',md:"17px"},marginRight:{xs:'10px',md:'15px'}}}>$437</Typography>
              </Box>
        </Box>

        <Box sx={{ mt: 6, display: 'flex',flexDirection:{xs:'column',sm:'column',md:'row'}, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ maxWidth: '500px' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Notes</Typography>
            <Typography variant="body2" color="textSecondary">
              We appreciate your business. Should you need us to add VAT or extra notes let us know!
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>Have Question?</Typography>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>Support@Berrytheme.com</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
    </Main>
  )
} 
  