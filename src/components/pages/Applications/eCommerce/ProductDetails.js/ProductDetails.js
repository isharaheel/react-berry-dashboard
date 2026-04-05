import { Link, useParams } from "react-router-dom";
import { Alert, Box, Breadcrumbs, Button, Checkbox, Chip, Divider, MenuItem, Radio, Rating, Select, Snackbar, styled, Typography ,LinearProgress,Avatar,  Stack,  IconButton,} from "@mui/material";
import { IoHome } from "react-icons/io5";
// import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import * as React from 'react';
// import NumberSpinner from './NumberSpinner';
// import { NumberSpinner } from '@base-ui-components/react';
import { GiShoppingCart } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../../../CartContext";

// import Button from '@mui/material/Button';
// 
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


// Example product data (in real app, fetch from API)
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

// 
export default function ProductDetails () {
// 
//  const [opened, setOpened] = React.useState(false);
  const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
  // 
const { id } = useParams(); 
  const { addToCart } = React.useContext(CartContext); 

  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const [value, setValue] = React.useState(1); 
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [TabValue, setTabValue] = React.useState(0);
  const [opened, setOpened] = React.useState(false); // <--- MOVE THIS UP HERE

  // 2. Data Finding
  const product =
  products.find((p) => p.id === Number(id)) || products[0];
const handleAddToCart = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => { if (count > 1) setCount(count - 1); };

  const handleChanging = (event) => { setValue(event.target.value); };
  const handleChange = (event) => { setSelectedValue(event.target.value); };
  const handleChanged = (event, newValue) => { setTabValue(newValue); };

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,      // laptop
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 960, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const setting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // This makes each card approx 25% width
  slidesToScroll: 1,
  arrows: true,
};
   const productImages = [
    product.img,
    // "/images/shop-1.png",
    "/images/shop-2.png",
    "/images/shop-3.png",
    "/images/shop-4.png",
    "/images/shop-5.png",
    "/images/shop-6.png",
    "/images/shop-7.png",
    "/images/shop-8.png",
    "/images/shop-9.png"
  ];
  const ratingData = [
    { label: '1 Stars', count: 125, value: 20 },
    { label: '2 Stars', count: 125, value: 25 },
    { label: '3 Stars', count: 160, value: 35 },
    { label: '4 Stars', count: 320, value: 65 },
    { label: '5 Stars', count: 80, value: 15 },
  ];

  const reviews = [
    {
      id: 1,
      img:'/images/socialImg-5.png',
      name: 'Joel Jackson',
      date: 'Thu, Jan 1 2026',
      rating: 1,
      type: 'runner',
      text: 'Buadef socevso teocu huhe boola tuvjuli jan ol zem no avmidino bifojitu. Ohluh emuub wuveeti nagew gejhe ucokethe asovuwhoc sivki orifumga oboler niwilzo havzambo nej tateeh vuwalor houw ohipavi serkec.',
    },
    {
      id: 2,
      img:'/images/follow-3.png',
      name: 'Rebecca Snyder',
      date: 'Sat, Dec 27 2025',
      rating: 4,
      type: 'runner',
      text: 'Pecdid polas kis ho guzre hozuduju redouga velafa ov fato ze zakuaji ilauvren bunbaore sieto fog jeb no. Diruh toekaaco wizcik popkah nad gudcobmat fumpu zapdihpi hohwo rakawa ki heh avuizuak.',
    },
    {
      id: 3,
      img:'/images/socialImg-6.png',
      name: 'Marguerite Floyd',
      date: 'Wed, Dec 24 2025',
      rating: 3,
      type: 'verified',
      text: 'Ammi legiroh weznu sur lotver owunomut uzew ro daditiim ugdaw na mi takartaw hapcer fuah libodis. Vinsu zik nehuzpo sukusejor zecverfa mi upinatul erhagi fa tolubvi de laje tafnak gour.',
    },
  ];
  
  return (
    <Main>
 <SectionOne sx={{bgcolor:'background.paper'}}>
      <Typography sx={{fontWeight:600}}>Products</Typography>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" >
        <Link underline="hover" color="text.home" href="/" sx={{fontSize:'13px'}}>
         <IoHome />

        </Link>
      <Typography sx={{ color:"inherit",fontSize:'13px' }}>E-Commerce</Typography>
        <Typography sx={{ color:"inherit",fontSize:'13px' }}>Products</Typography>
      </Breadcrumbs>
    </div>
 </SectionOne>
   <Box sx={{width:{xs:'100%',sm:"100%",md:'900px'},bgcolor: 'background.paper',height:"auto",margin:'auto',padding:'20px',paddingTop:'20',borderRadius:'10px',display:'flex',flexDirection:'column',gap:'20px'}}>
<Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'column',md:'row'}, width: '100%', height: "auto", gap: '20px' }}>
  <Box sx={{ width: {xs:'90%',sm:'100%',md:'45%'}, height: 'auto'}}>
    <Box sx={{ width: '100%', height: '400px',borderRadius:'10px'  }}>
      <img
        src={product.img}  
        alt={product.title} 
        style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'10px'  }}
      />
    </Box>
       <Box sx={{ width: "70%", margin: "auto",marginTop:'20px','& .slick-prev:before, .slick-next:before': {
          color: '#888888', 
          fontSize: '24px',
        },
        '& .slick-dots li button:before': {
          color: '#888888', 
          opacity: 0.3,
        },
        '& .slick-dots li.slick-active button:before': {
          color: '#888888', 
          opacity: 1,
        } }}>
      <Slider {...settings}>
  {productImages.map((img, index) => (
    <Box key={index}>
      <img
        src={img}
        alt={`slide-${index}`}
        style={{
          width: "70%",
          height:'70px',
          borderRadius: "8px",
          objectFit: "cover",
          marginLeft:'15px',
        }}
      />
    </Box>
  ))}
