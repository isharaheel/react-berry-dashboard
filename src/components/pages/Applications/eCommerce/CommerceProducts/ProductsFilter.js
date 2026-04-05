import * as React from "react";
import {
  Box,
  Button,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  FormControlLabel,
  Radio,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Poor",
  1: "Bad",
  1.5: "Ok",
  2: "Average",
  2.5: "Good",
  3: "Very Good",
  3.5: "Excellent",
  4: "Outstanding",
  4.5: "Perfect",
  5: "Best",
};

export default function ProductFilter() {
  const theme = useTheme();

  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  const FilterContent = () => (
    <>
      <Accordion defaultExpanded sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontSize={14}>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox />} label="Male" />
          <FormControlLabel control={<Checkbox />} label="Female" />
          <FormControlLabel control={<Checkbox />} label="Kids" />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontSize={14}>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="All" />
            <FormControlLabel control={<Checkbox />} label="Electronics" />
            <FormControlLabel control={<Checkbox />} label="Fashion" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel control={<Checkbox />} label="Kitchen" />
            <FormControlLabel control={<Checkbox />} label="Books" />
            <FormControlLabel control={<Checkbox />} label="Toys" />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontSize={14}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: 2 }}>
          <Box>
            <FormControlLabel value="below10" control={<Radio />} label="Below $10" />
            <FormControlLabel value="50-100" control={<Radio />} label="$50 - $100" />
            <FormControlLabel value="150-200" control={<Radio />} label="$150 - $200" />
          </Box>
          <Box>
            <FormControlLabel value="10-50" control={<Radio />} label="$10 - $50" />
            <FormControlLabel value="100-150" control={<Radio />} label="$100 - $150" />
            <FormControlLabel value="over200" control={<Radio />} label="Over $200" />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontSize={14}>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              value={value}
              precision={0.5}
              onChange={(e, newValue) => setValue(newValue)}
              onChangeActive={(e, newHover) => setHover(newHover)}
              emptyIcon={<StarIcon style={{ opacity: 0.5 }} />}
            />
            {value !== null && (
              <Box sx={{ ml: 1, fontSize: 13, color: "gray" }}>
                ({labels[hover !== -1 ? hover : value]})
              </Box>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Button
        fullWidth
        sx={{
          mt: 2,
          textTransform: "none",
          background: "rgb(244,67,54)",
          color: "white",
          "&:hover": { background: "rgb(220,60,50)" },
        }}
      >
        Clear all
      </Button>
    </>
  );

  return (
    <>
      {isMobileOrTablet && (
        <Button
          startIcon={<FilterListIcon />}
          onClick={() => setDrawerOpen(true)}
          sx={{ textTransform: "none", mb: 2 }}
        >
          Filter
        </Button>
      )}

      {isMobileOrTablet && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 300, p: 2 }}>
            <FilterContent />
          </Box>
        </Drawer>
      )}

      {isLaptop && (
        <Box sx={{ width: 300 }}>
          <FilterContent />
        </Box>
      )}
    </>
  );
}
