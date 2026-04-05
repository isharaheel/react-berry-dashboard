import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  styled,
  Divider,
  Button,
  IconButton,
  TextField,
  Stack,
  Avatar,
  Grid,
  Paper,
  CardContent,
  Card,
  Chip,
  Breadcrumbs,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BusinessIcon from "@mui/icons-material/Business";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { CartContext } from "../../../../CartContext";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IoHome } from "react-icons/io5";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { FaTruck } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:'600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const addresses = [
  {
    id: 1,
    name: "Martin Shaw",
    tag: "Office",
    isDefault: true,
    phone: "(939) 513-8172",
    address: "1654 Zideh Plz, 27 Elabe Traillllll, Suwecpimmmmmmm, Kentucky, kGambia - HS6N 5ATkkk"
  },
  {
    id: 2,
    name: "Billy Castillo",
    tag: "Home",
    isDefault: false,
    phone: "(440) 597-4681",
    address: "1359 Pusuw Park, 1057 Geptoc Key, Pazworog, Kentucky, Bahrain - FK6T 8HK"
  },
  {
    id: 3,
    name: "Brenda Murphy",
    tag: "Office",
    isDefault: false,
    phone: "8998877",
    address: "1654 Zideh Plz, 125 Test Rd, Knoxville, Knoxville, United States - 778"
  },
  {
    id: 4,
    name: "Murphy",
    tag: "Office",
    isDefault: false,
    phone: "8998877",
    address: "1654 Zideh Plz, 125 Test Rd, Knoxville, Knoxville, United States - 778"
  }
];
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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
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
export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0); 
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
if (cartItems.length === 0) {
  // <img/>
  <Typography>No product</Typography>
}
  const subTotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (price * (item.quantity || 1));
  }, 0);

  const handleNextStep = () => {
    if (activeStep < 2) setActiveStep(activeStep + 1);
  };
    const [count, setCount] = React.useState(1);
  
 const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => { if (count > 1) setCount(count - 1); };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
      const [Radiovalue, setRadioValue] = React.useState('');

const handleChanged = (event) => {
  setRadioValue(event.target.value);
};
       const [Payvalue, setPayValue] = React.useState('');

const handChanged = (event) => {
  setPayValue(event.target.value);
};
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const orderId = "53d6da52-1f13-54e2-a0e3-8e07aa713f25";
  const phone = "(946) 973-2692";
  return (
    <Main>
<SectionOne sx={{bgcolor:'background.paper'}}>
      <Typography sx={{fontWeight:600}}>Checkout</Typography>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" >
        <Link underline="hover" color="inherit" href="/" sx={{fontSize:'13px'}}>
         <IoHome />

        </Link>
      <Typography sx={{ color:"inherit",fontSize:'13px' }}>E-Commerce</Typography>
        <Typography sx={{ color:"inherit",fontSize:'13px' }}>Checkout</Typography>
      </Breadcrumbs>
    </div>
 </SectionOne>








<Box sx={{ bgcolor: 'background.paper', pt: 2,paddingLeft:'10px', borderRadius: '10px',paddingRight:'15px'}}>
<Box sx={{ width: '100%'}}>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"   variant="scrollable"
  scrollButtons="auto">
          <Tab label={
            <Box sx={{display:'flex',gap:'10px',textTransform:'none'}}>
            <Avatar sx={{ bgcolor: 'white', color: 'rgb(33,150,243)', border: '1px solid #eee' }}><LocalMallIcon /></Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '14px', color:'green' }}>User Profile</Typography>
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>Product Added</Typography>
          </Box>
          </Box>
          } {...a11yProps(0)} />
          <Tab label={
            <Box sx={{display:'flex',gap:'10px',textTransform:'none'}}>
            <Avatar sx={{ bgcolor: 'white' }}><BusinessIcon /></Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '14px', color:'green' }}>Billing Address</Typography>
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>Billing Information</Typography>
          </Box>
          </Box>
          } {...a11yProps(1)} />
          <Tab label={
              <Box sx={{display:'flex',gap:'10px',textTransform:'none'}}>
            <Avatar sx={{ bgcolor: 'white'}}><BusinessIcon /></Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '14px', color:'green'  }}>Payments</Typography>
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>Add & Update Cards</Typography>
          </Box>
          </Box>
          } {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* tab 1 */}
      <CustomTabPanel value={value} index={0}>
    <Box sx={{ bgcolor: 'background.paper', borderRadius: '10px', p: 4 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Cart Item <span style={{ color: 'gray', fontSize: '14px' }}>({cartItems.length})</span>
        </Typography>
<Box
  sx={{
    width: '100%',
    maxHeight: { xs: '75vh', sm: 'none' },
    overflowY: { xs: 'auto', sm: 'visible' },
    overflowX: 'hidden',
    borderRadius: '8px',
    border: '1px solid #eaeaea',
    bgcolor: 'background.paper',
  }}
>
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      px: 2,
      py: 1.5,
      borderBottom: '1px solid #eee',
    }}
  >
    <Typography sx={{ flex: 2, fontSize: 14, fontWeight: 600 }}>
      Product
    </Typography>
    <Typography sx={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
      Price
    </Typography>
    <Typography sx={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
      Quantity
    </Typography>
    <Typography sx={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
      Total
    </Typography>
    <Box sx={{ width: 40 }} />
  </Box>

  {cartItems.map((item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    const itemQty = item.quantity || 1;

    return (
      <Box key={item.id}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            px: 2,
            py: 2.5,
            gap: { xs: 2, md: 0 },
            alignItems: { md: 'center' },
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flex: 2,
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: 60,
                height: 60,
                borderRadius: 2,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />

            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.5 }}>
                Size: 8 &nbsp;|&nbsp; Color: Default
              </Typography>
            </Box>
          </Stack>

          <Typography
            sx={{
              flex: 1,
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 600,
              mt: { xs: 1, md: 0 },
            }}
          >
            {item.price}
          </Typography>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 1, md: 0 },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                px: 0.5,
              }}
            >
              <IconButton
                size="small"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label="Decrease quantity"
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Typography sx={{ px: 1.5, fontSize: 14 }}>
                {item.quantity}
              </Typography>

              <IconButton
                size="small"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Typography
            sx={{
              flex: 1,
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 600,
              mt: { xs: 1, md: 0 },
            }}
          >
            ${(itemPrice * itemQty).toFixed(2)}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 1, md: 0 },
            }}
          >
            <IconButton
              color="error"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider />
      </Box>
    );
  })}
