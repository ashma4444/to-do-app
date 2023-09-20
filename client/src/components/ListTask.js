import { Accordion, Form } from "react-bootstrap";
import AlertMsg from "./AlertMsg";
import InputGroupComp from "./InputGroupComp";
import SubtaskList from "./SubtaskList";
import TaskCompleted from "./TaskCompleted";
import { URLS } from "../constants";
import { useAPIContext } from "../contexts";

function ListTask({ tasks }) {
  const { updateById } = useAPIContext();
  const handleChange = async (status, id) => {
    const payload = {
      status: status ? "completed" : "pending",
    };
    await updateById({ url: URLS.TODOS, id, payload });
  };
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <Accordion.Item key={task._id} eventKey={index}>
              <Accordion.Header>
                <Form
                  className="d-flex justify-content-between"
                  style={{ width: "90%" }}
                >
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={`Task ${index + 1}: ${task.title}` || "Label"}
                    checked={task.status === "completed" ? true : false}
                    onChange={(e) => {
                      handleChange(e.target.checked, task?._id);
                    }}
                  />
                  <TaskCompleted total={task.subtasks.length} completed={0} />
                </Form>
              </Accordion.Header>
              <Accordion.Body className="mx-5">
                {/* Subtasks list */}
                {task.subtasks && task.subtasks.length ? (
                  task.subtasks.map((subtask, index) => {
                    return (
                      <SubtaskList
                        key={subtask._id}
                        subtaskTitle={subtask?.title}
                        status={subtask?.status}
                        subtaskId={subtask._id}
                      />
                    );
                  })
                ) : (
                  <AlertMsg msg="No subtask found" variant="danger" />
                )}

                <InputGroupComp
                  label="Add new subtask?"
                  placeholder="Eg: Do Laundry"
                  buttonName="Add the task"
                  url={URLS.SUBTASKS}
                  todoId={task?._id}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <AlertMsg variant="danger" msg="No task found ..." />
      )}
    </Accordion>
  );
}

export default ListTask;
