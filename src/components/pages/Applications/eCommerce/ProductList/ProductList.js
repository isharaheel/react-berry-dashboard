import { Breadcrumbs, Chip, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
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
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Link as RouterLink } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";




function createData(id,img, name, create, sale, offer, status,action) {
  return {
    id,
    img,
    name,
    create,
    sale,
    offer,
    status,
    action
  };
}
const rows = [
  createData( 
    1,
    "/images/shop-1.png",
    "Canon EOS 1500D 24.1 Digital",
    'SLR Camera (Black) with EF S18-55.',
    "$129.99",
    "$129.99",
     'InStock'
  ),
  createData(
    2,
    "/images/shop-3.png",
    "Apple MacBook Pro with iPhone",
    '11th Generation Intel® Core™ ',
    "$14.59",
    "$14.59",
 'InStock'
  ),
  createData(
    3,
    "/images/shop-9.png",
    "Luxury Watch Century Gold",
    '655 Couple (Refurbished)...',
     "$29.99",
     "$29.99",
     'InStock'
  ),
  createData(
    4,
    "/images/shop-8.png",
    "Fitbit MX30 Smart Watch",
    '(MX30- waterproof) watch',
     "$49.99",
     "$49.99",
      'InStock'
  
  ),
  createData( 
    5,
    "/images/shop-7.png",
    "Boat On‑Ear Wireless",
    'Mic(Bluetooth 4.2, Rockerz 450R..',
     "$81.99",
     "$81.99",
      'InStock'
  ),
  createData( 
    6, 
    "/images/shop-2.png",
    "Apple iPhone 13 Mini",
    '13 cm (5.4-inch) Super',
     "$86.99",
     "$86.99",
     'InStock'
  
),
  createData( 
    7, 
    "/images/shop-4.png",
    "Fitbit MX30 Smart Watch",
    '(512GB ROM, MLLH3HN/A,..',
     "$49.99",
     "$49.99",
      'InStock'
  ),
  createData(  
    8,
    "/images/shop-5.png",
    "Boat On‑Ear Wireless",
    'Apple Watch SE Smartwatch',
     "$81.99",
     "$81.99",
     'InStock'
  ),
  createData( 
    9,
    "/images/shop-6.png",
    "Apple iPhone 13 Mini",
    '(512GB ROM, MLLH3HN/A,..',
    "$86.99",
    "$86.99",
    'OutOfStock'
  ),
];
const statusStyles = {
  InStock: {
    color: "#15803d",
    bg: "#dcfce7",
  },
  OutOfStock: {
    color: "red",
    bg: "rgb(251,230,230)",
  },

};
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
    id: 'img',
    numeric: false,
    disablePadding: true,
    label: '#',
    align: 'center'
  },
 {
    id: 'product',
    numeric: true,
    disablePadding: false,
    label: 'Product Name',
    align: 'left'
  },
  {
    id: 'create',
    numeric: true,
    disablePadding: false,
    label: 'Created',
    align:'left'
  },
  {
    id: 'sale',
    numeric: true,
    disablePadding: false,
    label: 'Sale Price',
    align:'left'
  },
  {
    id: 'offer',
    numeric: true,
    disablePadding: false,
    label: 'Offer Price',
  },
    {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
    {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];
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
export default function ProductList() {
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
      <Typography sx={{fontWeight:600}}>Product List</Typography>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" >
                <Link component={RouterLink} to="/default">

  <IoHome size={16} />
</Link>
      <Typography sx={{ color:"inherit",fontSize:'13px' }}>E-Commerce</Typography>
        <Typography sx={{ color:"inherit",fontSize:'13px' }}>Product List</Typography>
      </Breadcrumbs>
    </div>
 </SectionOne>

{/*  */}

<Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
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
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      <img src={row.img} style={{width:'50px',height:'50px'}}/>
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.create}</TableCell>
                    <TableCell >{row.sale}</TableCell>
                    <TableCell >{row.offer}</TableCell>
                    <TableCell >
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
                    <TableCell align="right">
                      <IconButton>
                       <BsThreeDots />

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



       </Main>
    )
}