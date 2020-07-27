import React from 'react';
import AddButton from './add_button';
import AddRecipe from './add_recipe';

class HeaderHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    if (this.state.isHidden) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  render() {
    return (
      <header className="page__header">
        <div className="container flex-container">
          <h1>Recipe Box</h1>
          <AddButton
            toggleHidden={this.toggleHidden.bind(this)}
          />
        </div>
        {!this.state.isHidden && <AddRecipe add={this.props.add} toggleHidden={this.toggleHidden.bind(this)} />}
      </header>
    );
  }
}

export default HeaderHeader;
