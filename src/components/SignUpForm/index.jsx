import React from "react";

import "./styles.css";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super();
    this.title = "";
    this.description = "";
  }

  _handleChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  _handleChangeDescription(event) {
    this.description = event.target.value;
    console.log(this.description);
  }

  _handleNewNote(event) {
    event.preventDefault();
    this.props.createNote(this.title, this.description);
  }

  render() {
    return (
      <form
        className="form__container"
        onSubmit={this._handleNewNote.bind(this)}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          className="form__textarea"
          placeholder="Escreva sua nota"
          onChange={this._handleChangeDescription.bind(this)}
        />
        <button className="form__button" type="submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
