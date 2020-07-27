import React from 'react';

class TileHeader extends React.Component {
  render() {
    return (
      <header
        className="tile__header"
      >
        {this.props.title}
      </header>
    );
  }
}

export default TileHeader;
