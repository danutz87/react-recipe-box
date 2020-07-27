import React from 'react';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleImageChange(e) {
    this.setState({ img: e.target.value });
  }

  handleIngredientsChange(e) {
    this.setState({ ingredients: e.target.value });
  }

  handleInstructionsChange(e) {
    this.setState({ instructions: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title || !this.state.ingredients || !this.state.instructions ) {
      this.error();
      return;
    }
    this.props.add(
      this.state.title,
      this.state.ingredients,
      this.state.instructions,
      this.state.img
    );
    this.props.toggleHidden();
  }

  error() {
    this.setState({ error: true });
  }

  /* closes form when overlay is clicked
   */
  handleClick(e) {
    const formBg = document.querySelector(".form-bg");
    const isClickInside = formBg.contains(e.target);

    if (!isClickInside) {
    // the click was outside the specifiedElement, do something
      this.props.toggleHidden();
    }
  }

  render() {
    let error;
    if (this.state.error) {
      error = (
        <span className="text-color-warning">
          You must complete all fields marked as required
        </span>
      );}
    return (
      <div
        className="form-bg-overlay"
        onClick={this.handleClick.bind(this)}
      >
      <div className="form-bg">
        <form
          className="form"
          onSubmit={this.handleSubmit.bind(this)}
        >
      <i
        className="zmdi zmdi-close zmdi-hc-2x pull-right"
        onClick={this.props.toggleHidden}
      />
      <h2 className="form__title">Add Recipe</h2>
      <label for="recipeName">Recipe name *</label>
      <input
        id="recipeName"
        type="text"
        onChange={this.handleTitleChange.bind(this)}
      />
      <label htmlFor="recipeName">Ingredients *</label>
      <textarea
        id="ingredients"
        onChange={this.handleIngredientsChange.bind(this)}
      />
      <label htmlFor="ingredients">Instructions *</label>
      <textarea
        onChange={this.handleInstructionsChange.bind(this)}
      />
      <label htmlFor="imageUrl">Image URL (optional)</label>
      <input
        id="imageUrl"
        type="text"
        onChange={this.handleImageChange.bind(this)}
      />
      <input
        type="submit"
        value="add recipe"
        className="btn-primary"
      />
            {error}
          </form>
        </div>
      </div>
    );
  }
}

export default AddRecipe;
