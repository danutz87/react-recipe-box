import React from 'react';

class AddButton extends React.Component {

  render() {
    return (
      <button
        className="action pull-right"
        onClick={this.props.toggleHidden}
      >
        Add recipe
      </button>
    );
  }

}


export default AddButton;
