import React from "react";

import NoteList from "./components/NoteList";
import SignUpForm from "./components/SignUpForm";
import CategoryList from "./components/CategoryList";

export default class App extends React.Component {
  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, description) {
    this.setState({
      notes: this.notes.push({ title: title, description: description }),
    });
  }

  deleteNote(index) {
    let arrayNotes = this.notes;
    arrayNotes.splice(index, 1);
    this.setState({ notes: arrayNotes });
  }

  addCategory(categoryName) {
    const newArrayCategories = [...this.state.categories, categoryName];
    const newState = { ...this.state, categories: newArrayCategories };
    this.setState(newState);
  }

  render() {
    return (
      <>
        <SignUpForm createNote={this.createNote.bind(this)} />
        <CategoryList
          categories={this.state.categories}
          addCategory={this.addCategory.bind(this)}
        />
        <NoteList notes={this.notes} deleteNote={this.deleteNote.bind(this)} />
      </>
    );
  }
}
