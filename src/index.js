import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { resetValues } = props;
  console.log("props:::", props);

  return <button onClick={resetValues}>{props.children}</button>;
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input 
      placeholder="Type your name" 
      value={name}
      onChange={(event) => setName(event.target.value)}
      >
      </input>
      <Button resetValues={reset}>Reset</Button>
      {/* {name && <h1>Hello {name}</h1>}
      {!name && <h1></h1>} */}
      {name ? <h1>Hello {name}</h1> : <h1></h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