</Box>

        <Box sx={{ mt: 4, border: '1px solid lightgray', borderRadius: '8px', p: 2 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Order Summary</Typography>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Sub Total</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Coupon Discount</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>$0.00</Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Shipping Charges</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>Total</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
          </Stack>
        </Box>

        
          

          <Box sx={{ width: { xs: '100%', md: 'auto' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    textAlign: { xs: 'left', md: 'right' },
    marginTop:'20px'}}>
            <Typography sx={{ fontSize: '12px', color: 'red', mb: 1,textAlign:{xs:'right'} }}>Have a coupon code?</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2,display:'flex',justifyContent:{xs:'flex-start',md:'flex-end'} }}>
              <TextField fullWidth size="small" placeholder="Discount Coupon" sx={{width:'200px'}} />
              <Button variant="outlined" sx={{ textTransform: 'none' }}>Apply</Button>
            </Stack>
           
          </Box>
<Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
          <Button component={Link} to="/commerce/products" startIcon={<ArrowBackIcon />} sx={{ textTransform: 'none', color: 'rgb(33,150,243)' }}>
            Continue Shopping
          </Button>


           <Button 
              fullWidth variant="contained" 
              onClick={handleNextStep}
              sx={{ bgcolor: 'rgb(33,150,243)', textTransform: 'none', py: 1.2, '&:hover': { bgcolor: 'rgb(23,130,223)' },width:'250px' }}
            >
              Check Out
            </Button>
        </Box>
      </Box>
      </CustomTabPanel>
      {/* tab 2 */}
      <CustomTabPanel value={value} index={1}>
  <Box sx={{width:'100%',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px',height:'auto',marginTop:'40px'}}>

{/* Leftf side */}
<Box sx={{width:{xs:'100%',sm:'100%',md:'65%'},height:'auto'}}>
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Typography sx={{ fontSize:'14px' }}>Billing Address</Typography>
      <Button size="small" startIcon={<AddIcon />} sx={{ textTransform: 'none', borderRadius: '2px',background:'rgb(33,150,243)',color:'white' }}>
        Add Address
      </Button>
      </Box>
  <Box 
    sx={{
      width: '100%', 
      height:"auto",
      marginTop: '20px', 
      display: 'flex',
      flexDirection:{xs:'column',sm:'column',md:'row'}, 
      gap: '20px', 
      alignItems: 'center',
    }}
  >
    <Box sx={{ width: {xs:'90%',sm:'90%',md:'46%'},padding:'10px', border: '1px solid lightgray', height: 'auto', borderRadius: '10px' }}>
      
      <Box sx={{width:'100%',height:'200px'}}>
<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
    <Typography fontSize={13}>Martin Shaw</Typography>
    <Typography fontSize={13} color="gray">(Office)</Typography>
  </Box>
  <Chip size="small" label={
    <Typography>Default</Typography>
  } sx={{textTransform:'none',background:'rgb(227,242,253)',color:'rgb(30,136,229)',fontSize:'12px'}}/>
</Box>
<Typography sx={{fontSize:'13px',color:'gray',marginTop:"20px"}}>1654 Zideh Plz, 27 Elabe Trailllllll, Suwecpimmmmmm, Kentucky, kGambia - HS6N 5ATkkk</Typography>
<Typography sx={{fontSize:'13px',color:'purple',marginTop:"20px"}}>(939) 513-8172
</Typography>
<Button size="small" sx={{textTransform:'none',fontSize:'13px',color:'rgb(30,136,229)',border:'1px solid rgb(30,136,229)',marginTop:"20px",
  "&:hover": {
    background:'rgb(227,242,253)'
  }}}>Deliver To This Address</Button>
      </Box>
    </Box>

    {/* Right Box */}
    <Box sx={{width: {xs:'90%',sm:'90%',md:'46%'},padding:'10px', border: '1px solid lightgray', height: 'auto', borderRadius: '10px' }}>
       <Box sx={{width:'100%',height:'200px'}}>
<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
    <Typography fontSize={13}>Billy Castillo
</Typography>
    <Typography fontSize={13} color="gray">(Office)</Typography>
  </Box>
  
</Box>
<Typography sx={{fontSize:'13px',color:'gray',marginTop:"20px"}}>1359 Pusuw Park, 1057 Geptoc Key, Pazworog, Kentucky, Bahrain - FK6T 8HK</Typography>
<Typography sx={{fontSize:'13px',color:'purple',marginTop:"20px"}}>(440) 597-4681
</Typography>
<Button size="small" sx={{textTransform:'none',fontSize:'13px',color:'rgb(30,136,229)',border:'1px solid rgb(30,136,229)',marginTop:"20px",
  "&:hover": {
    background:'rgb(227,242,253)'
  }}}>Deliver To This Address</Button>
      </Box>
    </Box>
  </Box>
    <Box 
    sx={{
      width: '100%', 
      height:"auto",
      marginTop: '20px',  
      alignItems: 'center',
    }}
  >
    {/* Left Box */}
    <Box sx={{ width: {xs:'90%',sm:'90%',md:'46%'},padding:'10px', height: 'auto', borderRadius: '10px',ml:{xs:'7px',md:'0px'},marginBottom:'20px',border:'1px solid lightgray' }}>
      
      <Box sx={{width:'100%',height:'200px'}}>
<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  <Box sx={{display:'flex',gap:'10px'}}>
    <Typography fontSize={13}>Brenda Murphy
</Typography>
    <Typography fontSize={13} color="gray">(Office)</Typography>
  </Box>
</Box>
<Typography sx={{fontSize:'13px',color:'gray',marginTop:"20px"}}>1654 Zideh Plz, 125 Test Rd, Knoxville, Knoxville, United States - 778</Typography>
<Typography sx={{fontSize:'13px',color:'purple',marginTop:"20px"}}>8998877
</Typography>
<Button size="small" sx={{textTransform:'none',fontSize:'13px',background:'rgb(227,242,253)',color:'rgb(30,136,229)',border:'1px solid rgb(30,136,229)',marginTop:"20px"}}>Deliver To This Address</Button>
      </Box>
    </Box>
{/*  */}
       <Box sx={{border: '1px solid lightgray', borderRadius: '8px', p: 2, bgcolor: 'background.default',width:{xs:'85%',sm:'90%',md:'95%'},margin:{xs:'auto',sm:'auto'},marginLeft:{md:'0px'} }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Order Summary</Typography>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Sub Total</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Coupon Discount</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>$0.00</Typography>
            </Box>
            <Divider />

             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Shipping Charges</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>Total</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
          </Stack>
        </Box>
  </Box>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",width:'100%',margin:{xs:'auto',md:'0px',sm:'auto'},marginTop:{xs:'20px',sm:'20px',md:"10px"},marginBottom:'10px',width:{xs:'90%',sm:'100%',md:'100%'}}}>
    <Button variant="text" startIcon={<ArrowBackIcon/>} sx={{textTransform:'none',fontSize:'13px'}}>Back</Button>
    <Button variant="contained" sx={{textTransform:'none',fontSize:'13px',color:'white'}}>Place Order</Button>
  </Box>
</Box>

{/* Right side */}

<Box sx={{width:{xs:'98%',sm:'100%',md:'40%'},height:'50%',display:'flex',flexDirection:'column',gap:'30px'}}>
  <Box sx={{width:'95%',padding:'10px',height:"auto",border:'1px solid lightgray',borderRadius:'10px'}}>
    <Box sx={{display:'flex',width:'100%',gap:'10px',alignItems:'center'}}>
      <Avatar/>
      <Typography fontWeight={600}>Delia Pope</Typography>
    </Box>
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'5px',marginTop:'20px'}}>
      <Typography fontSize={12} color="gray">Email</Typography>
      <Typography fontSize={13}>deliaturewpo@company.com</Typography>
    </Box>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'5px',marginTop:'20px'}}>
      <Typography fontSize={12} color="gray">Contact</Typography>
      <Typography fontSize={13}>(980) 473-2942</Typography>
    </Box>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'5px',marginTop:'20px'}}>
      <Typography fontSize={12} color="gray">No. of order</Typography>
      <Typography fontSize={13}>19</Typography>
    </Box>
  </Box>
  {/*  */}
 
