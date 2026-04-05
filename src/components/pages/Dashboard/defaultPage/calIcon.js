import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function CalculatorBlankIcon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="6.2" y="4.6" width="11.6" height="4" rx="0.6" ry="0.6" fill="none" stroke="currentColor" strokeWidth="1"/>
      <g transform="translate(6,10)">
        <rect x="0"   y="0"  width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="4.1" y="0"  width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="8.2" y="0"  width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>

        <rect x="0"   y="3.6" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="4.1" y="3.6" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="8.2" y="3.6" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>

        <rect x="0"   y="7.2" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="4.1" y="7.2" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <rect x="8.2" y="7.2" width="3.2" height="2.8" rx="0.4" fill="none" stroke="currentColor" strokeWidth="0.9"/>
      </g>
    </SvgIcon>
  );
}
