import * as React from "react";
import { INote } from "../models/node.model";

interface INoteProps {
  note: INote;
  onDeleteNote(id: string): void;
}

const Note: React.FC<INoteProps> = ({ note, onDeleteNote }) => {
  return (
    <div
      style={{ backgroundColor: note.color }}
      className="p-3 mt-2 mb-2 rounded "
    >
      <h4>{note.title}</h4>
      <h6>{note.text}</h6>
      <p>{note.date}</p>
      <button type="button" onClick={() => onDeleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
