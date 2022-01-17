import React from "react";

const Button = (props) => {
    <div>
      {props.title}-{props.description}
      <button onClick={props.press}>{props.children}</button>
    </div>
};

export default Button;