<Box sx={{width:'95%',padding:'10px',height:"200px",border:'1px solid lightgray',borderRadius:'10px'}}>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
    <Typography fontSize={13}>Martin Shaw</Typography>
    <Typography fontSize={13} color="gray">(Office)</Typography>
  </Box>
  <Chip size="small" label={
    <Typography>Default</Typography>
  } sx={{textTransform:'none',background:'rgb(227,242,253)',color:'rgb(30,136,229)',fontSize:'12px'}}/>
</Box>
<Typography sx={{fontSize:'13px',color:'gray',marginTop:"20px"}}>1654 Zideh Plz, 27 Elabe Trailllllll, Suwecpimmmmmm, Kentucky, kGambia - HS6N 5ATkkk</Typography>
<Typography sx={{fontSize:'13px',color:'purple',marginTop:"20px"}}>(939) 513-8172
</Typography>
<Button size="small" sx={{textTransform:'none',fontSize:'13px',color:'rgb(30,136,229)',border:'1px solid rgb(30,136,229)',marginTop:"20px",
  "&:hover": {
    background:'rgb(227,242,253)'
  }
}}>Deliver To This Address</Button>
      </Box>
 
    
</Box>

</Box>




      </CustomTabPanel>
      {/* tab 3 */}
      <CustomTabPanel value={value} index={2}>
        {/*  */}
