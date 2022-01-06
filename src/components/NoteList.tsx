import * as React from "react";
import { INote } from "../models/node.model";
import Note from "./Note";

interface INoteListProps {
  notes: INote[];
  onDeleteNote(id: string): void;
}

const NoteList: React.FC<INoteListProps> = ({ notes, onDeleteNote }) => {
  return (
    <React.Fragment>
      <h3 className="mt-3">Notes</h3>
      {notes.map(
        (note, key: number): JSX.Element => (
          <Note key={key} note={note} onDeleteNote={onDeleteNote} />
        )
      )}
    </React.Fragment>
  );
};

export default NoteList;
