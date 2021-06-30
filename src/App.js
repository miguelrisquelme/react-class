import React from "react";

import NoteList from "./components/NoteList";
import SignUpForm from "./components/SignUpForm";
import CategoryList from "./components/CategoryList";
import Categories from "./data/Categories";
import ArrayNotes from "./data/Notes";

export default class App extends React.Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
  }

  render() {
    return (
      <>
        <SignUpForm
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <CategoryList
          categories={this.categories}
          addCategory={this.categories.addCategory.bind(this.categories)}
        />
        <NoteList notes={this.notes} deleteNote={this.notes.removeNote} />
      </>
    );
  }
}
