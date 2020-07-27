import React from 'react';

class BoxFooter extends React.Component {
  render() {
    return (
      <footer className="box__footer">
        <button
          className="btn-warning"
          onClick={this.props.delete}
        >
          <i className="zmdi zmdi-delete zmdi-hc-lg btn-icon" /> Delete
        </button>
        <button
          onClick={this.props.toggleEdit}
        >
          <i className="zmdi zmdi-edit zmdi-hc-lg btn-icon" /> Edit
        </button>
      </footer>
    );
  }
}

export default BoxFooter;
