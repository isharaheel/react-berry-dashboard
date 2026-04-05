import { Box, Breadcrumbs, Button, IconButton, Modal, styled, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import {
  Card,
  CardContent,
  Grid,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BlockIcon from "@mui/icons-material/Block";
import { useState } from "react";
import {

  CardMedia,

  Rating,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  // Button,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { CartContext } from "../../../../CartContext";
import { IoCloseCircle } from "react-icons/io5";

// 
// 

const products = [
  {
    id:1,
    title: "Canon EOS 1500D 24.1 Digital",
    desc:'SLR Camera (Black) with EF S18-55.',
    price: "$129.99",
    img: "/images/shop-1.png",
    rating: 4.5,
  },
  {
    id:2,
    title: "Apple MacBook Pro with iPhone",
    desc:'11th Generation Intel® Core™ ',
    price: "$14.59",
    img: "/images/shop-3.png",
    rating: 4,
  },
  {
    id:3,
    title: "Luxury Watch Century Gold",
    desc:'655 Couple (Refurbished)...',
    price: "$29.99",
    img: "/images/shop-9.png",
    rating: 5,
  },
  {
    id:4,
    title: "Fitbit MX30 Smart Watch",
    desc:'(MX30- waterproof) watch',
    price: "$49.99",
    img: "/images/shop-8.png",
    rating: 4,
  },
  {
    id:5,
    title: "Boat On‑Ear Wireless",
    desc:'Mic(Bluetooth 4.2, Rockerz 450R..',
    price: "$81.99",
    img: "/images/shop-7.png",
    rating: 4.5,
  },
  {
    id:6,
    title: "Apple iPhone 13 Mini",
    desc:'13 cm (5.4-inch) Super',
    price: "$86.99",
    img: "/images/shop-2.png",
    rating: 5,
  },
    {
    id:7,
    title: "Fitbit MX30 Smart Watch",
    desc:'(512GB ROM, MLLH3HN/A,..',
    price: "$49.99",
    img: "/images/shop-4.png",
    rating: 4,
  },
  {
    id:8,
    title: "Boat On‑Ear Wireless",
    desc:'Apple Watch SE Smartwatch',
    price: "$81.99",
    img: "/images/shop-5.png",
    rating: 4.5,
  },
  {
    id:9,
    title: "Apple iPhone 13 Mini",
    desc:'(512GB ROM, MLLH3HN/A,..',
    price: "$86.99",
    img: "/images/shop-6.png",
    rating: 5,
  },
];
// 
const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function CommerceProducts(params) {
  const theme = useTheme();
const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    addToCart(product); 
    navigate('/checkout'); 
  };
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [showFilter, setShowFilter] = useState(false);
  
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return( 
    <Main>
        <SectionOne sx={{bgcolor:'background.paper'}}>
          <Typography sx={{fontWeight:600}}>Products</Typography>
           <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" separator="›" >
            <Link underline="hover" color="inherit" href="/" sx={{fontSize:'13px'}}>
             <IoHome />
    
            </Link>
          <Typography sx={{ color:"inherit",fontSize:'13px' }}>E-commerce</Typography>
            <Typography sx={{ color:"inherit",fontSize:'13px' }}>Products</Typography>
          </Breadcrumbs>
        </div>
     </SectionOne>
    {/*  */}
    <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:'column'}}>
      <Box sx={{width:'100%',height:'50px',display:'flex',alignItems:'center',justifyContent:'space-between',bgcolor: 'background.paper'}}>


        <Box>
          <Button variant="text" sx={{textTransform:'none',fontSize:'16px',fontWeight:600,color:'black'}}>Shop</Button>
          <IconButton><FaAngleRight style={{fontSize:'16px',color:'gray'}}/></IconButton>
        </Box>
        <Box sx={{width:'auto',height:'100%',display:'flex',gap:'20px',alignItems:'center'}}>
          <TextField placeholder="Search" size="small" sx={{
            width:'200px'
          }}/>
          <Typography>|</Typography>
          <Box sx={{display:'flex',gap:'7px',alignItems:'center'}}>
          <Typography><RiFilter2Fill style={{color:'rgb(179,157,219)',marginTop:'10px'}}/></Typography>
          <Typography  onClick={() => setShowFilter(prev => !prev)} sx={{color:'rgb(103,58,183)',marginTop:'7px',fontSize:'15px',cursor:'pointer'}}>Filter</Typography>
          </Box>
          <Typography>|</Typography>
          <Box sx={{display:'flex',gap:'7px'}}>
            <Typography>Sort by :</Typography>
            
          </Box>

        </Box>

      </Box>
      <Divider sx={{marginTop:'10px'}}/>
{/*  */}
      
      {/*  */}

<Box sx={{    marginTop: '20px',
    bgcolor: 'background.paper',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',}}>
  <Box sx={{  width: showFilter ? '70%' : '100%'  }}>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      
      {products.map((item, index) => (
          <Box key={index} component={Link}
  to={`/commerce/product-details/${item.id}`} sx={{width: {
      xs: '100%',
      sm: 'calc(50% - 20px)',
      md: showFilter
        ? 'calc(33% - 20px)'
        : 'calc(25.4% - 20px)',
    },
    height:"auto",
    bgcolor: 'background.default',borderRadius:'10px',cursor:'pointer',
    paddingBottom:'10px',
    overflow: "hidden",textDecoration:'none', 
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
    } }}> 
          <Box>
            <img 
              src={item.img} 
              alt={item.name || "product"} 
              style={{ width: '100%', height: '200px', objectFit: 'cover',borderRadius:'10px' }} 
            />
          </Box>
          <Box sx={{width:'95%',margin:'auto',textAlign:'left',height:'auto'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'10px'}}>
            <Typography sx={{fontSize:'15px',color:'black'}}>{item.title}</Typography>
            <Typography sx={{fontSize:'13px',color:'gray'}}>{item.desc}</Typography>
            </Box>
            <Rating
                  size="small"
                  value={item.rating}
                  readOnly
                  sx={{ my: 0.5 ,marginBottom:'10px'}}
                />
            <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>{item.price}</Typography>
              <Button sx={{background:'rgb(33,150,243)',color:'white'}}><ShoppingCartIcon/></Button>
              
            </Box>    
          </Box>

         
        </Box>
      ))}

    </Box>
  </Box>


<Box  sx={{
       width: {
      xs: '100%',
      sm:'50%',
      md: showFilter ? '30%' : '0',
    },
    opacity: showFilter ? 1 : 0,
    transition: 'all 0.4s ease',
    overflow: 'hidden',
    borderRadius: '10px',
    position: { xs: 'fixed', md: 'relative' },
    right: { xs: '-25px', md: 'auto' },
    top: { xs: 0, md: 'auto' },
    height: { xs: '97vh', md: 'auto' },
    background: { xs: '#fff', md: 'white' },
    zIndex: { xs: 1300, md: 'auto' },
    boxShadow: { xs: '0 0 20px rgba(68, 64, 64, 0.2)', md: 'none' },
    transform: {
      xs: showFilter ? 'translateX(0)' : 'translateX(100%)',
      md: 'none',
    },
    overflowY:'auto',
    paddingRight:{xs:'10px'},
    paddingBottom:{xs:'10px'}

  }}>
  {isMobileOrTablet && (
  <Box sx={{ display: "flex", justifyContent: "flex-start",marginLeft:'10px',marginTop:'10px' }}>
    <IoCloseCircle
      onClick={() => setShowFilter(false)}
      size={26}
      style={{ color: "gray", cursor: "pointer" }}
    />
  </Box>
)}
  
  {showFilter && (
    <>
 
 <Accordion defaultExpanded  sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" fontSize={14}>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex'}}>
            <FormControlLabel control={<Checkbox  />} label="Male" />
            <FormControlLabel control={<Checkbox />} label="Female" />
            <FormControlLabel control={<Checkbox />} label="Kids" />          
        </AccordionDetails>
    
      </Accordion>

{/*  */}
 <Accordion defaultExpanded  sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" fontSize={14}>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex',gap:'20px'}}>
          <Box sx={{display:'flex',flexDirection:'column'}}>
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>All</Typography>

           } />
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>Electronics</Typography>

           } />
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>Fashion</Typography>

           } />
          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>Kitchen</Typography>
           } />
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>Books</Typography>

           } />
           <FormControlLabel control={<Checkbox />} label={
            <Typography sx={{fontSize:'15px'}}>Toys</Typography>

           } />
          </Box>

         
        </AccordionDetails>
       
      </Accordion>
{/*  */}
 <Accordion defaultExpanded  sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" fontSize={14}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex',gap:'20px'}}>
           <Box sx={{display:'flex',flexDirection:'column'}}>
            <FormControlLabel value="below10" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>Below $10</Typography>
            } />
            <FormControlLabel value="$50 - $100" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>$50 - $100</Typography>
            } />
            <FormControlLabel value="$150 - $200" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>$150 - $200</Typography>
            } />


          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <FormControlLabel value="$10 - $50" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>$10 - $50</Typography>
            } />
            <FormControlLabel value="$100 - $150" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>$100 - $150</Typography>
            } />
            <FormControlLabel value="Over $200" control={<Radio />} label={
              <Typography sx={{fontSize:'15px'}}>Over $200</Typography>
            } />      
          </Box>
         
        </AccordionDetails>
       
      </Accordion>
  {/*  */}



   <Accordion defaultExpanded  sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 ,border:0},
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" fontSize={14}>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails >
           <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 1 ,fontSize:'13px',color:'gray'}}>({labels[hover !== -1 ? hover : value]})</Box>
      )}
      
    </Box>
        
        </AccordionDetails>
       
      </Accordion>
      {/*  */}
       <Button sx={{textTransform:'none',color:"white",background:'rgb(244,67,54)',width:'90%',marginLeft:'17px',marginTop:'10px'}}>Clear all</Button>
</>
  )}
</Box>

    
    </Box>
  
    </Box>



    </Main>
  )
} 
  