<Grid container spacing={3} sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2,display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'20px' }}>
    {/*  */}
<Grid container spacing={3} sx={{ bgcolor: 'background.paper', borderRadius: 2,display:'flex',flexDirection:'column',gap:'20px' }}>
  <Grid sx={{display:'flex',flexDirection:'column',gap:'30px'}}>
  <Grid item xs={12} md={4}>
 

<FormControl>
  <Typography variant="subtitle1" fontWeight="700" sx={{ mb: 2 }}>
    Delivery Options
  </Typography>

  <RadioGroup
    name="controlled-radio-buttons-group"
    value={Radiovalue}
    onChange={handleChanged}
  >
    <Stack spacing={2} sx={{ mb: 4,display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}
     }} alignItems={"center"}>

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 3,
          width: '200px',
          height:'auto',
          cursor: 'pointer',
          borderColor: Radiovalue === 'standard' ? 'rgb(30,136,229)' : 'transparent',
          "&:hover": {
      boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
    }, 
        }}
      >
        <FormControlLabel
          value="standard"
          control={<Radio />}
          label={
            <Box sx={{marginLeft:'10px'}}>
              <Typography variant="body2" fontWeight={600}>
                Standard Delivery (Free)
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Delivered on Monday 8 Jun
              </Typography>
            </Box>
          }
        />
      </Paper>

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 3,
          width: '220',
          height:"auto",
          cursor: 'pointer',
          borderColor: Radiovalue === 'fast' ? 'rgb(30,136,229)' : 'transparent',
          "&:hover": {
      boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
    }, 
        }}
      >
        <FormControlLabel
          value="fast"
          control={<Radio />}
          label={
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Fast Delivery ($5.00)
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Delivered on Friday 5 Jun
              </Typography>
            </Box>
          }
        />
      </Paper>

    </Stack>
  </RadioGroup>
