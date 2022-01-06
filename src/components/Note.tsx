import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { INote } from "../models/node.model";

interface INoteProps {
  note: INote;
  onDeleteNote(id: string): void;
}

const Note: React.FC<INoteProps> = ({ note, onDeleteNote }) => {
  return (
    <Card
      style={{ backgroundColor: note.color }}
      className="p-3 mt-2 mb-2 rounded "
    >
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        <Button
          className="mt-1"
          type="button"
          variant="danger"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Note;
