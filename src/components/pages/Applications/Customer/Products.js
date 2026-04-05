import { Breadcrumbs, Chip, Divider, MenuItem, Pagination, Select, styled, TextField,} from "@mui/material";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { BiDotsHorizontalRounded } from "react-icons/bi";

// 

function createData(id, name,category,price,date,qty,action) {
  return {
    id,
    name,
    category,price,date,qty,
    action
  };
}
const rows = [
  createData(
    790841,
    "Samsung TV 32” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ),
  createData(
    790955,
   "Iphone 11 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    820885,
    "Samsung TV 32” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    900836,
    "Samsung TV 36” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    910886,
    "Iphone 13 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
    
  ), 
  createData(
    798699,
     "Samsung TV 34” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    810365,
    "Iphone 14 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    820385,
    "Samsung TV 38” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    910232,
   "Iphone 17 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    790842,
   "Samsung TV 39” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    800837,
   "Iphone 11 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    830390,
  "Samsung TV 30” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    900112,
    "Iphone 10 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    790752,
   "Samsung TV 44” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    790785,
   "Iphone 16 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ),
    createData(
    810814,
   "Samsung TV 30” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ),
  createData(
    830879,
    "Iphone 13 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    900111,
   "Samsung TV 43” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 
  createData(
    900871,
   "Iphone 15 Pro Max",
    "Television",
    '2500$',
    '12.07.2018',
    2
    
  ), 
  createData(
    910232,
  "Samsung TV 37” LED Retina",
    "Television",
    '2500$',
    '12.07.2018',
    5
    
  ), 

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
const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
    align:"center"
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Product Name',
    align: 'left'
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
    align: 'left'

  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
    align: 'left'

  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
    align: 'right'

  },
  {
    id: 'qty',
    numeric: true,
    disablePadding: false,
    label: 'QTY',
    align: 'right'

  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
    align: 'right'

  },
   
];
const statusStyles = {
  Complete: {
    color: "#15803d",
    bg: "#dcfce7",
  },
  Pending: {
    color: "red",
    bg: "rgb(251,230,230)",
  },
  Processing:{
    bg:'rgb(227,242,253)',
    color:'rgb(58,151,244)'
  }
};
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
            align={headCell.align || (headCell.numeric ? 'right' : 'left')}
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
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <TextField
            placeholder="Search"
            fullWidth
            size="small"
            sx={{width:'200px',borderRadius:'8px'}}
          />
        </Typography>
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


// 
export default function Products(params) {
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
  
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const visibleRows = React.useMemo(
      () =>
        [...rows]
          .sort(getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      [order, orderBy, page, rowsPerPage],
    );
  
  
  return(
    <Main>
    
    
    
    
          <SectionOne sx={{bgcolor:'background.paper'}}>
          <Typography sx={{fontWeight:600}}>Product</Typography>
           <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›" >
            <Link underline="hover" color="inherit" href="/" sx={{fontSize:'13px'}}>
             <IoHome />
    
            </Link>
          <Typography sx={{ color:"inherit",fontSize:'13px' }}>Customer</Typography>
            <Typography sx={{ color:"inherit",fontSize:'13px' }}>Product</Typography>
          </Breadcrumbs>
        </div>
     </SectionOne>
    
    {/*  */}
    
 <Box sx={{ width: '100%' }}>
 
   
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
               {visibleRows.map((row, index) => {
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
                     sx={{ cursor: 'pointer' }}
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
                     <TableCell >#{row.id}</TableCell>

                     <TableCell >{row.name}</TableCell>
                     <TableCell >{row.category}</TableCell>
                     
                     
                     <TableCell >{row.price}</TableCell>
                     <TableCell align="right">{row.date}</TableCell>
                     
                     <TableCell align="right">{row.qty}</TableCell>

                



          
                     <TableCell align="right">
                        <IconButton>
                          <BiDotsHorizontalRounded fontSize="medium" />
                        </IconButton>
                       
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
    
    {/*  */}
    </Main>
   )
} 
  