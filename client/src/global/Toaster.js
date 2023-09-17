import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from "../contexts/ToastContext";

function Toaster() {
  // const [show, setShow] = useState(true);
  const { show, setShow, toast } = useToastContext();

  return (
    <ToastContainer position="bottom-end">
      <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{toast?.title || "Title"}</strong>
        </Toast.Header>
        <Toast.Body>{toast?.msg || "Toast Message"}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
