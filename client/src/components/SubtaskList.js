import { FaTrashAlt } from "react-icons/fa";
import { Form } from "react-bootstrap";
import React from "react";
import PopupAlert from "../utils/popUpAlert";
import { useAPIContext } from "../contexts";
import { URLS } from "../constants";

function SubtaskList({ subtaskTitle, status, subtaskId }) {
  const { deleteById, updateById } = useAPIContext();
  const deleteSubTask = async () => {
    const result = await PopupAlert({ title: "Are you ready?" });

    if (result) {
      await deleteById({ url: URLS.SUBTASKS, id: subtaskId });
    }
  };

  const handleChange = async (status) => {
    const payload = {
      status: status ? "completed" : "pending",
    };
    await updateById({ url: URLS.SUBTASKS, id: subtaskId, payload });
  };

  return (
    <div className="p-2">
      <Form className="d-flex align-items-center justify-content-between">
        <Form.Check // prettier-ignore
          type="checkbox"
          checked={status === "completed" ? true : false}
          label={subtaskTitle}
          onChange={(e) => {
            handleChange(e.target.checked);
          }}
        />
        <FaTrashAlt onClick={deleteSubTask} />
      </Form>
    </div>
  );
}

export default SubtaskList;
