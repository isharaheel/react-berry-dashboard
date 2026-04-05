import React from "react";
import { 
  Box, Typography, TextField, MenuItem, Button, Stack, 
  Table, TableBody, TableCell, TableHead, TableRow, Select, FormControl, 
  Breadcrumbs, styled,
  TableContainer,
  Paper
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

// Styled components
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

export default function PaymentCreate() {
  return (
    <Main>
      {/* Breadcrumb Section */}
      <SectionOne sx={{bgcolor:'background.paper'}}>
        <Typography sx={{ fontWeight: 600 }}>Create</Typography>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <RouterLink to="/default" style={{ display: 'flex', alignItems: 'center', color: 'text.home' }}>
              <IoHome size={16} />
            </RouterLink>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>Payment</Typography>
            <Typography sx={{ color: "inherit", fontSize: '13px' }}>Create</Typography>
          </Breadcrumbs>
        </div>
      </SectionOne>

      <Box sx={{ paddingTop: '10px', paddingBottom: '20px', bgcolor: 'background.paper', minHeight: 'auto', borderRadius: '10px' }}>
        <Typography variant="h6" fontWeight={500} sx={{ mb: 3, marginLeft: '20px' }}>
          Add New Payment Received
        </Typography>

        {/* Top Form Section */}
        <Box sx={{ bgcolor: 'background.create', p: 3, borderRadius: '8px 8px 0 0', border: '1px solid #d1e3f5' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
            <FormControl sx={{ minWidth: { xs: '100%', sm: 300 }, bgcolor: 'background.default' }}>
              <Select displayEmpty value="" size="small">
                <MenuItem value="">Select Client</MenuItem>
              </Select>
            </FormControl>
            <Button startIcon={<span>+</span>} sx={{ textTransform: 'none', fontWeight: 600, width: { xs: '100%', sm: 'auto' } }}>
              New Client
            </Button>
          </Stack>
        </Box>

        {/* Main Inputs */}
        <Box sx={{ bgcolor: 'background.paper', p: 3, border: '1px solid #e0e0e0', borderTop: 0 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
            <TextField sx={{ width: { xs: '100%', md: '300px' } }} size="small" placeholder="Payment Receipt ID" label="Payment Receipt ID" />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
            <FormControl sx={{ width: { xs: '100%', md: '440px' } }} size="small">
              <Select displayEmpty value="" size="small">
                <MenuItem value="">Payment Method</MenuItem>
              </Select>
            </FormControl>
            <TextField sx={{ width: { xs: '100%', md: '440px' } }} size="small" label="Received Amount" placeholder="Received Amount" />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
            <TextField sx={{ width: { xs: '100%', md: '440px' } }} size="small" label="Reference" placeholder="Reference" />
            <FormControl sx={{ width: { xs: '100%', md: '440px' } }} size="small">
              <Select displayEmpty value="" size="small">
                <MenuItem value="">Date</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>

        {/* Unpaid Invoice Table Section */}
        <Box sx={{ mt: 3, bgcolor: 'white', borderRadius: 1 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle2" fontWeight={500}>Unpaid Invoice</Typography>
            <Select size="small" defaultValue="" displayEmpty sx={{ minWidth: 150 }}>
              <MenuItem value="">Select Month</MenuItem>
            </Select>
          </Stack>

          {/* Table stays fixed, no scroll */}
        <TableContainer
  component={Paper}
  sx={{
    width: "100%",
    overflowX: { xs: "auto", md: "visible" },
    borderBottom:'none'
  }}
>
  <Table
    sx={{
      minWidth: 600, 
    }}
  >
    <TableHead sx={{ bgcolor: "background.paper" }}>
      <TableRow>
        <TableCell align="center" sx={{ fontWeight: 600 }}>
          Issue Date
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 600 }}>
          Invoice No.
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 600 }}>
          Due Date
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 600 }}>
          Due Amount
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 600 }}>
          Payment Value
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      <TableRow>
        <TableCell colSpan={5} align="center" sx={{ py: 4, color: "text.secondary"}}>
          No Invoice / Select Client
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>


          <Box sx={{ p: 2, bgcolor:'background.default',marginBottom:'20px'}}>
            <TextField fullWidth multiline rows={2} placeholder="Add Note" variant="outlined" sx={{bgcolor:'background.paper'}}/>
          </Box>
        </Box>

        {/* Footer Actions */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end" sx={{margin:{xs:'10px auto',md:'0px'}, mt: 4, mr: 2 ,width:{xs:'95%',md:'auto'},paddingRight:{xs:'0px',md:'20px'}}}>
          <Button 
            variant="contained" 
            startIcon={<CheckIcon />} 
            sx={{ bgcolor: '#2196f3', textTransform: 'none', width: { xs: '100%', sm: 'auto' } ,height:'40px'}}
          >
            Save & View Receipt
          </Button>
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#2196f3', textTransform: 'none', width: { xs: '100%', sm: 'auto' },height:'40px' }}
          >
            Save
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ textTransform: 'none', width: { xs: '100%', sm: 'auto' } }}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Main>
  );
}
