import React from "react"
// import CardsGraph from "./linegraph";
// import CardsGraph from "./linegraphs";

import { 
  Box, Typography,
  Breadcrumbs,
  styled,
  Chip,IconButton,
  Avatar,
  Divider,
  TextField,
  Pagination,
  Select,
  MenuItem
} from '@mui/material';
// import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { CiChat1 } from "react-icons/ci";
import { MdBlock } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import CardsGraph from "../../../invoicePage/linegraphs";
import { Link as RouterLink } from "react-router-dom";

function createData(id,date,avatar , name,email,paymentDate,due,tax, action) {
  return {id,date,avatar , name,email,paymentDate,due,tax, action, };
}

const rows = [
createData(
  790841,
  '10.12.2020',
  "/images/socialImg-5.png",
    "Curtis",
    "wiegand@hotmail.com",
    '17-12-2025',
    '18/1/2026',
    '2.5%',

  ),
createData(
  790842,
  '10.12.2020',

      "/images/follow-3.png",

    "Xavier",
    "tyrell86@company.com",
    '15-12-2025',
    '18/8/2026',
    '2.5%',
  ),
createData(
  790843,
  '10.12.2020',



      "/images/socialImg-6.png",

    "Lola",
    "aufderhar56@yahoo.com",
    '30-12-2025',
    '10/1/2026',
    '2.5%',

  ),
  createData(
  790844,
  '10.12.2020',


      "/images/socialImg-7.png",

    "Milton",
    "dikinson49@hotmail.com",
    '10-12-2025',
    '10/07/2026',
    '2.5%',
    
  ),
  createData(
  790845,
  '10.12.2020',


      "/images/follow-6.png",

    "Lysanne",
    "zack.turner49@company.com",
    '13-12-2025',
    '15/1/2026',
    '2.5%',   
  ),
 createData(
  790846,
  '10.12.2020',

      "/images/follow-1.png",

    "Bonita",
    "keebler57@company.com",
    '14-12-2025',
    '18/02/2026',
    '2.5%',
  ),
 createData(
  790847,
  '10.12.2020',

      "/images/follow-2.png",

    "Retta",
    "mathew92@yahoo.com",
    '17-11-2025',
    '18/04/2026',
    '2.5%',
  ),
   createData(
  790848,
  '10.12.2020',

      "/images/follow-3.png",

    "Zoie",
    "hulda1@hotmail.com",
    '17-10-2025',
    '04/1/2026',
    '2.5%',
  ),
   createData(
  790849,
  '10.12.2020',

      "/images/follow-4.png",

    "Easton",
    "hilpert66@hotmail.com",
    '09-12-2025',
    '18/01/2026',
    '2.5%',
  ),
   createData(
  790850,
  '10.12.2020',

      "/images/follow-1.png",

    "Brianne",
    "noe45@hotmail.com",
    '05-12-2025',
    '05/1/2026',
    '2.5%',
  ),
    createData(
  790851,
  '10.03.2020',

      "/images/follow-3.png",

    "Charlie",
    "charlie3@hotmail.com",
    '05-02-2025',
    '05/02/2026',
    '2.5%',
  ),
    createData(
  790852,
  '11.03.2020',

      "/images/socialImg-5.png",

    "Elsa",
    "noe45@hotmail.com",
    '05-10-2025',
    '05/09/2026',
    '2.5%',
  ),
    createData(
  790853,
  '12.11.2020',

      "/images/socialImg-7.png",

    "Antonne",
    "noe45@hotmail.com",
    '11-12-2025',
    '01/05/2026',
    '2.5%',
  ),
    createData(
  790854,
  '10.12.2020',

      "/images/follow-2.png",

    "John 20",
    "noe45@hotmail.com",
    '05-12-2025',
    '05/1/2026',
    '2.5%',
  ),
    createData(
  790855,
  '12.10.2020',

      "/images/socialImg-6.png",

    "Joseph William",
    "noe45@hotmail.com",
    '20-04-2025',
    '30/02/2026',
    '2.5%',
  ),
    createData(
  790856,
  '08.07.2020',

      "/images/follow-4.png",

    "Joseph William 09",
    "noe45@hotmail.com",
    '05-12-2025',
    '05/1/2026',
    '2.5%',
  ),
    createData(
  790857,
  '10.02.2020',

      "/images/follow-5.png",

    "Joseph William 01",
    "noe45@hotmail.com",
    '01-02-2025',
    '01/09/2026',
    '2.5%',
  ),
    createData(
  790858,
  '18.05.2020',

      "/images/socialImg-5.png",

    "Joseph William Sed",
    "noe45@hotmail.com",
    '05-08-2025',
    '05/09/2026',
    '2.5%',
  ),
    createData(
  790859,
  '10.11.2020',

      "/images/socialImg-7.png",

    "Sara Soudan 8",
    "noe45@hotmail.com",
    '05-10-2025',
    '05/01/2026',
    '2.5%',
  ),
    createData(
  790860,
  '10.12.2021',

      "/images/follow-6.png",

    "Brianne",
    "noe45@hotmail.com",
    '05-12-2024',
    '05/1/2025',
    '2.5%',
  ),
];
const statusStyles = {
  Active: {
    color: "#15803d",
    bg: "#dcfce7",
  },
  Rejected: {
    color: "#b91c1c",
    bg: "#fee2e2",
  },
  Pending: {
    color: "#a16207",
    bg: "#fef3c7",
  },
};
const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Reciept ID',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Issued Date',
    align: 'center'
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Account Name',
    align: 'right'

  },
  {
    id: 'paymentDate',
    numeric: true,
    disablePadding: false,
    label: 'Date of Payment',
    // align: 'left'

  },
  {
    id: 'due',
    numeric: true,
    disablePadding: false,
    label: 'Due Date',
    // align: 'left'

  },
  {
    id: 'tax',
    numeric: true,
    disablePadding: false,
    label: 'Tax',
    // align: 'left'

  },
   {
    id: 'active',
    numeric: true,
    disablePadding: false,
    label: 'Active',
    // align: 'left'

  },
];
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}



