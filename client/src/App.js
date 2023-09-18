// import AlertMsg from "./components/AlertMsg";
import "./App.css";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import useApi from "./hooks/useApi";

import InputGroupComp from "./components/InputGroupComp";
import ListTask from "./components/ListTask";
import NavBar from "./components/Navbar";
import Loading from "./components/Loading";
import Practice from "./components/Practice";
import Title from "./components/Title";
import Toaster from "./global/Toaster";
import { useThemeContext } from "./contexts/ThemeContext";
import { URLS } from "./constants";

function App() {
  const { theme } = useThemeContext();
  const { data: tasks, error, loading, list } = useApi();

  useEffect(() => {
    list();
  }, [list]);

  if (error) return <>{JSON.stringify(error)}</>;

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    // fragments
    // <div className={`${theme}`}>
    //   <NavBar />
    //   <Container>
    //     <Row>
    //       <Col md={{ span: 6, offset: 3 }}>
    //         <Title title="TODO APP" />
    //         <InputGroupComp
    //           label="Add new Todo?"
    //           placeholder="Eg: Do Laundry"
    //           buttonName="Add the task"
    //           url={URLS.TODOS}
    //         />

    //         <ListTask tasks={tasks} />
    //         {/* <AlertMsg variant="danger" msg="Error found" /> */}
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Toaster />
    // </div>
    <Practice />
  );
}

export default App;
