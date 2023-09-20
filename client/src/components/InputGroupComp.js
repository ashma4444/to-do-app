import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import Loading from "./Loading";
import { useAPIContext } from "../contexts";

function InputGroupComp({ label, buttonName, placeholder, url, todoId }) {
  const { error, loading, create } = useAPIContext();
  // const [payload, setPayload] = useState({});
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    const payload = {
      title,
    };
    if (todoId) payload.todo = todoId;
    await create({ url, payload });
  };

  if (error) return <>{JSON.stringify(error)}</>;

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
          // onChange={(e) => {
          //   setPayload((payload) => {
          //     return { ...payload, title: e.target.value };
          //   });
          // }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Button variant="success" onClick={handleSubmit}>
          {buttonName || "Click Me"}
        </Button>
      </InputGroup>
    </>
  );
}

export default InputGroupComp;
