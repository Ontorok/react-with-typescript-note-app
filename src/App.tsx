import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { INote } from "./models/node.model";

function App() {
  const [notes] = useState<INote[]>([
    {
      id: new Date().toLocaleTimeString(),
      title: "Meetings",
      text: "Meeting with UI/UX team",
      color: "#efefef",
      date: new Date().toLocaleDateString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