</Slider>
    </Box>
  </Box>
  <Box sx={{ width: {xs:'90%',sm:'100%',md:'55%'}, height: 'auto',display:'flex',flexDirection:"column" }}>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<Typography sx={{padding:'5px',color:'rgb(35,200,134)',background:'rgb(220,250,228)',borderRadius:'6px',width:'60px',height:"15px",textAlign:'center',fontSize:"13px"}}>In Stock</Typography>
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="red"/>

</Box>

<Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
     <Typography sx={{fontSize:'21px',fontWeight:600}}>{product.title}</Typography>
      <Chip sx={{height:'20px',borderColor:'rgb(33,150,243)'}} label={
        <Typography sx={{color:'rgb(33,150,243)',fontSize:'13px'}}>New</Typography>
      } variant="outlined" />

</Box>
    <Typography variant="body1" sx={{ my: 1,fontSize:'14px',color:"gray" }}>{product.desc}</Typography>
    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
<Box sx={{display:'flex',gap:'10px',alignItems:'center',marginTop:'10px'}}>
    <Typography variant="h6" color="rgb(33,150,243)" fontWeight={600}>{product.price}</Typography>
    <Typography color="gray" fontSize={12}>(Inclusive of all taxes)</Typography>
    </Box>
    <Divider sx={{marginTop:'20px',marginBottom:'10px'}}/>
<Box sx={{display:'flex',gap:'100px',alignItems:'center'}}>
    <Typography>Colors <span style={{color:'red'}}>*</span></Typography>
    <Box sx={{display:'flex'}}>
    <Radio
    size="large"
  checked={selectedValue === 'a'}
  onChange={handleChange}
  value="a"
  name="radio-buttons"
      sx={{
      color: 'yellow',
      '&.Mui-checked': { color: 'yellow' },
      '&.Mui-focusVisible': { outline: 'none', boxShadow: 'none' },
    }}

