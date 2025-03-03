import { useState, } from "react";
import "./../styles/Led.css"; 

const LedIndicator = ({ animation }) => {
  return (
    <div className={`led blink-${animation}`}></div>
  );
};

export default LedIndicator;