function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
         <TextField
sx={{width:{xs:'400px',sm:"400px",md:'200px'},marginRight:'900px' }}
              placeholder="Search"
              fullWidth
              size="small"
       
            />
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
// 
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
const MainDiv = styled('div')(()=>({
    width:'100%',
    height:'130px',
    display:'flex',
    gap:'25px',
    marginTop:'20px',
}))
const Cards = styled('div')(()=>({
    width: '300px',
    height:'100%',
    background:'white',
    borderRadius:'10px',
    border:'1px solid gray'
}))
const FirstDiv = styled('div')(()=>({
    width:'90%',
    height:'auto',
    marginLeft:'10px',
    marginTop:'10px'
}))
const Text = styled('p')(()=>({
    fontSize:'15px',
    color:'gray',
    margin:0,
    padding:0,
    fontFamily:'sans-serif'
}))
export default function PaymentList(params) {
   const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return( 
    <Main>

 <SectionOne sx={{bgcolor:'background.paper'}}>
            <Typography sx={{fontWeight:600}}>List</Typography>
             <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
                 <Link component={RouterLink} to="/default">

  <IoHome size={16} />
</Link>
            <Typography sx={{ color:"inherit",fontSize:'13px' }}>Payment</Typography>
              <Typography sx={{ color:"inherit",fontSize:'13px' }}>List</Typography>
            </Breadcrumbs>
          </div>
       </SectionOne>
{/*  */}

<Box sx={{padding:'20px', bgcolor: 'background.paper', height: {xs:'655px',md:'auto'}}}>
<Typography fontSize={15} fontWeight={600} >Overview</Typography>
{/*  */}
 

<Box sx={{ width:'100%',
    height:{xs:'150px',md:'130px'},
    display:'flex',
    flexDirection:{xs:'column',sm:'row',md:'row'},
    gap:'25px',
    marginTop:'20px',}}>

<Box sx={{  width: '300px',
    height:'100%',
    bgcolor:'background.paper',
    paddingBottom:{xs:'20px',md:'0px'},
    borderRadius:'10px',
    border:'1px solid gray'}}>

   <Box sx={{width:'90%',
    height:'auto',
    marginLeft:'10px',
    marginTop:'10px'}}>

                    <Typography sx={{fontSize:'15px',
    color:'gray',
    margin:0,
    padding:0,
    fontFamily:'sans-serif'}}>New</Typography>
                    <Typography sx={{
    margin:0,
    padding:0,
    fontFamily:'sans-serif',
    fontWeight:'bold',color:'black',marginTop:'6px',fontSize:'17px'}}>180</Typography>
<CardsGraph/>
                </Box>



</Box>
{/* 2 */}
<Box sx={{  width: '300px',
    height:'100%',
    bgcolor:'background.paper',
    paddingBottom:{xs:'20px',md:'0px'},
    borderRadius:'10px',
    border:'1px solid gray'}}>

   <Box sx={{width:'90%',
    height:'auto',
    marginLeft:'10px',
    marginTop:'10px'}}>

                    <Typography sx={{fontSize:'15px',
    color:'gray',
    margin:0,
    padding:0,
    fontFamily:'sans-serif'}}>Paid</Typography>
                    <Typography sx={{
    margin:0,
    padding:0,
    fontFamily:'sans-serif',
    fontWeight:'bold',color:'black',marginTop:'6px',fontSize:'17px'}}>25, 890</Typography>
<CardsGraph color="rgb(0,200,83)"/>
                </Box>



</Box>
{/* 3 */}
<Box sx={{  width: '300px',
    height:'100%',
    bgcolor:'background.paper',
    paddingBottom:{xs:'20px',md:'0px'},
    borderRadius:'10px',
    border:'1px solid gray'}}>

   <Box sx={{width:'90%',
    height:'auto',
    marginLeft:'10px',
    marginTop:'10px'}}>

                    <Typography sx={{fontSize:'15px',
    color:'gray',
    margin:0,
    padding:0,
    fontFamily:'sans-serif'}}>Pending</Typography>
                    <Typography sx={{
    margin:0,
    padding:0,
    fontFamily:'sans-serif',
    fontWeight:'bold',color:'black',marginTop:'6px',fontSize:'17px'}}>3400</Typography>
<CardsGraph color="rgb(138,104,200)"/>
                </Box>



</Box>
{/* 4 */}
<Box sx={{  width: '300px',
    height:'100%',
    bgcolor:'background.paper',
    paddingBottom:{xs:'20px',md:'0px'},
    borderRadius:'10px',
    border:'1px solid gray'}}>

   <Box sx={{width:'90%',
    height:'auto',
    marginLeft:'10px',
    marginTop:'10px'}}>

                    <Typography sx={{fontSize:'15px',
    color:'gray',
    margin:0,
    padding:0,
    fontFamily:'sans-serif'}}>Overdue</Typography>
                    <Typography sx={{
    margin:0,
    padding:0,
    fontFamily:'sans-serif',
    fontWeight:'bold',color:'black',marginTop:'6px',fontSize:'17px'}}>55, 865</Typography>
<CardsGraph color="rgb(255,175,151)" labelText="overdue"/>
                </Box>



</Box>
    </Box>




{/*  */}

{/*  */}
</Box>
<Box sx={{ bgcolor: 'background.paper', minHeight: 'auto' }}>
  
  
  <Box sx={{ padding: 3, bgcolor: "background.paper",borderRadius:'10px' }}>
  
        <Divider sx={{marginTop:'10px',marginBottom:'20px'}}/>
  
 <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750,height:'500px' }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer'}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                   <TableCell>#{row.id}</TableCell>
                   <TableCell>{row.date}</TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{width:'200px'}}
                    >
                       <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <Avatar
      src={row.avatar}
      sx={{
        width: 50,
        height: 50,
        borderRadius: "100%",   
      }}
    />
  
    <Box>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#111827",
        }}
      >
        {row.name}
      </Typography>
  
      <Typography
        sx={{
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        {row.email}
      </Typography>
    </Box>
  </Box>
  </TableCell>
                      
                    </TableCell>
                   
                    <TableCell >{row.paymentDate}</TableCell>
                    <TableCell >{row.due}</TableCell>
                    <TableCell >{row.tax}</TableCell>
                
                    <TableCell >
                                   <Box sx={{ display: "flex", gap: 1 }}>
                       <IconButton>
                         <CiChat1 fontSize="medium" style={{color:'rgb(33,150,243)'}}/>
                       </IconButton>
                       <IconButton>
                         <MdBlock fontSize="medium" style={{color:'red'}}/>
                       </IconButton>
                     </Box>
                                 </TableCell>

                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
       
 <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />        
      </Paper>


      
    
      </Box>
  
  
  
  
  
  
  
   </Box>
    </Main>
  )
} 
  
