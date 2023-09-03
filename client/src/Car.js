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
      <input id="name" />
      <button onClick={() => shoot(document.getElementById("name").value)}>
        Click me
      </button>
    </>
  );
}

export default Car;