</FormControl>

  </Grid>
{/*  */}
<Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'30px',width:'100%'}}>
<FormControl>
<RadioGroup
    name="controlled-radio-buttons-group"
    value={Payvalue}
    onChange={handChanged}
  >
    <Typography variant="subtitle1" fontWeight="700" sx={{ mb: 2 }}>Payment Options</Typography>
   <Box sx={{display:'flex',flexDirection:'column',width:{xs:'100%',sm:'80%',md:'400px'},height:'auto',gap:'20px'}}>
        <Box sx={{width:'93.4%',height:'100px',border:'1px solid lightgray',display:'flex',gap:'20px',alignItems:'center',paddingLeft:'10px',paddingRight:'15px',borderRadius:'10px'}}>
   <FormControlLabel
   value='fast'
        control={<Radio />}
        label={
          <Box sx={{width:'auto',paddingRight:'10px',height:'auto',display:'flex',flexDirection:'column',gap:'5px'}}>
            <Typography sx={{fontSize:'15px'}}>Pay with PayPal</Typography>
            <Typography sx={{fontSize:'13px',color:'gray'}}>You will be redirected to PayPal website to complete your purchase securely.</Typography>

          </Box>
        }
        />
        <img src="/images/palpal.jpg" alt="palpal" style={{width:'30px',height:'20px'}}/>
</Box>
     

<Box sx={{width:'93.4%',height:'100px',display:'flex',gap:'20px',alignItems:'center',paddingLeft:'10px',paddingRight:'15px',border:'1px solid lightgray',borderRadius:'10px'}}>
   <FormControlLabel
   value='credit'
        control={<Radio />}
        label={
          <Box sx={{width:'auto',paddingRight:'10px',height:'auto',display:'flex',flexDirection:'column',gap:'5px'}}>
            <Typography sx={{fontSize:'15px'}}>Credit / Debit Card</Typography>
            <Typography sx={{fontSize:'13px',color:'gray'}}>We support Mastercard, Visa, Discover and Stripe.</Typography>

          </Box>
        }
        />
        <img src="/images/viza.jpg" style={{width:'30px',height:'20px'}}/>

</Box>
<Box sx={{width:'95%',height:'100px',display:'flex',gap:'20px',alignItems:'center',paddingRight:'10px',paddingLeft:'10px',border:'1px solid lightgray',borderRadius:'10px'}}>
  <FormControlLabel
   value='cash'
        control={<Radio />}
        label={
          <Box sx={{width:'auto',paddingRight:'10px',height:'auto',display:'flex',flexDirection:'column',gap:'5px'}}>
            <Typography sx={{fontSize:'15px'}}>Cash on Delivery</Typography>
            <Typography sx={{fontSize:'13px',color:'gray'}}>Pay with cash when your order is delivered.</Typography>
          </Box>
            
        }
        />
            <FaTruck style={{fontSize:'25px'}}/>
</Box>


   </Box>
     </RadioGroup>
