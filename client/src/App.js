// import AlertMsg from "./components/AlertMsg";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import InputGroupComp from "./components/InputGroupComp";
import ListTask from "./components/ListTask";
import NavBar from "./components/Navbar";
import Title from "./components/Title";
import Toaster from "./components/Toaster";
import { useThemeContext } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";
import useApi from "./hooks/useApi";

function App() {
  const { theme } = useThemeContext();
  const { data, error, loading, list } = useApi();

  useEffect(() => {
    list();
  }, []);

  console.log("----" + data);

  return (
    // fragments
    <div className={`${theme}`}>
      <NavBar />
      <Toaster />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title title="TODO APP" />
            <InputGroupComp
              label="Add new Todo?"
              placeholder="Eg: Do Laundry"
              buttonName="Add the task"
            />

            <ListTask tasks={tasks} />
            {/* <AlertMsg variant="danger" msg="Error found" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