/>

  <Radio
      size="large"
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
         sx={{
    color: 'rgb(33,150,243)',
    '&.Mui-checked': {
      color: 'rgb(33,150,243)', 
    },
    '&.Mui-focusVisible': {
      outline: 'none',
      boxShadow: 'none',
    },
  }}
      />
</Box>
</Box>
<Box sx={{display:'flex',gap:'130px',alignItems:'center',marginTop:'20px'}}>
    <Typography>Size <span style={{color:'red'}}>*</span></Typography>
     <Select
      size="small"
      value={value}
      onChange={handleChanging}  
    >
      <MenuItem value={1}>None</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={10}>10 </MenuItem>
      <MenuItem value={15}>15</MenuItem>
      <MenuItem value={18}>18</MenuItem>
      <MenuItem value={20}>20 </MenuItem>
      <MenuItem value={25}>25 </MenuItem>
      <MenuItem value={30}>30 </MenuItem>


    </Select>
</Box>

<Box sx={{display:'flex',gap:'100px',alignItems:'center',marginTop:'20px'}}>
    <Typography>Quantity</Typography>
     {/*  */}
     <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid #e0e0e0', 
        borderRadius: '4px', 
        width: 'fit-content',
        mt: 0.5,
        bgcolor: 'transparent'
      }}>
        <Button 
          onClick={handleDecrement}
          sx={{ 
            minWidth: '35px', 
            height: '35px', 
            color: '#666',
            fontSize: '20px',
            '&:hover': { bgcolor: '#f5f5f5' }
          }}
        >
          -
        </Button>

        <Typography sx={{ 
          px: 2, 
          fontSize: '14px', 
          fontWeight: '500',
          borderLeft: '1px solid #e0e0e0', 
          borderRight: '1px solid #e0e0e0',
          lineHeight: '35px'
        }}>
          {count}
        </Typography>

        <Button 
          onClick={handleIncrement}
          sx={{ 
            minWidth: '35px', 
            height: '35px', 
            color: '#666',
            fontSize: '20px',
            '&:hover': { bgcolor: '#f5f5f5' }
          }}
        >
          +
        </Button>
      </Box>
{/*  */}
</Box>
<Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
<Box sx={{display:'flex',gap:'10px'}}>
    <Button onClick={handleAddToCart} sx={{width:'50%',textTransform:'none',background:'rgb(33,150,243)',display:'flex',gap:'10px',color:'white'}}>
<GiShoppingCart fontSize={20}/>
<Typography sx={{color:'white',fontSize:'14px'}}>Add to Cart</Typography>
    </Button>
    {/*  */}
 <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%",background:'rgb(0,201,88)' }}
        >
          Add To Cart Successfully
        </Alert>
      </Snackbar>
    {/* </> */}
    {/*  */}
    <Button 
  component={Link}
  to="/commerce/checkout"
  onClick={() => {
  addToCart({ ...product, quantity: count }); 
  }}
  sx={{
    width: '50%',
    textTransform: 'none',
    background: 'rgb(103,58,183)',
    color: 'white'
  }}
>
  Buy Now
</Button>
</Box>
  </Box>
