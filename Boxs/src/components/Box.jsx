import React, { useState } from "react";
import "./box.css";

export default function Box(props) {
  //derived state
  /*const [onOff , setOnOff] = useState(props.on);
  const handleClick = ()=>{setOnOff(prevOn => !prevOn)}*/
  
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return   <button style={styles} className="box" onClick={props.handleClick}> </button>; 
}
