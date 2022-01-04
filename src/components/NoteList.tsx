import * as React from "react";
import { INote } from "../models/node.model";

interface INoteListProps {
  notes: INote[];
}

const NoteList: React.FunctionComponent<INoteListProps> = ({ notes }) => {
  return (
    <React.Fragment>
      <h3 className="mt-3">Notes</h3>
      {notes.map((note) => (
        <div style={{ backgroundColor: note.color }} className="p-3 rounded">
          <h4>{note.title}</h4>
          <h6>{note.text}</h6>
          <p>{note.date}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default NoteList;
