import React, { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false)
 
  function toggle(){
    setIsShown(prevShown => !prevShown)
}
  
  return ( 
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}

//{isShown ? <button onClick={toggle}>punch my line Hide</button> :  <button onClick={toggle}>Reveal Punchline</button>}