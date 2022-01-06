import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { INote } from "./models/node.model";

const initialFieldValues = {
  id: "",
  title: "",
  text: "",
  color: "#dfdfdf",
  date: "",
};

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [note, setNote] = useState<INote>(initialFieldValues);

  const onInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const onDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const data = Object.assign({}, note);
    data.id = `${date.getFullYear()}${
      date.getMonth() < 10 ? `0${`${date.getMonth() + 1}`}` : date.getMonth()
    }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
    console.log(data);
    setNotes([...notes, data]);
    setNote(initialFieldValues);
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} onDeleteNote={onDeleteNote} />
          </Col>
        </Row>
        <Row>
          <Col>
            <form className="mt-3" autoComplete="off" onSubmit={onSubmit}>
              <div>
                <label htmlFor="title" className="form-lable">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={note.title}
                  onChange={onInputChange}
                ></input>
              </div>
              <div className="mt-3">
                <label htmlFor="text" className="form-label">
                  Text
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  name="text"
                  rows={3}
                  value={note.text}
                  onChange={onInputChange}
                ></textarea>
              </div>
              <div className="mt-3">
                <label htmlFor="date" className="form-lable">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={note.date}
                  onChange={onInputChange}
                ></input>
              </div>
              <div className="mt-3 d-flex">
                <label htmlFor="color" className="form-lable">
                  Card Color
                </label>
                <input
                  type="color"
                  id="color"
                  name="color"
                  className="ms-2"
                  value={note.color}
                  onChange={onInputChange}
                ></input>
              </div>
              <Button type="submit" variant="outline-success" className="mt-3">
                Success
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
