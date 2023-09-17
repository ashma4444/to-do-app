import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import useApi from "../hooks/useApi";
import { URLS } from "../constants";
import Loading from "./Loading";

function InputGroupComp({ label, buttonName, placeholder, url, todoId }) {
  const { error, loading, create } = useApi();
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
