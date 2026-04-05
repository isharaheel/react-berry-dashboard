import { Card, Box, Typography, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BasicLineChart from "./linegraph2";

const Wrapper = styled(Card)(({ theme }) => ({
  width: "100%", 
  maxWidth: "400px", 
  padding: "25px",
  minHeight: 'auto',
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  background: "background.default",
  boxSizing: "border-box", 
  [theme.breakpoints.down('md')]: {
    maxWidth: "100%",
    margin: "0 auto",
  }
}));

const ChartBox = styled(Box)(() => ({
  height: "auto",
  minHeight: "auto",
  borderRadius: "14px",
  background: "rgba(183,155,227,0.25)",
  marginTop: "15px",
  marginBottom: "20px",
  padding: "12px",
  overflow: "hidden",
}));

const StockRow = ({ name, price, profit, type }) => (
<Box
sx={{display: "flex",justifyContent: "space-between",alignItems: "center",marginBottom: "16px",}}>
<Box>
<Typography sx={{ fontSize: "15px", fontWeight: 600, color: "#2a2a2a" }}>{name}</Typography>
<Typography
sx={{
fontSize: "13px",
color: type === "profit" ? "#28c76f" : "#ff4d4f",
}}
>{profit}</Typography>
</Box>
<Box sx={{ display: "flex", alignItems: "center" }}>
<Typography
sx={{
    fontSize: "15px",
    fontWeight: 600,
    marginRight: "5px",

}}>${price}</Typography>
{type === "profit" ? (
<ArrowDropUpIcon sx={{ color: "#28c76f" }} />
) : (
<ArrowDropDownIcon sx={{ color: "#ff4d4f" }} />
)}
</Box>
</Box>
);
export default function PopularStocksCard() {
return (
<Wrapper>
<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Popular Stocks</Typography>
<IconButton size="small"><MoreHorizIcon /></IconButton>
</Box>
<ChartBox>
<Typography sx={{ color: "#7e57c2", fontWeight: 600, fontSize: "14px" }}>Bajaj Finery</Typography>
<Typography sx={{ color: "#7e57c2", fontSize: "12px", marginBottom: "4px" }}>10% Profit</Typography>

<Box sx={{ width: '100%', height: 80 }}><BasicLineChart /></Box>
</ChartBox>

<Box sx={{ display: 'flex', flexDirection: 'column' }}>
<StockRow name="Bajaj Finery" price="1839.00" profit="10% Profit" type="profit" />
<StockRow name="TTML" price="100.00" profit="10% loss" type="loss" />
<StockRow name="Reliance" price="200.00" profit="10% Profit" type="profit" />
<StockRow name="TTML" price="189.00" profit="10% loss" type="loss" />
<StockRow name="Stolon" price="189.00" profit="10% loss" type="loss" />
</Box>

<Divider sx={{ marginY: "15px" }} />

<Typography sx={{textAlign: "center",color: "#4a90e2",fontWeight: 600,cursor: "pointer",fontSize: "14px",mt: 'auto' }}>
View All →</Typography>
</Wrapper>
);
}