</FormControl>
  {/* payment cards */}
  <Grid item xs={12} md={4.5} sx={{width:'auto',border:'1px solid lightgray',padding:'10px'}}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
      <Typography variant="body1" color="text.secondary" fontSize={13}>Add Your Card</Typography>
      <Button variant="contained" size="small" startIcon={<AddIcon />} sx={{ bgcolor: '#90CAF9', textTransform: 'none' }}>Add Card</Button>
    </Stack>
    <Divider sx={{marginBottom:'20px'}}/>
    <Stack spacing={2}>
      {/* Blue Card */}
      <Box sx={{ 
        p: 3, height: 'auto', borderRadius: 4, color: 'white',width:'300px',
        background: 'linear-gradient(135deg, #90CAF9 0%, #42A5F5 100%)',
        boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)'
      }}>
        <Typography variant="h5" sx={{ letterSpacing: 4, mt: 2 }}>**** **** **** 2599</Typography>
        <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
          <Box><Typography variant="caption">Expire Date</Typography><Typography fontWeight="700">05/24</Typography></Box>
          <Box><Typography variant="caption">CVV</Typography><Typography fontWeight="700">085</Typography></Box>
        </Stack>
      </Box>
      {/* Purple Card */}
      <Box sx={{ 
        p: 3, height: 'auto', borderRadius: 4, color: 'white',width:'300px',
        background: 'linear-gradient(135deg, #CE93D8 0%, #AB47BC 100%)',
        boxShadow: '0 8px 24px rgba(171, 71, 188, 0.3)'
      }}>
        <Typography variant="h5" sx={{ letterSpacing: 4, mt: 2 }}>**** **** **** 2599</Typography>
        <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
          <Box><Typography variant="caption">Expire Date</Typography><Typography fontWeight="700">05/24</Typography></Box>
          <Box><Typography variant="caption">CVV</Typography><Typography fontWeight="700">085</Typography></Box>
        </Stack>
      </Box>
    </Stack>
  </Grid>
</Grid>
<Box sx={{padding:'10px',display:'flex',justifyContent:'space-between'}}>
<Button component={Link} to='/commerce/products' startIcon={<ArrowBackIcon/>} variant="text" sx={{textTransform:'none',fontSize:'13px'}}>Back</Button>
<Button onClick={handleOpen} variant="contained" sx={{textTransform:'none',fontSize:'13px',color:'white',background:'rgb(30,136,229)'}}>Complete Order</Button>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
      sx={{
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"20px",
        textAlign: "center",
        bgcolor: "#fff",
        p: 3
      }}
    >
      {/* Header */}
      <Typography variant="h5" fontWeight={600} mb={1}>
        Thank you for order!
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        We will send a process notification, before it delivered.
      </Typography>

      {/* Order ID */}
      <Typography variant="body2" mb={4}>
        Your order id:{" "}
        <Link href="#" sx={{ color: "#1976d2", textDecoration: "none" }}>
          {orderId}
        </Link>
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="/images/confirm.png"
        alt="Order Confirmed"
        sx={{ width: 300, maxWidth: "100%", mb: 4 }}
      />

      {/* Contact */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        If you have any query or questions regarding purchase items, then fell to get in contact us
      </Typography>
      <Typography variant="body2" color="error" mb={3}>
        {phone}
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
        component={Link}
        to='/commerce/products'
          variant="text"
          startIcon={<CheckCircleOutlineIcon />}
          sx={{ textTransform: "none", color: "#1976d2" }}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          sx={{ textTransform: "none", bgcolor: "#1976d2" }}
        >
          Download Invoice
        </Button>
      </Box>
    </Box>
        </Box>
      </Modal>
</Box>
</Grid>
  
</Grid>
{/*  */}
<Grid sx={{display:'flex',flexDirection:'column',width:{xs:'100%',sm:'100%',md:'27%'},height:'auto',gap:'30px'}}>
  <Typography sx={{fontSize:'14px',fontWeight:500}}>Cart Items</Typography>
  <Box sx={{width:'100%',height:'auto'}}>
    {cartItems.map((item) => {
  return (
    <Box key={item.id} sx={{ display:'flex',flexDirection:'column',gap:'20px' }}>
      <Box sx={{ width: '100%', height: 'auto' }}>
        <img src={item.img} alt={item.title || 'cart item'} style={{width:'80px',height:'80px',borderRadius:'5px'}}/>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography fontSize={13} fontWeight={600}>{item.title}</Typography>
        <Typography fontSize={13} fontWeight={600}>{item.price}</Typography>
        </Box>
      <Box>
        <Typography fontSize={13} color="gray">size:8</Typography>
      </Box>
      
      </Box>
      
<Divider sx={{marginBottom:'10px'}}/>
    </Box>
    
  );
})}
<Box sx={{ mt: 4, border: '1px solid lightgray', borderRadius: '8px', p: 2 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Order Summary</Typography>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Sub Total</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Coupon Discount</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>$0.00</Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Shipping Charges</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>Total</Typography>
              <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
            </Box>
          </Stack>
        </Box>
  </Box>
</Grid>


</Grid>     {/*  */}
      </CustomTabPanel>
    </Box>






       
      </Box>
    </Main>
  );
}