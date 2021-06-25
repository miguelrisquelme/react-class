import React from "react";

import NoteList from "./components/NoteList";
import SignUpForm from "./components/SignUpForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: [],
    };
  }

  createNote(title, description) {
    this.notes.push({ title: title, description: description });
    this.setState({
      notes: this.notes,
    });
  }

  render() {
    return (
      <>
        <SignUpForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.notes} />
      </>
    );
  }
}
