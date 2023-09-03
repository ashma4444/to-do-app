import React from "react";

function Car(props) {
  // JS logic
  const shoot = (name) => {
    alert(`Shoot... by ${name}`);
  };

  // HTML
  return (
    <>
      <div>Car is of color {props.color}</div>
      <button onClick={() => shoot("ashma")}>Click me</button>
    </>
  );
}

export default Car;
