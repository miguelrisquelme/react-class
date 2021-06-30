import React from "react";

import "./styles.css";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.description = "";
    this.category = "Sem categoria";
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  _handleChangeDescription(event) {
    this.description = event.target.value;
    console.log(this.description);
  }

  _handleChangeCategory(event) {
    event.preventDefault();
    this.category = event.target.value;
  }

  _handleNewNote(event) {
    event.preventDefault();
    this.props.createNote(this.title, this.description, this.category);
  }

  render() {
    return (
      <form
        className="form__container"
        onSubmit={this._handleNewNote.bind(this)}
      >
        <input
          className="form__input form__basics"
          type="text"
          placeholder="Titulo"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          className="form__textarea form__basics"
          placeholder="Escreva sua nota"
          onChange={this._handleChangeDescription.bind(this)}
        />
        <select
          onChange={this._handleChangeCategory.bind(this)}
          className="form__select form__basics"
          name="categories"
          id="categories"
        >
          <option disabled selected>
            Selecione uma categoria
          </option>
          {this.state.categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
        <button className="form__button form__basics" type="submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
