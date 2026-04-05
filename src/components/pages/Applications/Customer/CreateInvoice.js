import React, { useState } from 'react';
import {
  Box, Typography, TextField, Grid, MenuItem, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Button, IconButton,
  Paper, Divider,
  styled
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const Main = styled('div')(() => ({
  width: '100%',           
  maxWidth: '1200px',      
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  padding: '0 16px',       
  boxSizing: 'border-box', 
}));


export default function CreateInvoice() {

  const [todoList, setTodoList] = useState([
    { id: 1, desc: 'Logo Design', sub: 'lorem ipsum dolor sit amet...', qty: 6, price: 200, total: 1200 },
    { id: 2, desc: 'Landing Page', sub: 'lorem ipsum dolor sit amet...', qty: 7, price: 100, total: 700 },
    { id: 3, desc: 'Admin Template', sub: 'lorem ipsum dolor sit amet...', qty: 5, price: 150, total: 750 },
  ]);

  const handleDelete = (index) => {
    setTodoList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2,          
    width: '100%',
    boxSizing: 'border-box',
  }}
    >
      <Main>
        <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, border: '1px solid #e0e0e0' }}>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>Create Invoice</Typography>
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" fontSize={15}>Invoice Number *</Typography>
            <TextField
              fullWidth
              placeholder='Invoice #'
              size='medium'
              sx={{ mt: 0.5, width: { xs: '100%', lg: '360px' }, bgcolor: 'background.paper' }}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', gap: 2,  flexWrap: { xs: 'wrap', sm: 'nowrap' }}}>
            {['Customer Name*', 'Customer Email *', 'Contact Customer Number *'].map((label, i) => (
              <Box key={i} sx={{ width: { xs: '100%', sm: '48%', lg: '360px' } }}>
                <Typography variant="caption" fontSize={15}>{label}</Typography>
                <TextField fullWidth placeholder={label} sx={{ mt: 0.5, bgcolor: 'background.paper' }} />
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="caption" fontSize={15}>Customer Address*</Typography>
            <TextField fullWidth placeholder='Enter Address' sx={{ mt: 0.5,bgcolor: 'background.paper' }} />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: 'flex', gap: 2,  flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <Box sx={{ width: { xs: '100%', lg: '550px' } }}>
              <Typography variant="caption" fontSize={15}>Invoice Date *</Typography>
              <TextField
                fullWidth
                defaultValue="31/12/2025"
                sx={{ mt: 0.5 }}
                InputProps={{ endAdornment: <CalendarTodayIcon sx={{ fontSize: 18, color: 'gray' }} /> }}
              />
            </Box>
            <Box sx={{ width: { xs: '100%', lg: '550px' } }}>
              <Typography variant="caption" fontSize={15}>Status *</Typography>
              <TextField select fullWidth defaultValue="Pending" sx={{ mt: 0.5 }}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </TextField>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          <TableContainer sx={{ overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ '& th': { border: 0, fontWeight: 'bold', fontSize: '13px' } }}>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todoList.map((item, index) => (
                  <TableRow key={item.id || index}>
                    <TableCell>
                      <Typography fontWeight="bold">{item.desc}</Typography>
                      <Typography variant="caption" color="text.secondary">{item.sub}</Typography>
                    </TableCell>
                    <TableCell align="right">{item.qty}</TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="right">${item.total}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" sx={{ color: '#ff7875' }} onClick={() => handleDelete(index)}>
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button startIcon={<AddIcon />} sx={{ mt: 2, textTransform: 'none', fontSize: '13px' }}>Add Item</Button>

          <Box sx={{ mt: 4, p: 3, bgcolor: 'background.default', borderRadius: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} sm={6} md={4}>
                {[
                  ['Sub Total', '$2650'],
                  ['Taxes (10%)', '$265'],
                  ['Discount (5%)', '$145.75'],
                ].map(([label, value]) => (
                  <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption" fontWeight="bold">{label} :</Typography>
                    <Typography variant="caption">{value}</Typography>
                  </Box>
                ))}
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography fontWeight="bold" color="primary">Total :</Typography>
                  <Typography fontWeight="bold" color="primary">$2769.25</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="caption" fontWeight="bold">Terms and Condition: *</Typography>
            <TextField fullWidth multiline rows={1} defaultValue="I acknowledge terms and conditions." size="small" sx={{ mt: 0.5 }} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Button variant="contained" sx={{ px: 4, py: 1, textTransform: 'none', bgcolor: '#2196f3' }}>Add Invoice</Button>
          </Box>

        </Paper>
      </Main>
    </Box>
  );
}