</Box>
{/*  */}
<Box sx={{width:{xs:'90%',sm:'100%',md:'100%'},height:'auto',bgcolor: 'background.paper'}}>

     <Box sx={{ width: {xs:'100%',sm:'100%',md:'100%'}}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',bgcolor: 'background.default' }}>
        <Tabs value={TabValue} onChange={handleChanged} aria-label="basic tabs example">
          <Tab label={
            <Typography sx={{fontSize:'13px',textTransform:"none"}}>Description</Typography>
          } {...a11yProps(0)} />
          <Tab label={
            <Box sx={{display:'flex',gap:'10px'}}>
            <Typography sx={{fontSize:'13px',textTransform:"none"}}>Reviews</Typography>
             <Chip sx={{height:'20px',background:'rgb(237,231,246)',color:'rgb(103,58,183)'}} label={
        <Typography sx={{fontSize:'13px'}}>13</Typography>
      } variant="outlined" />
            </Box>
          }  {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel sx={{height:'auto'}} value={TabValue} index={0} >
        <Accordion defaultExpanded sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{fontSize:'13px',color:"gray"}}>Specification</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:'auto'}}>
         <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:"row"},gap:{xs:'30px',md:'130px'}}}>
          <Box sx={{width:{xs:'100%',sm:'100%',md:'35%'},height:'100%'}}>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>General</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',marginTop:"10px"}}>
              <Box sx={{width:'auto',height:'300px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Type</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Sleeve</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Fit</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Fabric</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Style</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Ideal For</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Size</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Pattern</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Reversible</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Secondary Color</Typography>




              </Box>
              <Box sx={{width:'auto',height:'300px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <Typography sx={{fontSize:'13px'}}>Hooded Neck, Paint Clothes</Typography>
                <Typography sx={{fontSize:'13px'}}>Full</Typography>
                <Typography sx={{fontSize:'13px'}}>Regular</Typography>
                <Typography sx={{fontSize:'13px'}}>Hosiery, Smooth, Silk</Typography>
                <Typography sx={{fontSize:'13px'}}>CV-TS9865</Typography>
                <Typography sx={{fontSize:'13px'}}>All</Typography>
                <Typography sx={{fontSize:'13px'}}>Free</Typography>
                <Typography sx={{fontSize:'13px'}}>Printed</Typography>
                <Typography sx={{fontSize:'13px'}}>No</Typography>
                <Typography sx={{fontSize:'13px'}}>Black, Brown</Typography>

              </Box>

            </Box>
          </Box>
           <Box sx={{width:{xs:'100%',sm:'100%',md:'25%'},height:'36%'}}>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>In The Box</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',marginTop:"10px"}}>
              <Box sx={{width:'auto',height:'110px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Sales Package</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Gift Box</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Plastic Wrapper</Typography>
                <Typography sx={{fontSize:'12px',color:'gray'}}>Safety Wrapper</Typography>
              </Box>
              <Box sx={{width:'auto',height:'110px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <Typography sx={{fontSize:'13px'}}>5 Items</Typography>
                <Typography sx={{fontSize:'13px'}}>Yes</Typography>
                <Typography sx={{fontSize:'13px'}}>Yes</Typography>
                <Typography sx={{fontSize:'13px'}}>No</Typography>
              </Box>

            </Box>
          </Box>
          </Box>
        </AccordionDetails>
        
      </Accordion>
      </CustomTabPanel>
      <CustomTabPanel value={TabValue} index={1}>
        {/*  */}
<Box sx={{ maxWidth: 900, mx: 'auto', p: 4, bgcolor: 'background.paper' }}>
      {/* Top Section: Summary and Bars */}
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={"space-evenly"} alignItems="center" sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center', minWidth: 200 }}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            Average Rating
          </Typography>
          <Typography variant="h4" sx={{ color: '#4A90E2', fontWeight: 600, my: 1 }}>
            4.5/5
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Rating value={4.5} precision={0.5} readOnly size="medium" sx={{ color: '#FFB400' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>(28.98)</Typography>
          </Stack>
        </Box>

        <Box sx={{ width: 'auto' }}>
          {ratingData.map((item) => (
            <Stack key={item.label} direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ minWidth: 55, color: 'text.secondary',fontSize:'13px' }}>{item.label}</Typography>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  width:'150px',
                  height: 3,
                  borderRadius: 3,
                  bgcolor: '#E0E0E0',
                  '& .MuiLinearProgress-bar': { bgcolor: 'rgb(103,58,183)' },
                }}
              />
              <Typography variant="body2" sx={{ minWidth: 40, color: 'black',fontSize:'13px' }}>({item.count})</Typography>
            </Stack>
          ))}
        </Box>

      <Button
  variant="outlined"
  sx={{
    color: "rgb(33,150,243)",
    borderColor: "rgb(33,150,243)",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width:{xs:'80%',md:'20%'}
  }}
>
  <EditNoteIcon />
  <Typography component="span" sx={{ fontSize: "13px" }}>
    Write a Review
  </Typography>
</Button>

      </Stack>

      {/* Reviews List */}
      {reviews.map((review) => (
        <Box key={review.id} sx={{ py: 4, borderTop: '1px solid #F0F0F0', position: 'relative' }}>
          <Stack direction="row" spacing={2}>
            <Avatar src={review.img} sx={{ width: 48, height: 48, bgcolor: '#f0f0f0' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{review.name}</Typography>
                {review.type === 'runner' ? (
                  <DirectionsRunIcon sx={{ color: '#FF5252', fontSize: 20 }} />
                ) : (
                  <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 18 }} />
                )}
                <Rating value={review.rating} readOnly size="small" sx={{ ml: 1, color: '#FFB400' }} />
              </Stack>
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mb: 1.5 }}>
                {review.date}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, maxWidth: '90%' }}>
                {review.text}
              </Typography>
            </Box>
            <IconButton size="small" sx={{ position: 'absolute', right: 0, top: 30, color: '#D0D0D0' }}>
              <MoreHorizIcon />
            </IconButton>
          </Stack>
        </Box>
      ))}
<Divider/>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="text" sx={{ textTransform: 'none', fontSize: '13px' }}>
          Load More Comments
        </Button>
      </Box>
</Box>
        {/*  */}
      </CustomTabPanel>
      {/*  */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
           sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}
        >
          <Typography component="span" color="gray" fontSize={13}>Material And Wash Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'13px',color:'gray'}}>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
        </AccordionDetails>
      </Accordion>
      {/*  */}
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
           sx={{
    "&:before": { display: "none" },
    "&.Mui-expanded": { margin: 0 },
  }}
        >
          <Typography component="span" color="gray" fontSize={13}>Add On Data</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'13px',color:'gray'}}>
         Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
        </AccordionDetails>
      </Accordion>



      {/*  */}
    </Box>
{/*  */}

