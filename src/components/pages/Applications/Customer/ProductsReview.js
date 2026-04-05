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
import { CiChat1 } from "react-icons/ci";
import { MdBlock } from "react-icons/md";// 
function createData(id,name,author,review,date,status,action) {
  return {
    id,
    name,
    author,review,date,status,
    action
  };
}
const rows = [
  createData(
    1,
    "Apple Watch Series 1",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ),
  createData(
    2,
   "Anshan Handgun",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Processing'
    
  ), 
  createData(
    3,
    "Apple Watch Series 3",
    "Larry Doe",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Processing'
    
  ), 
  createData(
    4,
    "Apple Watch Series 4",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Confirm'
    
  ), 
  createData(
    5,
   "Apple X2 5",
    "Anshan Handgun",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Processing'
    
    
  ), 
  createData(
    6,
    "Apple X2 6",
    "Larry Doe",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ), 
  createData(
    7,
    "Apple Watch Series 1",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Confirm'
    
  ), 
  createData(
    8,
    "Apple X2 8",
    "Anshan Handgun",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Confirm'
    
  ), 
  createData(
    9,
   "Apple Watch Series 9",
    "Larry Doe",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ), 
  createData(
    10,
   "Apple Watch Series 10",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Processing'
    
  ), 
  createData(
    11,
    "Apple X2 11",
    "Anshan Handgun",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ), 
  createData(
    12,
   "Apple X2 12",
    "Larry Doe",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ), 
  createData(
    13,
   "Apple Watch Series 13",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Confirm'
    
  ), 
  createData(
    14,
    "Apple X2 14",
    "Anshan Handgun",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
  ), 
  createData(
    15,
   "Apple Watch Series 1",
    "Joseph William",
    'The Series 4 is a significant step...$',
    '12.07.2018',
    'Complete'
    
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
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Product Name',
    align: 'left'
  },
  {
    id: 'author',
    numeric: true,
    disablePadding: false,
    label: 'Author',
    align: 'left'

  },
  {
    id: 'review',
    numeric: true,
    disablePadding: false,
    label: 'Review',
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
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
    align: 'right'

  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
    align: 'center'

  },
   
];
const statusStyles = {
  Complete: {
    color: "#15803d",
    bg: "#dcfce7",
  },
  Processing: {
    color: "red",
    bg: "rgb(251,230,230)",
  },
  Confirm:{
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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}





export default function ProductsReview(params) {
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

       <Box   sx={{
          bgcolor: 'background.paper',
          borderRadius: "10px",
          width: "100%",
          p: { xs: 2, md: 3 },
          boxSizing: "border-box",
        }}>
          <Box
                 sx={{
                   mb: 3,
                   display: "flex",
                   justifyContent: "space-between",
                   alignItems: "center",
                   flexWrap: "wrap",
                   gap: 2,
                 }}
               >
                 <Typography sx={{ fontWeight: "bold" }}>Product Review</Typography>
                 <TextField placeholder="Search" size="small" sx={{ width: { xs: "100%", sm: "200px" } }} />
               </Box>
                       <Divider sx={{ mb: 3 }} />
               
         {/*  */}
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
      
  <TableCell >{row.name}</TableCell>
  <TableCell >{row.author}</TableCell>
  
  
  <TableCell >{row.review}</TableCell>
  <TableCell align="right">{row.date}</TableCell>
  
        <TableCell align="right">
    <Chip
      label={row.status}
      sx={{
        height: 22,
        fontSize: "12px",
        fontWeight: 500,
        backgroundColor: statusStyles[row.status]?.bg || "#eeeeee", 
        color: statusStyles[row.status]?.color || "#000000",
      }}
    />
  </TableCell>
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
    </Main>
  )
} 
  