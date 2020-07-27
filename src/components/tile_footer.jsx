import React from 'react';

class TileFooter extends React.Component {
  render() {
    return (
      <footer className="tile__footer">
        <button className="btn-primary">
          <i className="zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" /> open recipe
        </button>
      </footer>
    );
  }
}

export default TileFooter;
