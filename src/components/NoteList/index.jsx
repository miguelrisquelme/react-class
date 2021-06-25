import React from "react";

import Note from "./../Note";

import "./styles.css";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="noteList__container">
        {this.props.notes.map((note, index) => (
          <Note key={index} title={note.title} description={note.description} />
        ))}
      </ul>
    );
  }
}
