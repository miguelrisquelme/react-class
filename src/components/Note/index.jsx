import React from "react";

import "./styles.css";
import { ReactComponent as DeleteIcon } from "./../../assets/img/delete.svg";
export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  delete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    return (
      <li className="note__container">
        <section className="note__content">
          <header className="note__header">
            <h3 className="note__title">
              {!this.props.title ? "Sem título" : this.props.title}
            </h3>
            <DeleteIcon
              className="note__delete"
              onClick={this.delete.bind(this)}
            />
          </header>
          <p className="note__description">
            {!this.props.description ? "Sem Descrição" : this.props.description}
          </p>
        </section>
      </li>
    );
  }
}