{/*  */}
</Box>
{/*  */}

<Box sx={{ width: {xs:'90%',sm:'90%',md:'100%'}, height: 'auto',bgcolor: 'background.paper','& .slick-prev:before, .slick-next:before': {
          color: '#888888', 
          fontSize: '24px',
        },
        '& .slick-dots li button:before': {
          color: '#888888', 
          opacity: 0.3,
        },
        '& .slick-dots li.slick-active button:before': {
          color: '#888888', 
          opacity: 1,
        } }}>
  <Typography variant="h6" fontWeight={600}>Related Products</Typography>
  
  <Box sx={{ width: "100%", mt: "20px" }}>
  <Slider {...setting}>
  {products.map((item, index) => (
    <Box
      key={index}
      sx={{
        px: { xs: 1.5, md: 2 },   // ✅ GAP between cards
      }}
    >
      <Box
        component={Link}
        to={`/commerce/product-details/${item.id}`}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          bgcolor: 'background.default',
          height: 380,
          borderRadius: 2,
          cursor: 'pointer',
          border: '1px solid #eee',
          overflow: 'hidden',
          transition: 'all 0.25s ease-in-out',
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box>
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box sx={{ p: 1.5 }}>
          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: 'gray',
              mt: 0.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.desc}
          </Typography>

          <Rating size="small" value={item.rating} readOnly sx={{ my: 1 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography fontWeight="bold">{item.price}</Typography>

            <Button
              size="small"
              variant="contained"
              sx={{ minWidth: 40 }}
              onClick={(e) => e.preventDefault()}
            >
              <ShoppingCartIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  ))}
</Slider>

  </Box>
</Box>
   </Box>
    </Main>
  );
};

// export default ProductDetails;
