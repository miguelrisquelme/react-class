import React from "react";

import Note from "./../Note";

import "./styles.css";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNotes);
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="noteList__container">
        {this.state.notes.map((note, index) => (
          <Note
            deleteNote={this.props.deleteNote}
            key={index}
            index={index}
            title={note.title}
            description={note.description}
            category={note.category}
          />
        ))}
      </ul>
    );
  }
}
