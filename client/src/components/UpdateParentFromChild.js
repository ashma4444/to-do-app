import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const Child = ({ setValue }) => {
  const [child, setChild] = useState("");

  const sendData = useCallback(() => {
    setValue(child);
  }, [child, setValue]);

  return (
    <>
      I am child{" "}
      <input
        // onChange={(e) => {
        //   setData(e.target.value);
        // }}

        onChange={(e) => {
          setChild(e.target.value);
        }}
      />
      <button onClick={sendData}>Send</button>
    </>
  );
};

function UpdateParentFromChild() {
  const [value, setValue] = useState("I am parent data ready to be updated");

  const receiveData = (data) => {
    setValue(data);
  };

  return (
    <div>
      {value} <hr />
      <Child setValue={setValue} />
    </div>
  );
}

export default UpdateParentFromChild;
