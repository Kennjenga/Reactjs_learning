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
      {isShown ? <button onClick={toggle}>punch my line</button> :  <button onClick={toggle}>Reveal Punchline</button>}
      <hr />
    </div>
  );
}
