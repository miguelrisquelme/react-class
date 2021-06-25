import React from "react";

import "./styles.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="note__container">
        <section className="note__content">
          <header className="note__header">
            <h3 className="note__title">{this.props.title}</h3>
          </header>
          <p className="note__description">{this.props.description}</p>
        </section>
      </li>
    );
  }
}
