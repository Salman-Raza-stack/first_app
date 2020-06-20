import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>This is first child</h2>
      <h3>This is {props.name}</h3>
    </div>
  );
};
export default Child;
