import React from "react";

import "./styles.css";

export default class CategoryList extends React.Component {
  render() {
    return (
      <section className="category__container">
        <input
          className="category__input"
          type="text"
          placeholder="Digite a categoria para adicionar"
        />
        <ul className="category__items">
          <li className="category__item">
            <p className="category__text">ana</p>
          </li>
          <li className="category__item">
            <p className="category__text">bolo de chocolate</p>
          </li>
          <li className="category__item">
            <p className="category__text">react</p>
          </li>
          <li className="category__item">
            <p className="category__text">abacate</p>
          </li>
          <li className="category__item">
            <p className="category__text">js</p>
          </li>
          <li className="category__item">
            <p className="category__text">Categoria</p>
          </li>
          <li className="category__item">
            <p className="category__text">Categoria</p>
          </li>
        </ul>
      </section>
    );
  }
}
