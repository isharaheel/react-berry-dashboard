import {
  Breadcrumbs,
  Chip,
  TextField,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Toolbar,
  Checkbox,
  IconButton,
  Tooltip,
  styled,
} from "@mui/material";
import { IoHome } from "react-icons/io5";
import { MdOutlineRemoveRedEye, MdOutlineEdit } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { Link } from "react-router-dom";

function createData(id, name, branch, payment, quantity, register, status) {
  return { id, name, branch, payment, quantity, register, status };
}
const rows = [
  createData(
    790841,
    "Joseph William 1",
    "Toronto",
    'Credit Card',
    2500,
    '12.07.2018',
    "Processing"
    
  ),
  createData(
    790955,
    "Joseph William 5",
    "Toronto",
    'Credit Card',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    820885,
    "Anshan Handgun 10",
    "Toronto",
    'Credit Card',
    2500,
    '12.07.2018',
    "Complete"
    
  ), 
  createData(
    900836,
    "Anshan Handgun 14",
    "Toronto",
    'Credit Card',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    910886,
     "Anshan Handgun 18",
    "Toronto",
    'Credit Card',
    2500,
    '12.07.2018',
    "Processing"
    
    
  ), 
  createData(
    798699,
     "Larry Doe 3",
    "Toronto",
    'Net Banking',
    2500,
    '12.07.2018',
    "Complete"
    
  ), 
  createData(
    810365,
    "Sara Soudan 8",
    "Toronto",
    'Net Banking',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    820385,
    "Joseph William 9",
    "Toronto",
    'Net Banking',
    2500,
    '12.07.2018',
    "Complete"
    
  ), 
  createData(
    910232,
   "Larry Doe 19",
    "Toronto",
    'Net Banking',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    790842,
    "Anshan Handgun 2",
    "Toronto",
    'Paytm',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    800837,
   "Larry Doe 7",
    "Toronto",
    'Paytm',
    2500,
    '12.07.2018',
    "Processing"
    
  ), 
  createData(
    830390,
   "Larry Doe 11",
    "Toronto",
    'Paytm',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    900112,
    "Larry Doe 15",
    "Toronto",
    'Paytm',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 
  createData(
    790752,
   "Sara Soudan 4",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Complete"
    
  ), 
  createData(
    790785,
   "Anshan Handgun 6",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Processing"
    
  ),
    createData(
    810814,
     "Sara Soudan 20",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Complete"
    
  ),
  createData(
    830879,
     "Sara Soudan 12",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Processing"
    
  ), 
  createData(
    900111,
   "Joseph William 13",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Processing"
    
  ), 
  createData(
    900871,
   "Sara Soudan 16",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Complete"
    
  ), 
  createData(
    910232,
  "Joseph William 17",
    "Toronto",
    'Upi',
    2500,
    '12.07.2018',
    "Pending"
    
  ), 

];

const headCells = [
  { id: "id", label: "ID", align: "center" },
  { id: "name", label: "Customer Name", align: "left" },
  { id: "branch", label: "Branch", align: "left" },
  { id: "payment", label: "Payment Type", align: "left" },
  { id: "quantity", label: "Quantity", align: "center" },
  { id: "register", label: "Registered", align: "left" },
  { id: "status", label: "Status", align: "left" },
  { id: "action", label: "Action", align: "left" },
];

const statusStyles = {
  Complete: { color: "#15803d", bg: "#dcfce7" },
  Pending: { color: "red", bg: "rgb(251,230,230)" },
  Processing: { color: "rgb(58,151,244)", bg: "rgb(227,242,253)" },
};

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

function EnhancedTableHead({ order, orderBy, numSelected, rowCount, onSelectAllClick, onRequestSort }) {
  const createSortHandler = (property) => (event) => onRequestSort(event, property);
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              )}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar({ numSelected }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 1,
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        bgcolor: numSelected > 0 ? (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity) : "transparent",
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <TextField placeholder="Search" size="small" sx={{ width: { xs: "100%", sm: "200px" }, borderRadius: "8px" }} />
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
EnhancedTableToolbar.propTypes = { numSelected: PropTypes.number.isRequired };

export default function OrderList() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) setSelected(rows.map((n) => n.id));
    else setSelected([]);
  };
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);
    else if (selectedIndex === 0) newSelected = newSelected.concat(selected.slice(1));
    else if (selectedIndex === selected.length - 1) newSelected = newSelected.concat(selected.slice(0, -1));
    else if (selectedIndex > 0) newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const visibleRows = React.useMemo(() => [...rows].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage]);

  function getComparator(order, orderBy) {
    return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  }

  return (
    <Main>
   <SectionOne sx={{bgcolor:'background.paper'}}>
         <Typography sx={{fontWeight:600}}>Order List</Typography>
          <div role="presentation" onClick={handleClick}>
         <Breadcrumbs aria-label="breadcrumb" separator="›" >
           <Link underline="hover" color="inherit" href="/" sx={{fontSize:'13px'}}>
            <IoHome />
   
           </Link>
         <Typography sx={{ color:"inherit",fontSize:'13px' }}>Customer</Typography>
           <Typography sx={{ color:"inherit",fontSize:'13px' }}>Order List</Typography>
         </Breadcrumbs>
       </div>
    </SectionOne>
<Box sx={{ width: '100%', overflowX: "auto" }}>
      <Paper sx={{ width: "100%", overflow: "hidden",paddingTop:'10px' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: 900 }} size="medium">
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
                  <TableRow key={row.id} hover onClick={(event) => handleClick(event, row.id)} selected={isItemSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                    </TableCell>
                    <TableCell align="center">#{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.branch}</TableCell>
                    <TableCell>{row.payment}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell>{row.register}</TableCell>
                    <TableCell>
                      <Chip label={row.status} sx={{ fontSize: "12px", fontWeight: 500, backgroundColor: statusStyles[row.status]?.bg, color: statusStyles[row.status]?.color }} />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton>
                          <MdOutlineRemoveRedEye fontSize="medium" style={{ color: "rgb(33,150,243)" }} />
                        </IconButton>
                        <IconButton>
                          <MdOutlineEdit fontSize="medium" style={{ color: "rgb(103,58,183)" }} />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && <TableRow style={{ height: 53 * emptyRows }}><TableCell colSpan={9} /></TableRow>}
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
  );
}
