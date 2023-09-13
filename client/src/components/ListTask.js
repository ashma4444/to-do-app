import { Accordion, Form } from "react-bootstrap";
import AlertMsg from "./AlertMsg";
import InputGroupComp from "./InputGroupComp";
import SubtaskList from "./SubtaskList";
import TaskCompleted from "./TaskCompleted";

function ListTask({ tasks }) {
  return (
    <Accordion defaultActiveKey="0">
      {tasks & (tasks.length > 0) ? (
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
                    defaultChecked={task.status === "completed" ? true : false}
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
