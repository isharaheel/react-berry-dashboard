
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
import { MdBlock } from "react-icons/md";
// 
function createData(id, name,email,location,orders,register,status,action) {
  return {
    id,
    name,
    email,
    location,
    orders,
    register,
    status,
    action
  };
}
const rows = [
  createData(
    1,
    "Joe Schilder",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    2,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    3,
    "Caroline Pandolfi",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    4,
    "Marchetti",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    5,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    6,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    7,
    "Nina Francini",
    "uhudadof@gmail.com",
    '1984 Faza Point, Wakukda, India - 94335',
    3066,
    '18.06.2023',
    "Complete"
    
  ), 
  createData(
    8,
    "Caroline Mallet",
    "peg@gmail.com",
    '725 Zehvo Highway, Puvoef, Japan - 93292',
    5478,
    '5.06.2023',
    "Confirm"
    
  ), 
  createData(
    9,
    "Amy Pratt",
    "vavceriji@gmail.com",
    '333 Hinur Trail, Zepopde, Kiribati - 39279',
    6255,
    '31.05.2023',
    "Complete"
    
  ), 
  createData(
    10,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    11,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(
    12,
    "Ollie Barbetti",
    "bap@gmail.com",
    '577 Zeoz Drive, Misoov, Martinique - 29073',
    8006,
    '27.04.2023',
    "Processing"
    
  ), 
  createData(
    13,
    "Greer",
    "newe@gmail.com",
    '1563 Kukrez River, Vegotaf, Tristan da Cunha - 54129',
    261,
    '6.04.2023',
    "Processing"
    
  ), 
  createData(
    14,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    15,
    "Caroline",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ),
    createData(
    16,
    "Gideon Hayes",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    17,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    18,
    "Esther Holloway",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    19,
    "Adrian Thorne",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    20,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
    createData(
    21,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(
    22,
    "Dominic Greer",
    "newe@gmail.com",
    '1563 Kukrez River, Vegotaf, Tristan da Cunha - 54129',
    261,
    '6.04.2023',
    "Processing"
    
  ), 
  createData(
    23,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    24,
    "Pandolfi",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ),
    createData(
    25,
    "Joe",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    26,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    27,
    "Holloway",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    28,
    "Beatrice Vancei",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    29,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
    createData(
    30,
    "Caroline Mallet",
    "peg@gmail.com",
    '725 Zehvo Highway, Puvoef, Japan - 93292',
    5478,
    '5.06.2023',
    "Confirm"
    
  ), 
  createData(
    31,
    "Amy Pratt",
    "vavceriji@gmail.com",
    '333 Hinur Trail, Zepopde, Kiribati - 39279',
    6255,
    '31.05.2023',
    "Complete"
    
  ), 
  createData(
    32,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    33,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(
    34,
    "Ollie Barbetti",
    "bap@gmail.com",
    '577 Zeoz Drive, Misoov, Martinique - 29073',
    8006,
    '27.04.2023',
    "Processing"
    
  ), 
  createData(
    35,
    "Olivier",
    "newe@gmail.com",
    '1563 Kukrez River, Vegotaf, Tristan da Cunha - 54129',
    261,
    '6.04.2023',
    "Processing"
    
  ), 
  createData(
    36,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    37,
    "Holloway",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ),
    createData(
    38,
    "Clifford Hayes",
    "rempesdel@gmail.com",
    '1776 Gide Glen, Fizogeh, Kuwait - 75148',
    4636,
    '19.02.2023',
    "Processing"
    
  ),
      createData(
    39,
    "Ronald Bentley",
    "pi@gmail.com",
    '1333 Faed River, Gonvison, Bahrain - 01190',
    1125,
    '27.01.2023',
    "Complete"
    
  ),
      createData(
    40,
    "Cecelia Le GallGall",
    "bonnollol@gmail.com",
    '717 Evdi Junction, Usehodwar, Mauritius - 90065',
    1421,
    '7.01.2023',
    "Processing"
    
  ),
      createData(
    41,
    "Bessie James",
    "obi@gmail.com",
    '828 Igake Pass, Ebojiire, French Polynesia - 75187',
    4005,
    '31.12.2022',
    "Confirm"
    
  ),
      createData(
    42,
    "Clifford Hayes",
    "rempesdel@gmail.com",
    '1776 Gide Glen, Fizogeh, Kuwait - 75148',
    4636,
    '19.02.2023',
    "Processing"
    
  ),
      createData(
    43,
    "Charlie Jensen",
    "ac@gmail.com",
    '1380 Mofgo Pass, Palutu, Portugal - 65273',
    4304,
    '19.02.2023',
    "Confirm"
    
  ),
      createData(
    44,
    "Gordon Cummings",
    "pecmu@gmail.com",
    '1714 Gevher Drive, Emgawbo, Canada - 26706',
    561,
    '16.10.2022',
    "Complete"
    
  ),
      createData(
    45,
    "Lottie Yang",
    "tukzuc@gmail.com",
    '1952 Taib Pass, Wiwinoh, New Zealand - 75651',
    143,
    '24.09.2022',
    "Complete"
    
  ),
        createData(
    46,
    "John Breschi",
    "awotuwfu@gmail.com",
    '752 Cuzfez Place, Tepolewa, Honduras - 60622',
    1677,
    '24.09.2022',
    "Confirm"
    
  ),
    createData(
    47,
    "Gideon",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    48,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    49,
    "Pandolfi",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    50,
    "Caleb Sterling",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    51,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    52,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    53,
    "Nina Francini",
    "uhudadof@gmail.com",
    '1984 Faza Point, Wakukda, India - 94335',
    3066,
    '18.06.2023',
    "Complete"
    
  ), 
  createData(
    54,
    "Caroline Mallet",
    "peg@gmail.com",
    '725 Zehvo Highway, Puvoef, Japan - 93292',
    5478,
    '5.06.2023',
    "Confirm"
    
  ), 
  createData(
    55,
    "Amy Pratt",
    "vavceriji@gmail.com",
    '333 Hinur Trail, Zepopde, Kiribati - 39279',
    6255,
    '31.05.2023',
    "Complete"
    
  ), 
  createData(
    56,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    57,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(
    58,
    "Ollie Barbetti",
    "bap@gmail.com",
    '577 Zeoz Drive, Misoov, Martinique - 29073',
    8006,
    '27.04.2023',
    "Processing"
    
  ), 
  createData(
    59,
    "Katherine",
    "newe@gmail.com",
    '1563 Kukrez River, Vegotaf, Tristan da Cunha - 54129',
    261,
    '6.04.2023',
    "Processing"
    
  ), 
  createData(
    60,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    61,
    "Franklin Pierce",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ),
      createData(
    62,
    "Schilder",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    63,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    64,
    "Franklin",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    65,
    "Ricardo",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    66,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
    createData(
    67,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(
    68,
    "Ollie Barbetti",
    "bap@gmail.com",
    '577 Zeoz Drive, Misoov, Martinique - 29073',
    8006,
    '27.04.2023',
    "Processing"
    
  ), 
  createData(
    69,
    "Dominic",
    "newe@gmail.com",
    '1563 Kukrez River, Vegotaf, Tristan da Cunha - 54129',
    261,
    '6.04.2023',
    "Processing"
    
  ), 
  createData(
    70,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
  createData(
    71,
    "Pierce",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ),
    createData(
    72,
    "Gideon",
    "sip@gmail.com",
    '1631 Melgu Square, Ujdeme, Maldives - 56391',
    9603,
    '29.07.2023',
    "Confirm"
    
  ),
  createData(
    73,
    "Phoebe Venturi",
    "ke@gmail.com",
    '1804 Ahedi Trail, Owottug, Bolivia - 47403',
    7174,
    '14.07.2023',
    "Complete"
    
  ), 
  createData(
    74,
    "Ferit",
    "secjavkib@gmail.com",
    '1060 Ejeaba Square, Wouruno, Congo - Kinshasa - 24456',
    2585,
    '10.07.2023',
    "Complete"
    
  ), 
  createData(
    75,
    "Caleb",
    "ho@gmail.com",
    '1614 Fomwaj Square, Eknisra, Iceland - 41340',
    9283,
    '2.07.2023',
    "Complete"
    
  ), 
  createData(
    76,
    "Dorothy Hussain",
    "socuih@gmail.com",
    '1397 Morco Path, Gamarib, Malta - 65124',
    4872,
    '30.06.2023',
    "Processing"
    
  ), 
    createData(
    77,
    "Caroline Mallet",
    "peg@gmail.com",
    '725 Zehvo Highway, Puvoef, Japan - 93292',
    5478,
    '5.06.2023',
    "Confirm"
    
  ), 
  createData(
    78,
    "Amy Pratt",
    "vavceriji@gmail.com",
    '333 Hinur Trail, Zepopde, Kiribati - 39279',
    6255,
    '31.05.2023',
    "Complete"
    
  ), 
  createData(
    79,
    "Eleanor Mann",
    "jonvok@gmail.com",
    '25 Odvaz Grove, Nadrubo, Belize - 93095',
    499,
    '22.06.2023',
    "Confirm"
    
  ), 
  createData(
    80,
    "Gene Montero",
    "rouca@gmail.com",
    '1409 Ifuwu Trail, Davdibun, Nepal - 22947',
    702,
    '13.05.2023',
    "Processing"
    
  ), 
  createData(81, "Amara Okafor", "amara.ok@yahoo.com", "492 Chidobe Street, Lagos, Nigeria - 100001", 102, "12.01.2024", "Processing"),
  createData(82, "Liam Fletcher", "fletch.l@outlook.com", "88 Baker St, London, UK - NW1 6XE", 305, "05.11.2023", "Complete"),
  createData(83, "Yuki Tanaka", "y.tanaka@gmail.com", "2-chōme-1-1 Nihonbashimuromachi, Tokyo, Japan", 992, "22.02.2024", "Processing"),
  createData(84, "Elena Rodriguez", "elena.rod@company.es", "Calle de Alcala 14, Madrid, Spain - 28014", 450, "30.10.2023", "Confirm"),
  createData(85, "Marcus Thorne", "m.thorne@techmail.io", "742 Evergreen Terrace, Springfield, USA - 62704", 215, "15.12.2023", "Processing"),
  createData(86, "Sienna Gupta", "sienna.g@icloud.com", "Block B-4, Vasant Vihar, New Delhi, India - 110057", 667, "08.01.2024", "Processing "),
  createData(87, "Hans Müller", "h.mueller@web.de", "Alexanderplatz 1, Berlin, Germany - 10178", 834, "19.11.2023", "Complete"),
  createData(88, "Chloe Dubois", "chloe.dub@orange.fr", "15 Rue de Rivoli, Paris, France - 75004", 512, "03.02.2024", "Processing"),
  createData(89, "Aarav Singh", "aarav.s@gmail.com", "Plot 12, Jubilee Hills, Hyderabad, India - 500033", 129, "14.11.2023", "Processing"),
  createData(90, "Sofia Rossi", "s.rossi@libero.it", "Via del Corso 18, Rome, Italy - 00186", 401, "27.12.2023", "Confirm"),
  createData(91, "Noah Williams", "noah.will@me.com", "202 Elizabeth St, Sydney, Australia - NSW 2000", 773, "11.01.2024", "Processing"),
  createData(92, "Fatima Al-Sayed", "f.alsayed@mail.ae", "Sheikh Zayed Rd, Dubai, UAE - PO 12345", 338, "05.02.2024", "Processing"),
  createData(93, "Oliver Schmidt", "o.schmidt@berlin.com", "Leipziger Str. 50, Berlin, Germany - 10117", 921, "20.10.2023", "Complete"),
  createData(94, "Isabella Silva", "isabella.s@uol.com.br", "Av. Paulista 1000, Sao Paulo, Brazil - 01310-100", 184, "09.12.2023", "Processing"),
  createData(95, "Chen Wei", "wei.chen@qq.com", "No. 100 Nanjing Road, Shanghai, China - 200001", 605, "17.11.2023", "Confirm"),
  createData(96, "Lucas Jensen", "l.jensen@nordic.dk", "Østerbrogade 12, Copenhagen, Denmark - 2100", 442, "02.01.2024", "Processing"),
  createData(97, "Maya Kostova", "m.kostova@abv.bg", "Plot 12, Jubilee Hills, Hyderabad, India - 500033", 229, "25.01.2024", "Processing"),
  createData(98, "James O'Connor", "james.oc@eircom.ie", "12 Grafton Street, Dublin, Ireland - D02", 811, "13.11.2023", "Complete"),
  createData(99, "Zahra Rahmani", "z.rahmani@iran.ir", "Valiasr St, Tehran, Iran - 14155", 556, "18.12.2023", "Processing"),
  
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
    numeric: false,
    disablePadding: true,
    label: 'Customer Name',
  },
  {
    id: 'location',
    numeric: true,
    disablePadding: false,
    label: 'Location',
    align: 'left'
  },
  {
    id: 'orders',
    numeric: true,
    disablePadding: false,
    label: 'Orders',
    align: 'left'

  },
  {
    id: 'register',
    numeric: true,
    disablePadding: false,
    label: 'Registered',
    align: 'left'

  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
    align: 'left'

  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
    align: 'left'

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
export default function CustomerList(params) {
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
      <Typography sx={{fontWeight:600}}>Customer List</Typography>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" >
        <Link underline="hover" color="text.home" href="/" sx={{fontSize:'13px'}}>
         <IoHome />

        </Link>
      <Typography sx={{ color:"inherit",fontSize:'13px' }}>Customer</Typography>
        <Typography sx={{ color:"inherit",fontSize:'13px' }}>Customer List</Typography>
      </Breadcrumbs>
    </div>
 </SectionOne>

{/*  */}

<Box sx={{ width: '100%', overflowX: "auto", }}>

  
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer >
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
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{width:'200px'}}
                    >
                      <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography sx={{fontSize:'14px'}}>{row.name}</Typography>
                        <Typography sx={{fontSize:'13px',color:'gray'}}>{row.email}</Typography>


                      </Box>
                      
                    </TableCell>
                    <TableCell >{row.location}</TableCell>
                    <TableCell >{row.orders}</TableCell>
                    <TableCell >{row.register}</TableCell>
                    <TableCell>
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

{/*  */}
</Main>




  )
} 
  