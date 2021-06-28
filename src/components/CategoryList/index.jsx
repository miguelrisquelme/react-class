import React from "react";

import "./styles.css";

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleInputEvent(event) {
    if (event.key == "Enter") {
      this.props.addCategory(event.target.value);
    }
  }

  render() {
    return (
      <section className="category__container">
        <input
          className="category__input"
          type="text"
          placeholder="Digite a categoria para adicionar"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
        <ul className="category__items">
          {this.props.categories.map((category, index) => (
            <li className="category__item" key={index}>
              <p className="category__text">{category}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
